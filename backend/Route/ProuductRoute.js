const express = require("express");
const router = express.Router();
const Product = require("../Schema/ProductSchema");

router.post("/product", async (req, res) => {
  try {
    const body = req.body;
    const newProduct = new Product(body);
    const result = await newProduct.save();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
