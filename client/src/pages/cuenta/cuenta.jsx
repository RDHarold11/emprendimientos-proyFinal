import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cuenta.css";
import userImage from "/icono.jpg";
import { IoCheckmarkCircle } from "react-icons/io5";

const CuentaPage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="centered-container">
      <div className="user-profile">
        <div className="user__content">
          <h2>Tu Cuenta</h2>
          <div className="profile-image-container">
            <img
              className="profile-image"
              src={userInfo.image ? userInfo.image : userImage}
              alt="User"
            />
          </div>
          <div className="user__verify">
            <h4 className="user-name">
              {userInfo.name} {userInfo.lastName}
            </h4>
          </div>
          <h5 className="user-email">{userInfo.email}</h5>
          <p className="user-account-type">
            {userInfo.isEmprendedor
              ? "Cuenta Emprendedor"
              : userInfo.isEmpresa
              ? "Cuenta Empresa"
              : "Cuenta Administrador"}
          </p>
          <div className="d-grid gap-2">
          <Link to="/editcuenta" className="btn btn-primary mr-3">
            Editar
          </Link>
                        <Link to="/emprendedor" className="btn btn">
                          Volver Atrás
                        </Link>
                      </div>
                    </div>
        
       
        <div className="verify">
          {userInfo.isEmpresa && (
            <div>
              <IoCheckmarkCircle color="green" size={40} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CuentaPage;
