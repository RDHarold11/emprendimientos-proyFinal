import asyncHandler from "../middleware/asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("No autorizado, token fallido");
    }
  } else {
    res.status(401);
    throw new Error("No autorizado, no existe un token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  }
  res.status(401);
  throw new Error("No autorizado como admin");
};

const emprendedor = (req, res, next) => {
  if (req.user && req.user.isEmprendedor) {
    next();
  }
  res.status(401);
  throw new Error("No autorizado como emprendedor");
};

export { protect, admin, emprendedor };
