import "./Peticiones.css";
import img1 from "/icono.jpg";
import React, { useState } from "react";
import { toast } from "sonner"; 

const Peticiones = () => {
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tipo || !descripcion) {
      toast.error("Debe completar los campos");
    } else {
    
      console.log("Tipo:", tipo);
      console.log("Descripción:", descripcion);
   
      toast.success("Formulario enviado exitosamente");
    }
  };

  return (
    <div className="container">
      <section className="section nuevo-archivo min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
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
                      <strong>Nueva Petición</strong>
                    </h5>
                    <p className="text-center small">
                      Complete los siguientes campos para crear una petición
                    </p>
                  </div>
                  <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label className="form-label">Tipo</label>
                      <select
                        className="form-select-custom"
                        onChange={(e) => setTipo(e.target.value)}
                        value={tipo}
                      >
                        <option value="" disabled>
                          Seleccione un Tipo de Petición.
                        </option>
                        <option value="opcion1">Opción 1</option>
                        <option value="opcion2">Opción 2</option>
               
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Descripción</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Introduzca la Descripción"
                        onChange={(e) => setDescripcion(e.target.value)}
                        value={descripcion}
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Enviar
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
  );
};

export default Peticiones;