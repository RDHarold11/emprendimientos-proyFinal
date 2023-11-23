import express from "express";
const router = express.Router();

import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../controllers/productController.js";
import { protect, emprendedor, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, createProduct);
router.route("/:id").delete(protect, deleteProduct);
export default router;

//chequear el tema del protect de emprendedor
