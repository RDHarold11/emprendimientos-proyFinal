import React from 'react'
import imgprincipal from "/diparate2.png";

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 className="titulo ">Descubre Servicios y Emprendimientos</h1>
                <p className="mb-4">
                  Explora una variedad de emprendimientos y servicios
                  innovadores que han surgido en tu comunidad. ¡Encuentra
                  productos únicos y apoya a los emprendedores locales!{" "}
                </p>
                <p>
                  <a href="" className="btn btn-secondary me-2">
                    Emprendimientos
                  </a>
                  <a href="#" className="btn btn-white-outline">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={imgprincipal} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero