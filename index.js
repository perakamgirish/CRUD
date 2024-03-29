const express = require("express");
const Port = 5000;
const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/programming";

const app = express();

mongoose.connect(URL, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", function () {
  console.log("connected......");
});

app.use(express.json());

const nameRouter = require("./routes/names");
app.use("/", nameRouter);

app.listen(Port, function () {
  console.log(`The port is Running on the Port number ${Port}`);
});
