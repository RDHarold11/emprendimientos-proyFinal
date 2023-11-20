import React from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Ordenes = () => {
  return (
    <div className="contenedor">
      <h2>Administra las Ordenes</h2>
      <form action="/" method="POST">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Pagado</th>
              <th>Envíado</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1dj3y38y18je11d1u139jed39</td>
              <td>Nombre del Usuario</td>
              <td>01/01/2023</td>
              <td>$500.00</td>
              <td><Link className="nav-link user" to="/admin">
                  <AiOutlineClose size={20} />
                </Link></td>
                <td><Link className="nav-link user" to="/admin">
                  <AiOutlineClose size={20} />
                </Link></td>
              <td>
                <Link className="nav-link user" to="/detallesordenes">
                  Detalles
                </Link>
              </td>
            </tr>

          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Ordenes;
