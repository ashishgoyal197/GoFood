const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/orderdata", async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { Order_date: req.body.order_date });

  // find curr email exist or not i.e have any previous order or not
  let eId = await Order.findOne({ email: req.body.email });

  console.log(eId);
  if (eId === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.json({ success: false });
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        {
          $push: { order_data: data },
        }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.json({ success: false });
    }
  }
});

// my order

router.post("/orderdata", async (req, res) => {
  try {
    let myData = await Order.findOne({
      email: req.body.email,
    });
    res.json({ orderData: myData });
  } catch (error) {
    res.send("Server Error");
  }
});

module.exports = router;
