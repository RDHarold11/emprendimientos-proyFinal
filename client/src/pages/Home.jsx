import React from "react";
import Navbar from "../components/Navbar";
import img1 from "/comida.png";
import img2 from "/carrito.png";
import img3 from "/web.png";
import fotter from "/fotter.png";
import img4 from "/cross.svg";
import imgprincipal from "/diparate2.png";

const Home = () => {
  return (
    /* Esta es la estructura para todas las paginas y componentes, dentro del return va la estructura
    del html de toda la vida */
    /* Todo elemento dentro del return debe estar dentro de un elemento padre.
    Es decir, si vas a colocar html con su diseño, todo debe estar dentro de una etiqueta contenedora
    Ejemplo:  
    <div> 
        Resto del contenido
    </div> */

    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 className="titulo">Descubre Servicios y Emprendimientos</h1>
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
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Mejores Emprendimientos en el Mercado
              </h2>
              <p className="mb-4">
                Explora las mejores oportunidades de emprendimiento y da vida a
                tu visión empresarial. ¡El futuro te espera!"
              </p>
              <p>
                <a href="/home" className="btn another">
                  Otros Servicios
                </a>
              </p>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/home">
                <img src={img1} className="img-fluid product-thumbnail" />
                <h3 className="product-title">
                  <strong>Cocina Gourmet</strong>
                </h3>
                <p>
                  Aprende los Conceptos básicos, Intermedios y Avanzados de la
                  cocina con otros emprendedores.
                </p>

                <span className="icon-cross">
                  <img src={img4} className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/home">
                <img src={img2} className="img-fluid product-thumbnail" />
                <h3 className="product-title">
                  <strong>Tu Propio Super Mercado</strong>
                </h3>
                <p>
                  Levanta tu propio negocio desde Cero, y aumenta tus
                  posiblidades de exito.
                </p>

                <span className="icon-cross">
                  <img src={img4} className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/home">
                <img src={img3} className="img-fluid product-thumbnail" />
                <h3 className="product-title">
                  <strong>Desarrollo de Sitios Web</strong>
                </h3>
                <p>
                  Aprende a desarollar Sitios Web desde Cero, y vuelvete alguien
                  capaz de ayudar a otros.
                </p>

                <span className="icon-cross">
                  <img src={img4} className="img-fluid" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
