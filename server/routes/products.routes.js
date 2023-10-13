import express from "express";
const router = express.Router();

import { createProduct } from "../controllers/productsController.js";
import { protect, emprendedor } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createProduct);

export default router;

//chequear el tema del protect de emprendedor
