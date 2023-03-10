const express = require("express");
const app = express();
const morgan = require("morgan");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

app.use("*", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello World",
  });
});

module.exports = app;
