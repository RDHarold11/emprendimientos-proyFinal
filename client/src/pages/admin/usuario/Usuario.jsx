import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../../slices/usersApiSlice";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../../components/Loading";

const Usuario = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();
  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAdmin, setFilterAdmin] = useState(false);
  const [filterEmprendedor, setFilterEmprendedor] = useState(false);
  const [filterEmpresa, setFilterEmpresa] = useState(false);

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

  if (isLoading) {
    return <Loading/>;
  }

  // Aplicar filtros
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((user) => (!filterAdmin || user.isAdmin) && (!filterEmprendedor || user.isEmprendedor) && (!filterEmpresa || user.isEmpresa));

  return (
    <>
      <Header text="Administra los usuarios" />
      <div className="contenedor">
      
      
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
       
            <div className="row">
            <div className="form-check form-check-inline ml-5">
              <input
                type="checkbox"
                className="form-check-input"
                id="adminFilter"
                checked={filterAdmin}
                onChange={() => setFilterAdmin(!filterAdmin)}
              />
              <label className="form-check-label" htmlFor="adminFilter">
                Admin
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                id="emprendedorFilter"
                checked={filterEmprendedor}
                onChange={() => setFilterEmprendedor(!filterEmprendedor)}
              />
              <label className="form-check-label" htmlFor="emprendedorFilter">
                Emprendedor
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                id="empresaFilter"
                checked={filterEmpresa}
                onChange={() => setFilterEmpresa(!filterEmpresa)}
              />
              <label className="form-check-label" htmlFor="empresaFilter">
                Empresa
              </label>
            </div>
          </div>
        </div>
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
              {filteredUsers.map((user) => (
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
                      {loadingDelete && <Loading/>}
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

export default Usuario;
