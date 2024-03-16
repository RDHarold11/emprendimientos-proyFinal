import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { useGetEmprendimientosQuery } from "../../../slices/emprendimientosApiSlice";
import { useDeleteEmpMutation } from "../../../slices/emprendimientosApiSlice";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../../components/Loading";


const PublicacionesAdminPage = () => {
  const { data, isLoading, refetch, error } = useGetEmprendimientosQuery();
  const [deleteEmp] = useDeleteEmpMutation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = async (id) => {
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
      await deleteEmp(id).unwrap();
      toast.success("Publicación eliminada");
      refetch();
    } catch (error) {
      toast.error(error);
    }
  };

  if (isLoading) {
    return <Loading/>;
  }

  // Filtrar publicaciones por título
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header text="Administra todas las publicaciones" />
      <div className="contenedor">
       
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por título..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
          
          </div>
        </div>
        <form action="/" method="POST">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Num reviews</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.description.slice(0, 20)}</td>
                  <td>{item.numReviews}</td>
                  <td>
                    <a href="/" className="btn border-shadow update">
                      <span className="text-gradient">
                        <Link
                          className="nav-link user"
                          to={`/edit/publicaciones/${item._id}`}
                        >
                          <BsPencilSquare size={20} />
                        </Link>
                      </span>
                    </a>
                    <a
                      className="btn botoncitos border-shadow delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      <Link className="nav-link user">
                        <BsFillTrash3Fill size={20} />
                      </Link>
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

export default PublicacionesAdminPage;
