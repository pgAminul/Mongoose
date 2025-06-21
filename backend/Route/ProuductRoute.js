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
    // const allProduct = await Product.find();

    // Select()
    // const allProduct = await Product.find().select("name");

    //  Skip()
    // const allProduct = await Product.find().select("name").skip(5);

    //  where().equals()
    // const allProduct = await Product.find()
    //   .select("name")
    //   .where("price")
    //   .equals(25);

    //  gte() and lte()
    // const allProduct = await Product.find()
    //   .where("price")
    //   .gte(22)
    //   .where("price")
    //   .lte(25);

    //  ne() not equal
    // const allProduct = await Product.find()
    //   .select("name")
    //   .where("price")
    //   .ne(20);

    // or() and()
    // const allProduct = await Product.find()
    //   .select("name")
    //   .or([{ price: 20, role: "admin" }]);

    // const allProduct = await Product.find()
    // .and([{ price: 20, role: "admin" }]);

    // exists()

    const allProduct = await Product.find()
      .select("name")
      .where("category")
      .exists(true);

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

// Query Select method

router.get("/specificProduct/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // specific data filed
    const getSingleProduct = await Product.findById(id).select("name price");
    // data
    // const getSingleProduct = await Product.findById(id).select("-name");
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
