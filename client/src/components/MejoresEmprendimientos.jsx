import img1 from "/comida.png";
import img2 from "/carrito.png";
import img3 from "/web.png";
import img4 from "/cross.svg";
import { Link } from "react-router-dom";

const MejoresEmprendimientos = () => {
  return (
    <div className="product-section">
      <div className=" mejores__container">
        <div className="row__mejores">
          <div className="col__mejores">
            <h2 className="mb-4 mejores__title">
              Mejores Emprendimientos en el Mercado
            </h2>
            <p className="">
              Explora las mejores oportunidades de emprendimiento y da vida a tu
              visión empresarial. ¡El futuro te espera!
            </p>
            <Link to="/ecommerce/home" className="btn">
              Otros Servicios
            </Link>
          </div>

          <div className="products__flex">
            <div>
              <a className="product-item" href="/home">
                <img src={img1} className="img-fluid product-thumbnail" />
                <h3 className="product-title">
                  <strong>Cocina Gourmet</strong>
                </h3>
                <p>
                  Aprende los Conceptos básicos, Intermedios y Avanzados de la
                  cocina con otros emprendedores.
                </p>
              </a>
            </div>
            <div className="">
              <a className="product-item" href="/home">
                <img src={img2} className="img-fluid product-thumbnail" />
                <h3 className="product-title">
                  <strong>Tu Propio Super Mercado</strong>
                </h3>
                <p>
                  Levanta tu propio negocio desde Cero, y aumenta tus
                  posiblidades de exito.
                </p>
              </a>
            </div>
            <div className="">
              <a className="product-item" href="/home">
                <img src={img3} className="img-fluid product-thumbnail" />
                <h3 className="product-title">
                  <strong>Desarrollo de Sitios Web</strong>
                </h3>
                <p>
                  Aprende a desarollar Sitios Web desde Cero, y vuelvete alguien
                  capaz de ayudar a otros.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MejoresEmprendimientos;
