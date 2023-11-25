import "./Usuario.css";
import { Link } from "react-router-dom";

import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";


const Usuario = () => {
  return (
    <div className="contenedor">
      <form action="/" method="POST">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Admin</th>
              <th>Emprendedor</th>
              <th>Empresa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1dj3y38y18je11d1u139jed39</td>
              <td>Edwin Díaz</td>
              <td>edwin@gmail.com</td>
              <td><Link className="nav-link user" to="/admin">
                <AiOutlineCheck size={20} />
              </Link></td>
              <td><Link className="nav-link user" to="/admin">
                <AiOutlineClose size={20} />
              </Link></td>
              <td><Link className="nav-link user" to="/admin">
                <AiOutlineClose size={20} />
              </Link></td>
              <td>
                <a href="" className="btn border-shadow update">
                  <span className="text-gradient"><Link className="nav-link user" to="/edituser">
                    <BsPencilSquare size={20} />
                  </Link></span>
                </a>
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

export default Usuario;