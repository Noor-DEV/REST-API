const UserModel = require("../Models/UserModel.js");
const handleUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users.length ? users : "No Data To Display");
  } catch (err) {
    console.log(err, "error in loading all users");
  }
};
const handleSpecificUser = async (req, res) => {
  const { id } = req.params;
  try {
    const specificUser = await UserModel.find({ _id: id });
    res.send(specificUser);
  } catch (err) {
    console.log(err, "error in finding specific User");
  }
};
const handlePost = (req, res) => {
  const newUser = new UserModel(req.body).save();
  res.redirect("/");
};
const handleDel = async (req, res) => {
  const { id } = req.params;
  UserModel.findOneAndDelete({ _id: id }).then((a) => {
    res.redirect("/");
  });
};

const handlePatch = async (req, res) => {
  const { id } = req.params;
  UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    () => {
      console.log("done patching");
      res.redirect(`/users/${id}`);
    }
  );
};
module.exports = {
  handleUsers,
  handleSpecificUser,
  handlePost,
  handleDel,
  handlePatch,
};
