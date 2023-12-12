import React from 'react';
import "./categories.css";
import { useLocation } from 'react-router-dom';

const CategoryProducts = () => {
  const { state } = useLocation();
  const products = state?.products || [];

  if (products.length === 0) {
    return <h2>No hay productos disponibles para esta categoría.</h2>;
  }

  const category = products[0].category;

  return (
    <section className="bestSeller__container">
      <div className="container__ecommerce">
        <div className="ecommerce__header">
          <h2>{`Productos de la categoría ${category}`}</h2>
        </div>
        <div className="ecommerce__flex">
          {products.map((item) => (
            <div key={item._id} className="card__item">
              <div>
              <img
  style={{ width: '250px', height: '250px' }} 
  src={item.image}
  alt={item.name}
/>
              </div>
              <div className="card__content">
                <h3 className="card__title">{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="tarjeta">
                <h6>New</h6>
              </div>
              <div className="details__card">
                <div>
                  {/* Aquí irían los iconos o enlaces correspondientes */}
                </div>
                <div>
                  {/* Aquí irían los iconos o enlaces correspondientes */}
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;
