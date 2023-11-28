import React from "react";
import "./eco.css";

const Eco = () => {
  return (
    <section className="eco">
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
