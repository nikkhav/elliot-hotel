const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
});
