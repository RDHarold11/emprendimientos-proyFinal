import "./peticionesUser.css";
import { Link } from "react-router-dom";

import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";


const peticioesUser = () => {
  return (
    <div className="contenedor">
      <form action="/" method="POST">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Tipo de Petición</th>
              <th>Descripción</th>
              <th>Completado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1dj3y38y18je11d1u139jed39</td>
              <td>Eliminación de Cuenta</td>
              <td>Quiero crear otra cuenta con este correo, por favor ayudar a eleiminar esto para poder hacerlo.</td>
              <td><Link className="nav-link user" to="/admin">
                <AiOutlineCheck size={20} />
              </Link></td>
              <td>
                <a className="btn botoncitos border-shadow delete"><Link className="nav-link user" to="/admin">
                  <BsFillTrash3Fill size={20} />
                </Link>
                  <span className="text-gradient">

                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>

  )
}

export default peticioesUser;