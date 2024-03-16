/* Aqui van algunas utilidades que podran servir a lo largo del proyecto */
import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  //Enviamos el token como una cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.JWT_SECRET !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
