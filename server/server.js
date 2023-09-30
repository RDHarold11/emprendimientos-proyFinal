import express from "express";
import dotenv from "dotenv";
dotenv.config();

/* Aqui podremos establecer el servidor, asi como llamar a todas las rutas */

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running, port: ${PORT}`);
});
