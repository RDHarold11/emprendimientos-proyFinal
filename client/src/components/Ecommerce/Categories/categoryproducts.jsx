import React, { useState } from 'react';
import './categories.css';
import { LuShoppingBag } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const CategoryProducts = () => {
  const { state } = useLocation();
  const products = state?.products || [];
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [exactPrice, setExactPrice] = useState('');
  const [filtersApplied, setFiltersApplied] = useState(false);

  const applyFilters = () => {
    setFiltersApplied(true);
  };

  const clearFilters = () => {
    setMinRating(0);
    setMaxRating(5);
    setMinPrice(0);
    setMaxPrice(0);
    setExactPrice('');
    setFiltersApplied(false);
  };

  const filteredData = products.filter(
    (item) =>
      (minRating === 0 || item.rating >= minRating) &&
      (maxRating === 5 || item.rating <= maxRating) &&
      (minPrice === 0 || item.price >= minPrice) &&
      (maxPrice === 0 || item.price <= maxPrice) &&
      (exactPrice === '' || item.price === parseFloat(exactPrice))
  );
  const navigate = useNavigate()
  return (
    <section className="category-products__container">
      <div className="container__ecommerce">
        <div className="ecommerce__header">
          <h2>{`Productos de la categoría ${products.length > 0 ? products[0].category : ''}`}</h2>
        </div>
        <div className="filters">
          <div className="filter__item">
            <label>
              Min Rating
              <input
                type="number"
                value={minRating}
                min="0"
                max="5"
                onChange={(e) => setMinRating(Math.min(5, Math.max(0, e.target.value)))}
              />
            </label>
          </div>

          <div className="filter__item">
            <label>
              Max Rating
              <input
                type="number"
                value={maxRating}
                min="0"
                max="5"
                onChange={(e) => setMaxRating(Math.min(5, Math.max(0, e.target.value)))}
              />
            </label>
          </div>

          <div className="filter__item">
            <label>
              Min Precio
              <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </label>
          </div>

          <div className="filter__item">
            <label>
              Max Precio
              <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </label>
          </div>

          <div className="filter__item">
            <label>
              Precio Exacto
              <input type="text" value={exactPrice} onChange={(e) => setExactPrice(e.target.value)} />
            </label>
          </div>

          <div className="filter__buttons">
            <button className="filter__button apply" onClick={applyFilters}>
              Aplicar Filtros
            </button>
            <button className="filter__button clear" onClick={clearFilters}>
              Limpiar Filtros
            </button>
          </div>
        </div>
        <div className="ecommerce__flex">
          {filtersApplied && filteredData.length === 0 && (
            <p>No hay productos que coincidan con los filtros.</p>
          )}
         {filteredData.map((item) => (
  <div key={item._id} className="card__item">
    <div className="product-overlay">
      <img style={{ width: '250px', height: '250px' }} src={item.image} alt={item.name} />
      <div className="overlay-options">
        <div>
          <LuShoppingBag size={25} color="#fff" />
        </div>
        <div>
          <CiHeart size={25} color="#fff" />
        </div>
        <div onClick={() => navigate(`/producto/${item._id}/detalle`)}>
          <FiEye size={25} color="#fff" />
        </div>
      </div>
    </div>
    <div className="card__content">
      <h3 className="card__title">{item.name}</h3>
      <p>${item.price}</p>
    </div>
    <div className="tarjeta">
      <h6>New</h6>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;
