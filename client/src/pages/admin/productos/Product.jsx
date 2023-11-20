import React from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import "./Productos.css";
const Product = () => {
  return (
    <div className="contenedor">
      <h2>Administra Productos</h2>
      <form action="/" method="POST">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Marca</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1dj3y38y18je11d1u139jed39</td>
              <td>Tenis</td>
              <td>$500.00</td>
              <td>Ropa</td>
              <td>Nike</td>
              <td>
                <a href="/" className="btn border-shadow update">
                  <span className="text-gradient">
                    <Link className="nav-link user" to="/editproduct">
                      <BsPencilSquare size={20} />
                    </Link>
                  </span>
                </a>
                <a className="btn botoncitos border-shadow delete">
                  <Link className="nav-link user" to="/admin">
                    <BsFillTrash3Fill size={20} />
                  </Link>
                  <span className="text-gradient"></span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Product;
