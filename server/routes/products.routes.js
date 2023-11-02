import express from "express";
const router = express.Router();

import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";
import { protect, emprendedor } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, createProduct);
export default router;

//chequear el tema del protect de emprendedor
