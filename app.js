const express = require("express");
const UsersRoutes = require("./Routes/users");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config.js");
mongoose
  .connect(process.env.CONNECT_TO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((a) => console.log("connected2db"));
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", UsersRoutes);
const PORT = 8000;
app.listen(PORT);
app.get("/", (req, res) => res.redirect("/users"));
