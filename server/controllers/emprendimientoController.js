import asyncHandler from "../middleware/asyncHandler.js";
import Emprendimiento from "../models/pubsModel.js";

const getEmprendimientos = asyncHandler(async (req, res) => {
  const emprendimiento = await Emprendimiento.find({});
  res.json(emprendimiento);
});

const getEmprendimientoById = asyncHandler(async (req, res) => {
  const singleEmprendimiento = await Emprendimiento.findById(req.params.id);
  if (singleEmprendimiento) {
    res.status(201).json(singleEmprendimiento);
  } else {
    res.status(404);
    throw new Error("No existe este emprendimiento");
  }
});

const updateEmprendimiento = asyncHandler(async (req, res) => {
  const { title, image, description } = req.body;

  const emprendimiento = await Emprendimiento.findById(req.params.id);
  if (emprendimiento) {
    emprendimiento.title = title;
    emprendimiento.image = image;
    emprendimiento.description = description;

    const updatedEmp = await emprendimiento.save();
    res.json(updatedEmp);
  } else {
    res.status(404);
    throw new Error("Emprendimient no encontrado");
  }
});

const createEmprendimiento = asyncHandler(async (req, res) => {
  const emprendimiento = new Emprendimiento({
    title: "Sample title",
    user: req.user._id,
    description: "Sample description",
    rating: 0,
    image: "Sample img",
    numReviews: 0,
  });
  const createdEmprendimiento = await emprendimiento.save();
  if (createEmprendimiento) {
    res.json(201).json(createdEmprendimiento);
  } else {
    res.status(404);
    throw new Error("No se pudo crear un emprendimiento");
  }
});

export {
  createEmprendimiento,
  getEmprendimientos,
  getEmprendimientoById,
  updateEmprendimiento,
};
