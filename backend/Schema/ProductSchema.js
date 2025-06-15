const mongoose = require("mongoose");

//  Create a schema

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    required: [true, "product name is required"],
    trim: true,
    // minlength: 5,
    minlength: [5, "name must be more then 5 chrc "],
    // maxlength: 10,
    maxlength: [10, "name must be less then 10 chrc "],

    // enum: {
    //   values: ["active", "inactive"],
    // },
  },
  price: Number,
  category: String,
});

//  mongodb (collection)----  mongoose (model)

const Product = mongoose.model("ProductCollectio", ProductSchema);

module.exports = Product;
