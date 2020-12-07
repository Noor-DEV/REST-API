const express = require("express");
const {
  handleUsers,
  handleSpecificUser,
  handlePost,
  handleDel,
  handlePatch,
} = require("../Controllers/userControlls.js");
const Router = express.Router();
Router.get("/", handleUsers);
Router.get("/:id", handleSpecificUser);
Router.post("/", handlePost);
Router.delete("/:id", handleDel);
Router.patch("/:id", handlePatch);
module.exports = Router;
