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

connectDb();
/* Aqui podremos establecer el servidor, asi como llamar a todas las rutas */
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Para manejar las cookies
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running, port: ${PORT}`);
});
