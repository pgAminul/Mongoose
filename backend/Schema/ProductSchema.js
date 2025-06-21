const mongoose = require("mongoose");

//  Create a schema

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    unique: true,
    required: [true, "name is required"],
    trim: true,
    minlength: [10, "min length is 10"],
    maxlength: [20, "max length is 20"],
  },
  price: {
    type: Number,
    min: 20,
    max: [99, "max price will be 99"],
  },
  category: { type: String, default: "food", lowercase: true },

  role: {
    type: String,
    enum: ["admin", "user"],
  },

  phoneNumber: {
    type: Number,
    validate: {
      validator: (number) => {
        return /^\d{11}$/.test(number);
      },
      message: (number) =>
        `${number.value} is not a valid 11 digit phone number`,
    },
  },
});

//  mongodb (collection)----  mongoose (model)

const Product = mongoose.model("ProductCollectio", ProductSchema);

module.exports = Product;
