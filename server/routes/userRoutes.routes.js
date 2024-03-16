import express from "express";
const router = express.Router();

import {
  registerUser,
  authUser,
  logoutUser,
  editUser,
  getUserById,
  updateUser,
  deleteUser,
  getUsers,
  getEmpresas,
} from "../controllers/userController.js";
import { protect, emprendedor, admin } from "../middleware/authMiddleware.js";

//Autenticacion
router.route("/").post(registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

//Rutas de usuario
router.put("/profile", protect, editUser);

//Rutas de ADMIN
router.get("/", protect, admin, getUsers);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
router.get("/empresas", protect, admin, getEmpresas);

export default router;
