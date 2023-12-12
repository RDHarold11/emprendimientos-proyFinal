import asyncHandler from "../middleware/asyncHandler.js";
import Emprendimiento from "../models/pubsModel.js";

const getEmprendimientos = asyncHandler(async(req, res) => {
    const emprendimiento = await Emprendimiento.find({});
    res.json(emprendimiento);
});

const getEmprendimientoById = asyncHandler(async(req, res) => {
    const singleEmprendimiento = await Emprendimiento.findById(req.params.id);
    if (singleEmprendimiento) {
        res.status(201).json(singleEmprendimiento);
    } else {
        res.status(404);
        throw new Error("No existe este emprendimiento");
    }
});

const updateEmprendimiento = asyncHandler(async(req, res) => {
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

const deleteEmprendimiento = asyncHandler(async(req, res) => {
    const emp = await Emprendimiento.findById(req.params.id);
    if (emp) {
        await Emprendimiento.deleteOne({ _id: emp.id });
        res.status(200).json({ message: "Emprendimiento eliminado" });
    } else {
        res.status(400);
        throw new Error("Recurso no encontrado");
    }
});

const createEmprendimiento = asyncHandler(async(req, res) => {
    const emprendimiento = new Emprendimiento({
        title: "Sample title",
        user: req.user._id,
        description: "Sample description",
        rating: 0,
        image: "Sample img",
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
const getMyEmprendimientos = asyncHandler(async(req, res) => {
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
};