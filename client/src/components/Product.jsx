import React from 'react';
import { useDeleteProductMutation } from '../slices/productsApiSlice';

const Product = ({ id, name, image, category, description, price, stock}) => {
  const [deleteProduct] = useDeleteProductMutation();
  
  
  async function onDelete(id){
    try {
      await deleteProduct(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  }
  
  
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
        <button className="btn btn-danger" onClick={() => onDelete(id)}>Eliminar</button>
      </div>
      <span className="icon-cross">
        <img src="/cross.svg" className="img-fluid" alt="Cross Icon" />
      </span>
    </div>
  );
};

export default Product;
