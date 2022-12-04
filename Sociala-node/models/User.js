require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  country: String,
  terms: String,
});

module.exports = mongoose.model("user", User);
