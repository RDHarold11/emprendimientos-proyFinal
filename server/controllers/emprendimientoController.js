import asyncHandler from "../middleware/asyncHandler.js";
import Emprendimiento from "../models/emprendimientosModel.js";

const getEmprendimientos = asyncHandler(async(req, res) => {

    const emprendimiento = await Emprendimiento.find({});


    res.json(emprendimiento);

});
const createEmprendimiento = asyncHandler(async(req, res) => {
    const emprendimiento = new Emprendimiento({
        title: "Sample title",
        user: req.user._id,
        description: "Sample description",
        numReviews: 0,
        rating: 0,
        image: "Sample img",
    });
    const createdEmprendimiento = await emprendimiento.save();
    if (createEmprendimiento) {
        res.json(201).json(createdEmprendimiento);
    } else {
        res.status(404);
        throw new Error("No se pudo crear un emprendimiento");
    }
});

export { createEmprendimiento, getEmprendimientos };