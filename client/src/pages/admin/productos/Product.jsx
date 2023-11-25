import { Link } from "react-router-dom";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import Header from "../../../components/Header/Header";
import "./Productos.css";
import { useGetProductsQuery } from "../../../slices/productsApiSlice";
import { useDeleteProductMutation } from "../../../slices/productsApiSlice";
import { toast } from "sonner";

const Product = () => {
  const { data: products, refetch, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

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
      await deleteProduct(id).unwrap();
      toast.success("Producto eliminado");
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
      <Header text="Administra todos los productos"></Header>
      <div className="contenedor">
        <form action="/" method="POST">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>

                  <td>
                    <a href="/" className="btn border-shadow update">
                      <span className="text-gradient">
                        <Link className="nav-link user" to={`/editar/${product._id}`}>
                          <BsPencilSquare size={20} />
                        </Link>
                      </span>
                    </a>
                    <a
                      className="btn botoncitos border-shadow delete"
                      onClick={() => handleDelete(product._id)}
                    >
                      <div className="nav-link user">
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

export default Product;
