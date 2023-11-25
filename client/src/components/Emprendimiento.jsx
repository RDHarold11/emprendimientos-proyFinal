import React from "react";
import { Link } from "react-router-dom";

const Emprendimiento = ({
  id,
  titulo,
  image,
  description,
  rating,
  handleDelete,
}) => {
  return (
    <div className="product-item">
      <img src={image} className="img-fluid product-thumbnail" alt={titulo} />
      <h3 className="product-title">
        <strong>{titulo}</strong>
      </h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <div className="product-buttons">
        <button className="btn btn-secondary">
          <Link to={`/edit/publicaciones/${id}`}>Editar</Link>
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(id)}>
          Eliminar
        </button>
      </div>
      <span className="icon-cross">
        <img src="/cross.svg" className="img-fluid" alt="Cross Icon" />
      </span>
    </div>
  );
};

export default Emprendimiento;
