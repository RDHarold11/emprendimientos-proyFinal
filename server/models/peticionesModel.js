import mongoose, { Schema } from "mongoose";

const peticionesSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    resuelto: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Peticiones = mongoose.model("Peticiones", peticionesSchema);
export default Peticiones;
