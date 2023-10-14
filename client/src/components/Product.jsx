import React from 'react';

const Product = ({ id, name, image, category, description, price, stock}) => {
  return (
    <div className="product-item">
      <img src={image} className="img-fluid product-thumbnail" alt={name} />
      <h3 className="product-title">
        <strong>{name}</strong>
      </h3>
      <p>{description}</p>
      <p className="product-price">Precio: ${price}</p>
      <p>Categoria: {category}</p>
      <p>Cantidad en stock: {stock}</p>

      <div className="product-buttons">
        <button className="btn btn-secondary">Editar</button>
        <button className="btn btn-danger">Eliminar</button>
      </div>
      <span className="icon-cross">
        <img src="/cross.svg" className="img-fluid" alt="Cross Icon" />
      </span>
    </div>
  );
};

export default Product;
