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

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Producto no encontrado");
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { name, image, category, description, price, countInStock } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.image = image;
    product.category = category;
    product.description = description;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Recurso no encontrado");
  }
});

const selectTopProducts = asyncHandler(async (req, res) => {
  /* Lo que usare una vez tenga los rating */
  /* const products = await Product.find({ rating: { $gt: 3.5 } }).limit(10); */
  const products = await Product.find({}).limit();
  if (products) {
    return res.json(products);
  } else {
    res.status(404);
    throw new Error("No existen producto");
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await Product.deleteOne({ _id: product.id });
    res.status(200).json({ message: "Producto eliminado" });
  } else {
    res.status(400);
    throw new Error("Recurso no encontrado");
  }
});

export {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProductById,
  selectTopProducts,
};
