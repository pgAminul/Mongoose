const mongoose = require("mongoose");

//  Create a schema

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

//  mongodb (collection)----  mongoose (model)

const Product = mongoose.model("ProductCollectio", ProductSchema);

module.exports = Product;
