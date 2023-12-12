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

  // Obtener categorías únicas de los productos
  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  return (
    <section>
      <div className="container__ecommerce">
        <div className="ecommerce__flex">
          <div>
            <h3 className="title__ecommerce">Categorías de Catalyst</h3>
            <p>
              Descubre una amplia variedad de productos diseñados para satisfacer tus necesidades.
              Desde tecnología de vanguardia hasta accesorios elegantes, nuestras categorías
              abarcan todo lo que necesitas para potenciar tu experiencia. Sumérgete en un mundo
              de innovación y calidad. ¡Encuentra lo que estás buscando y eleva tu estilo de vida!
            </p>
          </div>
          <div className="images__container">
            <div className="category__wrapper">
              {uniqueCategories.map((category) => (
                <div key={category} className="category__item">
                  <img src={`/ecommerce/6.png`} alt={category} />
                  <div>
                    <h5>{category}</h5>
                  </div>
                  <Link to={`/categoria/${category}`} className="ecommerce__link">
                    Ver todo <IoIosArrowRoundForward size={25} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
