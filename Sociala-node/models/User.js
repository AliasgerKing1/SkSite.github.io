require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    password : String,
    re_password : String,
    country : String,
})

module.exports = mongoose.model("user", User);