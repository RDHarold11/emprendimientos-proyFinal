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

const createEmprendimientoReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const emprendimiento = await Emprendimiento.findById(req.params.id);

  if (emprendimiento) {
    const alreadyReviewed = emprendimiento.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Ya calificaste este emprendimiento");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    emprendimiento.reviews.push(review);
    emprendimiento.numReviews = emprendimiento.reviews.length;

    emprendimiento.rating =
      emprendimiento.reviews.reduce((acc, item) => item.rating + acc, 0) /
      emprendimiento.reviews.length;

    await emprendimiento.save();
    res.status(201).json({ message: "Calificacion agregada" });
  } else {
    res.status(404);
    throw new Error("Emprendimiento no encontrado");
  }
});

const selectTopEightEmprendimientos = asyncHandler(async (req, res) => {
  const emprendimientos = await Emprendimiento.find({}).limit(8);
  if (emprendimientos) {
    res.json(emprendimientos);
  } else {
    res.status(404);
    throw new Error("No hay emprendimientos");
  }
});

const selectLastFourEmprendimientos = asyncHandler(async (req, res) => {
  const emprendimientos = await Emprendimiento.find({}).limit(4);
  if (emprendimientos) {
    res.json(emprendimientos);
  } else {
    res.status(404);
    throw new Error("Error al obtener los emprendimientos");
  }
});

const selectTopEmprendimientos = asyncHandler(async (req, res) => {
  const emprendimientos = await Emprendimiento.find({ rating: { $gt: 3 } });
  if (emprendimientos) {
    res.json(emprendimientos);
  } else {
    res.status(404);
    throw new Error("No hay emprendimientos");
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
    throw new Error("Emprendimiento no encontrado");
  }
});

const deleteEmprendimiento = asyncHandler(async (req, res) => {
  const emp = await Emprendimiento.findById(req.params.id);
  if (emp) {
    await Emprendimiento.deleteOne({ _id: emp.id });
    res.status(200).json({ message: "Emprendimiento eliminado" });
  } else {
    res.status(400);
    throw new Error("Recurso no encontrado");
  }
});

const createEmprendimiento = asyncHandler(async (req, res) => {
  const emprendimiento = new Emprendimiento({
    title: "Sample title",
    user: req.user._id,
    description: "Sample description",
    rating: 0,
    image: "/images/sample.jpg",
    numReviews: 0,
  });
  const createdEmprendimiento = await emprendimiento.save();
  if (createdEmprendimiento) {
    res.json(201).json(createdEmprendimiento);
  } else {
    res.status(404);
    throw new Error("No se pudo crear un emprendimiento");
  }
});
const getMyEmprendimientos = asyncHandler(async (req, res) => {
  const emprendimientos = await Emprendimiento.find({ user: req.user._id });
  res.status(200).json(emprendimientos);
});

export {
  createEmprendimiento,
  getEmprendimientos,
  getEmprendimientoById,
  updateEmprendimiento,
  deleteEmprendimiento,
  getMyEmprendimientos,
  selectTopEightEmprendimientos,
  selectLastFourEmprendimientos,
  selectTopEmprendimientos,
  createEmprendimientoReview,
};
