import React, { useState } from "react";
import BestSellerCard from "./BestSellerCard";
import "./best.css";
import { useSelectTopProductsQuery } from "../../../slices/productsApiSlice";

const BestSellers = () => {
  const { data, isLoading } = useSelectTopProductsQuery();
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [exactPrice, setExactPrice] = useState("");
  const [filtersApplied, setFiltersApplied] = useState(false);

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  const applyFilters = () => {
    setFiltersApplied(true);
  };

  const clearFilters = () => {
    setMinRating(0);
    setMaxRating(5);
    setMinPrice(0);
    setMaxPrice(0);
    setExactPrice("");
    setFiltersApplied(false);
  };

  const filteredData = data.filter(
    (item) =>
      (minRating === 0 || item.rating >= minRating) &&
      (maxRating === 5 || item.rating <= maxRating) &&
      (minPrice === 0 || item.price >= minPrice) &&
      (maxPrice === 0 || item.price <= maxPrice) &&
      (exactPrice === "" || item.price === parseFloat(exactPrice))
  );

  return (
    <section className="category-products__container" name="nuevo">
      <div className="container__ecommerce">
        <div className="ecommerce__header">
          <h2>Lo más nuevo</h2>
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
            <BestSellerCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
