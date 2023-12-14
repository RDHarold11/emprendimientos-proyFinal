import { Link } from "react-router-dom";
import imgprincipal from "/diparate2.png";

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
          <div className="hero__row">
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
                  <Link to="/ecommerce/home" className="btn btn-white-outline">
                    Comprar
                  </Link>
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