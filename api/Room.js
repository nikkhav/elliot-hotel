const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  type_room: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  max_people: {
    type: Number,
    required: true,
  },
});
