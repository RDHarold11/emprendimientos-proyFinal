/* Los controladores son la logica del backend */
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      image: user.image,
      isAdmin: user.isAdmin,
      isEmprendedor: user.isEmprendedor,
      isEmpresa: user.isEmpresa,
    });
  } else {
    res.status(400);
    throw new Error("Correo o contraseña incorrectos");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { email, name, lastName, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("El usuario ya existe");
  }
  const user = await User.create({
    name,
    lastName,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      lastname: user.lastName,
      image: user.image,
      isAdmin: user.isAdmin,
      isEmprendedor: user.isEmprendedor,
      isEmpresa: user.isEmpresa,
    });
  } else {
    res.status(400);
    throw new Error("Error al crear el usuario");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out succesfully" });
});

export { authUser, registerUser, logoutUser };
