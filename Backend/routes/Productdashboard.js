const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");

// CREATE PRODUCT
const createProductHandler = async (req, res) => {
  try {
    const { productName, about, contact, address, userId, userName } = req.body;
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }
    const imagePath = `/uploads/${req.file.filename}`;
    const product = await Product.create({
      productName,
      image: imagePath,
      about,
      contact,
      address,
      userId,
      userName,
    });
    res.status(201).json({ success: true, product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

router.post("/create", auth, upload.single("image"), createProductHandler);
router.post("/addproduct", auth, upload.single("image"), createProductHandler);
router.post("/", auth, upload.single("image"), createProductHandler);

// GET ALL PRODUCTS
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCTS BY USER
router.get("/user/:userId", async (req, res) => {
  try {
    const products = await Product.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SINGLE PRODUCT
router.get("/:id", auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE PRODUCT
router.put("/:id", auth, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, updatedProduct });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE PRODUCT
router.delete("/:id", auth, async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;