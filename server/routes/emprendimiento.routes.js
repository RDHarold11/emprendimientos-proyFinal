import express from "express";
const router = express.Router();

import {
  createEmprendimiento,
  getEmprendimientos,
  getEmprendimientoById,
  updateEmprendimiento,
} from "../controllers/emprendimientoController.js";
import { protect, emprendedor } from "../middleware/authMiddleware.js";

router.route("/").get(getEmprendimientos).post(protect, createEmprendimiento);
router
  .route("/:id")
  .get(protect, getEmprendimientoById)
  .put(protect, updateEmprendimiento);

export default router;

//chequear el tema del protect de emprendedor
