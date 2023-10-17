import img1 from "/comida.png";
import img2 from "/carrito.png";
import img3 from "/web.png";
import img4 from "/cross.svg";

const MejoresEmprendimientos = () => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">
              Mejores Emprendimientos en el Mercado
            </h2>
            <p className="mb-4">
              Explora las mejores oportunidades de emprendimiento y da vida a tu
              visión empresarial. ¡El futuro te espera!"
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
                Levanta tu propio negocio desde Cero, y aumenta tus posiblidades
                de exito.
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
  );
};

export default MejoresEmprendimientos;
