const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.port || 5000;
const mongoDB = require("./db");
const CreateUser = require("./Routes/CreateUser");
const DisplayData = require("./Routes/DisplayData");
const OrderData = require("./Routes/OrderData");
const path = require("path");

mongoDB();
dotenv.config();

// deployement
// const ___dirname = path.resolve();

//

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
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

// deployment
app.use(express.static(path.join(path.resolve(), "/frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(path.resolve(), "frontend", "dist", "index.html"));
// });

//

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log("Server is listning on port 5000...");
});
