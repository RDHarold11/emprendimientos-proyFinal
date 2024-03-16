import React from 'react'
import fotter from "/fotter.png";

const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="container relative">
          <div className="fotter-img">
            <img src={fotter} alt="Image" className="img-fluid" />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <a href="#" className="footer-logo">
                  Catalyst<span></span>
                </a>
              </div>
              <p className="mb-4">
                Explora una variedad de emprendimientos y servicios innovadores
                que han surgido en tu comunidad. ¡Encuentra productos únicos y
                apoya a los emprendedores locales!
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Sobre Nosotros</a>
                    </li>
                    <li>
                      <a href="#">Servicios</a>
                    </li>
                    <li>
                      <a href="#">Emprendimientos</a>
                    </li>
                    <li>
                      <a href="/login">Iniciar Sesión</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Soporte</a>
                    </li>
                    <li>
                      <a href="#">Valores</a>
                    </li>
                    <li>
                      <a href="#">Contactenos</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Nuestro Equipo</a>
                    </li>
                    <li>
                      <a href="#">Liderazgo</a>
                    </li>
                    <li>
                      <a href="#">Politíca de Privacidad</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Tecnologías</a>
                    </li>
                    <li>
                      <a href="#">Deportivo</a>
                    </li>
                    <li>
                      <a href="#">Inmobiliarios</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer