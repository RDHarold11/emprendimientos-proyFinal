import express from "express";
const router = express.Router();

import {
  createPeticion,
  getPeticionById,
  getPeticiones,
  deletePeticion,
  getMyPeticiones,
  markAsResuelto,
} from "../controllers/peticionesController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(protect, admin, getPeticiones)
  .post(protect, createPeticion);

router.get("/peticiones/me", protect, getMyPeticiones);

router
  .route("/:id")
  .get(protect, admin, getPeticionById)
  .delete(protect, admin, deletePeticion)
  .put(protect, admin, markAsResuelto);

export default router;
