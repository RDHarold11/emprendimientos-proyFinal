import React from "react";
import "./eco.css";

const Eco = () => {
  return (
    <section className="eco" name="mel">
      <div className="container__ecommerce">
        <div className="ecommerce__flex">
          <div>
            <div>
              <h3 className="title__ecommerce">
                Los productos Eco-Friendly de Mel
              </h3>
            </div>
            <div className="eco__content">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/oic-1.png?v=1626772786"
                  alt=""
                />
              </div>
              <div>
                <h4>Libre de petroleo</h4>
                <p>Los productos de Catalyst evitan el uso de derivados del petróleo, contribuyendo a la sostenibilidad, al reducir la dependencia de recursos no renovables y minimizando el impacto ambiental asociado con la extracción y procesamiento de petróleo.</p>
              </div>
            </div>
            <div className="eco__content">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/oic-2.png?v=1626772786"
                  alt=""
                />
              </div>
              <div>
                <h4>0 pruebas en animales</h4>
                <p>Nos comprometemos éticamente y exhortamos a nuestros socios a no realizar pruebas en animales, optando por métodos alternativos para el desarrollo y prueba de productos, asegurando así una práctica libre de crueldad animal.</p>
              </div>
            </div>
            <div className="eco__content">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/oic-3.png?v=1626772786"
                  alt=""
                />
              </div>
              <div>
                <h4>Libre de sulfato</h4>
                <p>La ausencia de sulfatos, como el lauril sulfato de sodio, en los productos de Catalyst significa que se evitan compuestos químicos perjudiciales para la salud y el medio ambiente, respaldando una opción más saludable y ecológica.</p>
              </div>
            </div>
            <div className="eco__content">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0905/2012/files/oic-4.png?v=1626772786"
                  alt=""
                />
              </div>
              <div>
                <h4>100% vegano</h4>
                <p>Todos los productos son completamente veganos, excluyendo ingredientes de origen animal o derivados, lo que refleja un compromiso ético y sostenible en la producción.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/ecommerce/12.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eco;
