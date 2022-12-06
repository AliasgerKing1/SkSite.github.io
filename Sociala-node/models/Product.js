require("../config/database");

const mongoose = require("mongoose");

const Product = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    compprice : Number,
    costprice : Number,
    startpoint : Number,
    type :String,
    vendor :String,
    collections :String,
    tags :String,
})

module.exports = mongoose.model("product", Product);