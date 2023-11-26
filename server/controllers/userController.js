/* Los controladores son la logica del backend */
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { sendEmail } from "../utils/nodemailer.js";

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
    sendEmail(email);
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
  const { name, lastName, email, password, image } = req.body;
  // Busca al usuario por su ID en la base de datos
  const user = await User.findById(req.user._id);

  if (user) {
    // Actualiza los campos del usuario con los nuevos valores
    user.name = name || user.name;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.image = image || user.image;
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
      image: updatedUser.image,
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

// @desc Get users
//@route GET /api/users/users
//@access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});
// @desc Update users
//@route PUT /api/users/users/:id
//@access Private/Admin

// @desc Get user by id
//@route GET /api/users/users/:id
//@access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400);
    throw new Error("Usuario no encontrado");
  }
});

const getEmpresas = asyncHandler(async (req, res) => {
  const empresas = await User.find({ isEmpresa: true });
  if (empresas) {
    res.status(200).json(empresas);
  } else {
    res.status(400);
    throw new Error("No existen empresas");
  }
});

// @desc delete users
//@route DELETE /api/users/users/:id
//@access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("No puedes eliminar una cuenta admin");
    }
    await User.deleteOne({ _id: user._id });
    res.status(200).json({ message: "Usuario eliminado" });
  } else {
    res.status(404);
    throw new Error("Usuario no encontrado");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);
    user.isEmprendedor = Boolean(req.body.isEmprendedor);
    user.isEmpresa = Boolean(req.body.isEmpresa);

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      lastName: updatedUser.lastName,
      isAdmin: updatedUser.isAdmin,
      isEmprendedor: updatedUser.isEmprendedor,
      isEmpresa: updatedUser.isEmpresa,
    });
  } else {
    res.status(404);
    throw new Error("Usuario no encontrado");
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
  editUser,
  getUsers,
  deleteUser,
  updateUser,
  getEmpresas,
};
