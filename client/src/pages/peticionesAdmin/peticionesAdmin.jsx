import React, { useState } from "react";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import {
  useDeletePeticionMutation,
  useGetPeticionesByAdminQuery,
  useMarkAsResolvedMutation,
} from "../../slices/peticionesApiSlice";
import { toast } from "sonner";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading";

const PeticionesAdmin = () => {
  const { data, error, isLoading, refetch } = useGetPeticionesByAdminQuery();

  const [deletePeticion] = useDeletePeticionMutation();
  const [mark] = useMarkAsResolvedMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [quieroSerEmpresa, setQuieroSerEmpresa] = useState(false);
  const [eliminarCuenta, setEliminarCuenta] = useState(false);

  const handleDelete = async (id) => {
    toast("¿Estás seguro?", {
      action: {
        label: "Eliminar",
        onClick: () => deletePeticionHandler(id),
      },
      cancel: {
        label: "Cancelar",
      },
    });
  };

  const deletePeticionHandler = async (id) => {
    try {
      await deletePeticion(id).unwrap();
      toast.success("Petición eliminada");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const handleMark = async (id) => {
    try {
      await mark(id).unwrap();
      refetch();
      toast.success("Marcada como completada");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  if (isLoading) {
    return <Loading/>
  }

  const filteredPeticiones = data.filter((peticion) => {
    const matchDescription = peticion.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTipoPeticion =
      (!quieroSerEmpresa || peticion.type === "Quiero ser empresa") &&
      (!eliminarCuenta || peticion.type === "Eliminar cuenta");

    return matchDescription && matchTipoPeticion;
  });

  return (
    <>
      <Header text="Administra las peticiones" />
      <div className="contenedor">
      <div className="row">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
           
          <div className="col-12 col-md-6 offset-md-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="quieroSerEmpresa"
                checked={quieroSerEmpresa}
                onChange={() => setQuieroSerEmpresa(!quieroSerEmpresa)}
              />
              <label className="form-check-label" htmlFor="quieroSerEmpresa">
                Quiero ser empresa
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="eliminarCuenta"
                checked={eliminarCuenta}
                onChange={() => setEliminarCuenta(!eliminarCuenta)}
              />
              <label className="form-check-label" htmlFor="eliminarCuenta">
                Eliminar cuenta
              </label>
            </div>
          </div>
        </div>
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
            {filteredPeticiones.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>
                  {item.resuelto ? (
                    <div className="nav-link user">
                      <AiOutlineCheck size={20} color="#333" />
                    </div>
                  ) : (
                    <div className="nav-link user">
                      <AiOutlineClose size={20} />
                    </div>
                  )}
                </td>
                <td>
                  {!item.resuelto && (
                    <a className="btn botoncitos border-shadow delete">
                      <div
                        className="nav-link user"
                        onClick={() => handleMark(item._id)}
                      >
                        <AiOutlineCheck size={20} color="#333" />
                      </div>
                      <span className="text-gradient"></span>
                    </a>
                  )}
                  <a className="btn botoncitos border-shadow delete">
                    <div
                      className="nav-link user"
                      onClick={() => handleDelete(item._id)}
                    >
                      <BsFillTrash3Fill size={20} color="#333" />
                    </div>
                    <span className="text-gradient"></span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PeticionesAdmin;
