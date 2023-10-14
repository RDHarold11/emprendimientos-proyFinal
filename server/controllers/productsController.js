import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

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
    image: "Sample img",
  });
  const createdProduct = await product.save();
  if (createProduct) {
    res.json(201).json(createdProduct);
  } else {
    res.status(404);
    throw new Error("No se pudo crear un producto");
  }
});

export { createProduct };
