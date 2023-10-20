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

const editUser = asyncHandler(async (req, res) => {
  const { name, lastName, email, password } = req.body;
  // Busca al usuario por su ID en la base de datos
  const user = await User.findById(req.user._id);

  if (user) {
    // Actualiza los campos del usuario con los nuevos valores
    user.name = name || user.name;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    if (password) {
      user.password = password;
    }
    // Guarda los cambios en la base de datos
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isEmprendedor: updatedUser.isEmprendedor,
      isEmpresa: updatedUser.isEmpresa,
      // Otros campos de usuario que desees incluir
    });
  } else {
    res.status(404);
    throw new Error("Usuario no encontrado");
  }
});

export { authUser, registerUser, logoutUser, editUser };
