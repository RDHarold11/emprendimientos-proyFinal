import asyncHandler from "../middleware/asyncHandler.js";
import Emprendimiento from "../models/emprendimientoModel.js";

const createEmprendimiento = asyncHandler(async(req, res) => {
    const emprendimiento = new Emprendimiento({
        name: "Sample name",
        user: req.user._id,
        price: 0,
        category: "category sample",
        countInStock: 0,
        numReviews: 0,
        description: "Sample description",
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

export { createEmprendimiento };