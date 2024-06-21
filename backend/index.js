const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const CreateUser = require("./Routes/CreateUser");
const DisplayData = require("./Routes/DisplayData");
const OrderData = require("./Routes/OrderData");

mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/api", CreateUser);
app.use("/api", DisplayData);
app.use("/api", OrderData);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log("Server is listning on port 5000...");
});
