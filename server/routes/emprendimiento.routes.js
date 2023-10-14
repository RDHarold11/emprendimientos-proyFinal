import express from "express";
const router = express.Router();

import { createEmprendimiento, getEmprendimientos } from "../controllers/emprendimientoController.js";
import { protect, emprendedor } from "../middleware/authMiddleware.js";

router.route("/").get(getEmprendimientos).post(protect, createEmprendimiento);


export default router;

//chequear el tema del protect de emprendedor