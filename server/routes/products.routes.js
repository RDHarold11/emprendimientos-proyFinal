import express from "express";
const router = express.Router();

import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  selectTopProducts,
  createProductReview,
} from "../controllers/productController.js";
import { protect, emprendedor, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, createProduct);
router.get("/top", selectTopProducts);
router.post("/:id/reviews", protect, createProductReview);
router
  .route("/:id")
  .delete(protect, deleteProduct)
  .get(protect, getProductById)
  .put(protect, updateProduct);
export default router;

//chequear el tema del protect de emprendedor
