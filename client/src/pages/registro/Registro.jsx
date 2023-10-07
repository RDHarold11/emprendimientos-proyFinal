import React from 'react'
import "./Registro.css"
import img1 from '/icono.jpg'

const Registro = () => {
    return (

        <div class="container">
      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex justify-content-center py-4">
                <a href="/home" class="logo d-flex align-items-center w-auto">
                  <img src= {img1} alt=""/>
                  <span class="d-none d-lg-block">Catalyst</span>
                  </a>
                  </div>
                  <div class="card mb-3">
    <div class="card-body">
      <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4"><strong>Crea tu propia Cuenta</strong></h5>
                    <p class="text-center small">Introduzca los Datos Requeridos para la creación de la Nueva Cuenta</p>
                  </div>
<form class="row g-3 needs-validation">

                <div class="col-12">
                    <label class="form-label">Nombre Completo</label>
                    <input class="form-control"
                        type="text"
                        className="form-control"
                        placeholder="Introduzca su Nombre Completo"
                    />
                </div>
                <div class="col-12">
                    <label class="form-label">Correo Electroníco</label>
                    <input class="form-control"
                        type="email"
                        className="form-control"
                        placeholder="Introduzca su Correo Electroníco"
                    />
                </div>
                <div class="col-12">
                    <label class="form-label">Contraseña</label>
                    <input class="form-control"
                        type="password"
                        className="form-control"
                        placeholder="Introduzca una Nueva Contraseña"
                    />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary w-100">
                        Registrarse
                    </button>
                </div >
            </form>
            <div class="vaina">
            <p class="small mb-0">
                    Si ya estas Registrado <a href="/login">Inicia Sesión</a>
                </p>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>
        
        )
    }
    
export default Registro