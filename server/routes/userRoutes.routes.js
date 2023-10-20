import express from "express";
const router = express.Router();

import {
  registerUser,
  authUser,
  logoutUser,
  editUser,
} from "../controllers/userController.js";
import { protect, emprendedor } from "../middleware/authMiddleware.js";

//Autenticacion
router.route("/").post(registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

//Rutas de usuario
router.put("/profile", protect, editUser);

export default router;
