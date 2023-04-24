const express = require("express");
const logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.send({
    message: "pong",
  });
});

module.exports = app;
