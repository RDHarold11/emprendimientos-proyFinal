import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cuenta.css";
import userImage from "/icono.jpg";

const CuentaPage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    
    <div className="centered-container">
      
      <div className="user-profile">
      <h2>Tu Cuenta</h2>
        <div className="profile-image-container">
          <img
            className="profile-image"
            src={userInfo.image ? userInfo.image : userImage}
            alt="User"
          />
        </div>
        <h4 className="user-name">
          {userInfo.name} {userInfo.lastName}
        </h4>
        <h5 className="user-email">{userInfo.email}</h5>
        <p className="user-account-type">
          {userInfo.isEmprendedor
            ? "Cuenta Emprendedor"
            : userInfo.isEmpresa
            ? "Cuenta Empresa"
            : "Cuenta Administrador"}
        </p>
        <Link to="/editcuenta" className="btn btn-primary">
          Editar
        </Link>
      </div>
    </div>
  );
};

export default CuentaPage;
