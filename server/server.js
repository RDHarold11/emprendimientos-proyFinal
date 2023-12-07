import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const PORT = process.env.PORT || 5000;

import connectDb from "./config/config.js";

//Rutas
import userRoutes from "./routes/userRoutes.routes.js";
import productsRouter from "./routes/products.routes.js";
import emprendimientosRouter from "./routes/emprendimiento.routes.js";
import uploadRoutes from "./routes/uploads.routes.js";
import peticionesRoutes from "./routes/peticiones.routes.js";
import orderRoutes from "./routes/order.routes.js";
import asyncHandler from "./middleware/asyncHandler.js";

connectDb();
/* Aqui podremos establecer el servidor, asi como llamar a todas las rutas */
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Para manejar las cookies
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/products", productsRouter);
app.use("/api/emprendimientos", emprendimientosRouter);
app.use("/api/upload", uploadRoutes);
app.use("/api/peticiones", peticionesRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

//Acceder a la carpeta uploads donde se guardaran las imagenes
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running, port: ${PORT}`);
});
