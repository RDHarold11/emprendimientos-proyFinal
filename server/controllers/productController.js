import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    user: req.user._id,
    price: 0,
    category: "category sample",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
    rating: 0,
    image: "/images/sample.jpg",
  });
  const createdProduct = await product.save();
  if (createdProduct) {
    res.json(201).json(createdProduct);
  } else {
    res.status(404);
    throw new Error("No se pudo crear un producto");
  }
});

export { createProduct, getProducts };
