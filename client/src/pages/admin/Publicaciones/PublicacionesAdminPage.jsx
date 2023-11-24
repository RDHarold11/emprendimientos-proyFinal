import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { useGetEmprendimientosQuery } from "../../../slices/emprendimientosApiSlice";
import { useDeleteEmpMutation } from "../../../slices/emprendimientosApiSlice";
import { toast } from "sonner";

const PublicacionesAdminPage = () => {
  const { data, isLoading, refetch, error } = useGetEmprendimientosQuery();
  const [deleteEmp] = useDeleteEmpMutation()

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
  }

  const deleteHandler = async (id) => {
    try {
      await deleteEmp(id).unwrap();
      toast.success("Publiacion eliminado");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <>
      <Header text="Administra todos las publicaciones"></Header>
      <div className="contenedor">
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
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.numReviews}</td>
                  <td>
                    <a href="/" className="btn border-shadow update">
                      <span className="text-gradient">
                        <Link className="nav-link user" to={`/edit/publicaciones/${item._id}`}>
                          <BsPencilSquare size={20} />
                        </Link>
                      </span>
                    </a>
                    <a className="btn botoncitos border-shadow delete" onClick={() => handleDelete(item._id)}>
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
