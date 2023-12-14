import React, { useState } from "react";
import BestSellerCard from "./BestSellerCard";
import "./best.css";
import { useSelectTopProductsQuery } from "../../../slices/productsApiSlice";

const BestSellers = () => {
  const { data, isLoading } = useSelectTopProductsQuery();
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5); // Establecer valor máximo predeterminado en 5
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [exactPrice, setExactPrice] = useState("");
  const [filtersApplied, setFiltersApplied] = useState(false);

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  // Aplicar filtros solo si se ha realizado alguna acción por parte del usuario
  const applyFilters = () => {
    setFiltersApplied(true);
  };

  // Limpiar filtros
  const clearFilters = () => {
    setMinRating(0);
    setMaxRating(5); // Restaurar valor máximo a 5
    setMinPrice(0);
    setMaxPrice(0);
    setExactPrice("");
    setFiltersApplied(false);
  };

  // Filtrar productos por rating, precio mínimo, precio máximo y precio exacto
  const filteredData = data.filter(
    (item) =>
      (minRating === 0 || item.rating >= minRating) &&
      (maxRating === 5 || item.rating <= maxRating) && // Asegurar que el rating máximo sea 5
      (minPrice === 0 || item.price >= minPrice) &&
      (maxPrice === 0 || item.price <= maxPrice) &&
      (exactPrice === "" || item.price === parseFloat(exactPrice))
  );

  return (
    <section className="bestSeller__container">
      <div className="container__ecommerce">
        <div className="ecommerce__header">
          <h2>Lo más nuevo</h2>
        </div>
        <div className="filters">
          {/* Filtro por rating mínimo */}
          <div className="container__inputs">
            <label>
              Min Rating:
              <input
                type="number"
                className="input__filter"
                value={minRating}
                min="0"
                max="5"
                onChange={(e) =>
                  setMinRating(Math.min(5, Math.max(0, e.target.value)))
                }
              />
            </label>

            {/* Filtro por rating máximo */}
            <label>
              Max Rating:
              <input
                type="number"
                className="input__filter"
                value={maxRating}
                min="0"
                max="5"
                onChange={(e) =>
                  setMaxRating(Math.min(5, Math.max(0, e.target.value)))
                }
              />
            </label>

            {/* Filtro por precio mínimo */}
            <label>
              Min Precio:
              <input
                type="number"
                className="input__filter"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </label>

            {/* Filtro por precio máximo */}
            <label>
              Max Precio:
              <input
                type="number"
                className="input__filter"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </label>

            {/* Filtro por precio exacto */}
            <label>
              Precio Exacto:
              <input
                type="text"
                className="input__filter"
                value={exactPrice}
                onChange={(e) => setExactPrice(e.target.value)}
              />
            </label>
          </div>
          <div className="">
            {/* <button onClick={applyFilters}>Aplicar Filtros</button> */}

            {/* Botón para limpiar filtros */}
            <button className="btn__filter" onClick={clearFilters}>
              Limpiar Filtros
            </button>
            {/* Botón para aplicar los filtros */}
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
