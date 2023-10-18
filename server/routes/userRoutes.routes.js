import express from "express";
const router = express.Router();

import {
  registerUser,
  authUser,
  logoutUser,
} from "../controllers/userController.js";
import { protect, emprendedor } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/micuenta", logoutUser);
router.post("/micuenta", logoutUser);


export default router;
