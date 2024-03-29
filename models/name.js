const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: String,
    required: true,
  },

  graduated: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("name", nameSchema);
