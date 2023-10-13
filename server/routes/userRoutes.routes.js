import express from "express";
const router = express.Router();

import {
  registerUser,
  authUser,
  logoutUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

export default router;
