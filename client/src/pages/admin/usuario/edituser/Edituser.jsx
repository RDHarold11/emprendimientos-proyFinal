import "./Edituser.css";
import img1 from "/icono.jpg";

import React from 'react'

const Edituser = () => {
  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a href="/home" className="logo d-flex align-items-center w-auto">
                  <img src={img1} alt="" />
                  <span className="d-none d-lg-block">Catalyst</span>
                </a>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      <strong>Editar Usuarios</strong>
                    </h5>
                  </div>
                  <form className="row g-3 needs-validation">
                    <div className="col-12">
                      <label className="form-label">Nombre</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Introduzca el Nombre"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Correo</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Introduzca su Correo"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">¿Es un Administrador?</label>
                      <input
                        type="checkbox" className="custom-checkbox"/>
                    </div>
                    <div className="col-12">
                      <label className="form-label">¿Es un Emprendedor?</label>
                      <input
                        type="checkbox" className="custom-checkbox"/>
                    </div>
                    <div className="col-12">
                      <label className="form-label">¿Tiene un Empresa Registrada?</label>
                      <input
                        type="checkbox" className="custom-checkbox"/>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Guardar Cambios
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Edituser;