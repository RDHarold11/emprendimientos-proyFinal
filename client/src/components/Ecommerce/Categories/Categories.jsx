import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
const Categories = () => {
  return (
    <section>
      <div className="container__ecommerce">
        <div className="ecommerce__flex">
          <div>
            <h3 className="title__ecommerce">Categorías de Catalyst</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod. Tempor incididunt ut labore...
            </p>
          </div>
          <div className="images__container">
            <div>
              <img src="/ecommerce/6.png" alt="" />
              <div>
                <h5>Regalos</h5>
              </div>
              <Link className="ecommerce__link">
                Ver todo <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
            <div>
              <img src="/ecommerce/8.png" alt="" />
              <div>
                <h5>Accesorios</h5>
              </div>
              <Link className="ecommerce__link">
                Ver todo <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
            <div>
              <img src="/ecommerce/9.png" alt="" />
              <div>
                <h5>Regalos</h5>
              </div>
              <Link className="ecommerce__link">
                Ver todo <IoIosArrowRoundForward size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
