// CategoryProducts.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelectProductsByCategoryQuery } from '../../../slices/productsApiSlice';

const CategoryProducts = () => {
  const { category } = useParams();
  const { data: products, isLoading } = useSelectProductsByCategoryQuery(category);

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div>
      <h2>Productos de la categoría {category}</h2>
      {/* Renderiza la lista de productos aquí */}
    </div>
  );
};

export default CategoryProducts;
