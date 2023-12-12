import express from "express";
const router = express.Router();

import {
    createEmprendimiento,
    getEmprendimientos,
    getEmprendimientoById,
    updateEmprendimiento,
    deleteEmprendimiento,
    getMyEmprendimientos,
} from "../controllers/emprendimientoController.js";
import { protect, emprendedor } from "../middleware/authMiddleware.js";

router.route("/").get(getEmprendimientos).post(protect, createEmprendimiento);
router.route("/mine").get(protect, getMyEmprendimientos);
router
    .route("/:id")
    .get(protect, getEmprendimientoById)
    .put(protect, updateEmprendimiento)
    .delete(protect, deleteEmprendimiento)

export default router;

//chequear el tema del protect de emprendedor