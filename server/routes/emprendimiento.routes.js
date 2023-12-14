import express from "express";
const router = express.Router();

import {
  createEmprendimiento,
  getEmprendimientos,
  getEmprendimientoById,
  updateEmprendimiento,
  deleteEmprendimiento,
  getMyEmprendimientos,
  selectTopEightEmprendimientos,
  selectLastFourEmprendimientos,
  selectTopEmprendimientos,
  createEmprendimientoReview,
} from "../controllers/emprendimientoController.js";
import { protect, emprendedor } from "../middleware/authMiddleware.js";

router.route("/").get(getEmprendimientos).post(protect, createEmprendimiento);
router.route("/mine").get(protect, getMyEmprendimientos);
router.get("/lastFour", selectLastFourEmprendimientos);
router.get("/topEight", selectTopEightEmprendimientos);
router.get("/top", selectTopEmprendimientos);
router.post("/:id/reviews", protect, createEmprendimientoReview);
router
  .route("/:id")
  .get(getEmprendimientoById)
  .put(protect, updateEmprendimiento)
  .delete(protect, deleteEmprendimiento);

export default router;

//chequear el tema del protect de emprendedor
