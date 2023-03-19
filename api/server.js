const app = require(".");
const port = process.env.PORT || 4000;
//const dotenv = require("dotenv").config({ path: "./config.env" });
//const mongoose = require("mongoose");

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
