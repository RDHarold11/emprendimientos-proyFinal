import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSelectTopProductsQuery } from "../../../slices/productsApiSlice";

const Categories = () => {
  const { data: products, isLoading } = useSelectTopProductsQuery();

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  return (
    <section className="categories" name="categorias">
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
                <h5>Joyería</h5>
              </div>
             <p>Vistete a la moda</p>
            </div>
            <div>
              <img src="/ecommerce/8.png" alt="" />
              <div>
                <h5>Accesorios</h5>
              </div>
              <p>Accesorios creativos para estar a la moda</p>
            </div>
            <div>
              <img src="/ecommerce/9.png" alt="" />
              <div>
                <h5>Regalos</h5>
              </div>
              <p>Variedades de regalos para tus familiares y amigos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;