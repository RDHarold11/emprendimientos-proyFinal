import asyncHandler from "../middleware/asyncHandler.js";
import Peticiones from "../models/peticionesModel.js";
import { peticionRecibidaEmail } from "../utils/nodemailer.js";
//Admin
const getPeticiones = asyncHandler(async (req, res) => {
  const peticiones = await Peticiones.find({});
  res.json(peticiones);
});

const getMyPeticiones = asyncHandler(async (req, res) => {
  const peticiones = await Peticiones.find({ user: req.user._id });
  if (peticiones) {
    res.status(201).json(peticiones);
  } else {
    res.status(404);
    throw new Error("No tienes peticiones");
  }
});

//Admin
const markAsResuelto = asyncHandler(async (req, res) => {
  const peticion = await Peticiones.findById(req.params.id);
  if (peticion) {
    peticion.resuelto = true;
    const peticionUpdated = await peticion.save();
    res.json(peticionUpdated);
  } else {
    res.status(404);
    throw new Error("No existe esta petición");
  }
});

//Admin
const getPeticionById = asyncHandler(async (req, res) => {
  const peticion = await Peticiones.findById(req.params.id);
  if (peticion) {
    res.status(201).json(peticion);
  } else {
    res.status(404);
    throw new Error("No existe esta peticion");
  }
});

const deletePeticion = asyncHandler(async (req, res) => {
  const peticion = await Peticiones.findById(req.params.id);
  if (peticion) {
    await Peticiones.deleteOne({ _id: peticion.id });
    res.status(200).json({ message: "Peticion eliminada" });
  }
});

const createPeticion = asyncHandler(async (req, res) => {
  const peticion = new Peticiones({
    user: req.user._id,
    type: req.body.type,
    description: req.body.description,
    resuelto: false,
  });
  const createdPeticion = await peticion.save();
  if (createdPeticion) {
    res.json(201).json(createdPeticion);
    peticionRecibidaEmail(req.user.email);
  } else {
    res.status(404);
    throw new Error("No se pudo crear la peticion");
  }
});

export {
  getPeticionById,
  getPeticiones,
  deletePeticion,
  createPeticion,
  getMyPeticiones,
  markAsResuelto,
};
