import images from "/icono.jpg";
import "./cuenta.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CuentaPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo.image)
  return (
    <>
      <div className="centered-container">
        <>
          <img className="img" style={{marginBottom: "30px", width: "200px", height: "200px"}} src={userInfo.image ? `${userInfo.image}` : images} alt="User" />
          <h4 className="center">
            {userInfo.name} {userInfo.lastName}
          </h4>
          <h5 className="center">{userInfo.email}</h5>
          <br></br>
          <h6>{userInfo.isEmprendedor ? "Cuenta emprendedor" : userInfo.isEmpresa ? "Cuenta empresa" : "Cuenta administrador"}</h6>
          <button className="btn btn-secondary btn-bottom">
            <Link to="/editcuenta" style={{ textDecoration: "none" }}>
              Editar
            </Link>
          </button>
        </>
      </div>
    </>
  );
};

export default CuentaPage;
