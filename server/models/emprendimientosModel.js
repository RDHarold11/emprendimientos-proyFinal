/* Aqui dentro se creera el modelo de los productos */
import mongoose, { Schema } from "mongoose";

const reviewEmprendimientoSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const emprendimientoSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    titulo: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewEmprendimientoSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },

});

const Emprendimiento = mongoose.model("Emprendimiento", emprendimientoSchema);
export default Emprendimiento;