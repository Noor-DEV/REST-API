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
  },
  { timestamps: true }
);
const UserModel = mongoose.model("users", ModelSchema);
module.exports = UserModel;
