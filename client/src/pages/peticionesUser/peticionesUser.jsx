import "./peticionesUser.css";
import {
  useGetPeticionesQuery,
  useDeletePeticionMutation,
} from "../../slices/peticionesApiSlice";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Header from "../../components/Header/Header";
import { toast } from "sonner";

const PeticionesUser = () => {
  const { data, isLoading, error, refetch } = useGetPeticionesQuery();
  const [deletePeticion] = useDeletePeticionMutation();

  const handleDelete = async (id) => {
    toast("¿Estás seguro?", {
      action: {
        label: "Eliminar",
        onClick: () => deleteProductHandler(id),
      },
      cancel: {
        label: "Cancelar",
      },
    });
  }

  const deleteProductHandler = async (id) => {
    try {
      await deletePeticion(id).unwrap()
      toast.success("Petición eliminada")
      refetch()
    } catch (error) {
      toast.error(error?.data?.message)
    }
  }

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <>
      <Header text="Mis peticiones" />
      <div className="contenedor">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Tipo de Petición</th>
                <th>Descripción</th>
                <th>Resuelto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className="nav-link user">
                      {item.resuelto ? (
                        <AiOutlineCheck size={20} />
                      ) : (
                        <AiOutlineClose size={20} />
                      )}
                    </div>
                  </td>
                  <td>
                    <a className="btn botoncitos border-shadow delete">
                      <div className="nav-link user" onClick={() => handleDelete(item._id)}>
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

export default PeticionesUser;
