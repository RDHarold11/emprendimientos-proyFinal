import images from "/icono.jpg";
import "./detallePublicacion.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Comentarios from "../../components/comentarios/comentarios";

const DetallePublicacionPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo.image)
  return (
    <>
      <div className="centered-container">
        <>
          <h1 className="center">
           Detalle Publicacion
          </h1>
         
        </>
      </div>
      <Comentarios></Comentarios>
    </>
  );
};

export default DetallePublicacionPage;
