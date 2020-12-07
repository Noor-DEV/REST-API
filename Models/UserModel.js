const mongoose = require("mongoose");
const ModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
  }
);
const UserModel = mongoose.model("users", ModelSchema);
module.exports = UserModel;
