import "./Usuario.css";
import { Link } from "react-router-dom";

import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Header from "../../../components/Header/Header";
import { toast } from "sonner";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../../slices/usersApiSlice";

const Usuario = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();
  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

  const deleteUserHandler = (id) => {
    toast("¿Estás seguro?", {
      action: {
        label: "Eliminar",
        onClick: () => deleteHandler(id),
      },
      cancel: {
        label: "Cancelar",
      },
    });
  };

  const deleteHandler = async (id) => {
    try {
      await deleteUser(id).unwrap();
      toast.success("Usuario eliminado");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };
  return (
<<<<<<< HEAD
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
=======
    <>
      <Header text="Administra los usuarios" />
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
              {users?.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? (
                      <Link className="nav-link user" to="/admin">
                        <AiOutlineCheck size={20} />
                      </Link>
                    ) : (
                      <Link className="nav-link user" to="/admin">
                        <AiOutlineClose size={20} />
                      </Link>
                    )}
                  </td>
                  <td>
                    {user.isEmprendedor ? (
                      <Link className="nav-link user" to="/admin">
                        <AiOutlineCheck size={20} />
                      </Link>
                    ) : (
                      <Link className="nav-link user" to="/admin">
                        <AiOutlineClose size={20} />
                      </Link>
                    )}
                  </td>
                  <td>
                    {user.isEmpresa ? (
                      <Link className="nav-link user" to="/admin">
                        <AiOutlineCheck size={20} />
                      </Link>
                    ) : (
                      <Link className="nav-link user" to="/admin">
                        <AiOutlineClose size={20} />
                      </Link>
                    )}
                  </td>
                  <td>
                    <a href="" className="btn border-shadow update">
                      <span className="text-gradient">
                        <Link
                          className="nav-link user"
                          to={`/admin/user/${user._id}/edit`}
                        >
                          <BsPencilSquare size={20} />
                        </Link>
                      </span>
                    </a>
                    <a
                      className="btn botoncitos border-shadow delete"
                      onClick={() => deleteUserHandler(user._id)}
                    >
                      <div className="nav-link user" to="/admin">
                        <BsFillTrash3Fill size={20} color="#333" />
                      </div>
                      <span className="text-gradient"></span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};
>>>>>>> 16ea632219ec11d7d14d6de970873c51681c1cd8

export default Usuario;
