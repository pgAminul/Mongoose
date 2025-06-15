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

// Get all Product
router.get("/getProduct", async (req, res) => {
  try {
    const allProduct = await Product.find();
    res.send(allProduct);
  } catch (error) {
    res.send(error.message);
  }
});

//  Get Single Product
router.get("/singleProduct/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getSingleProduct = await Product.findById(id);
    res.send(getSingleProduct);
  } catch (error) {
    res.status(500).send({ message: "server side error" });
  }
});

router.delete("/productDelete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.send(deletedProduct);
  } catch (error) {
    res.send(error.message);
  }
});
module.exports = router;
