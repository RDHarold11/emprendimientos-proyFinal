import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import Header from "../../../components/Header/Header";
import "./Productos.css";
import { useGetProductsQuery } from "../../../slices/productsApiSlice";
import { useDeleteProductMutation } from "../../../slices/productsApiSlice";
import { toast } from "sonner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const { data: products, refetch, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  // Filtrar productos por nombre y categoría
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    return nameMatch && categoryMatch;
  });

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <Header text="Administra todos los productos" />
      <div className="contenedor">
        <div className="row">
        
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
         
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="categorySelect"><b>Filtrar por categoría:</b></label>
              <select
                id="categorySelect"
                className="form-control"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
        
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
              {filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>

                  <td>
                    <a href="/" className="btn border-shadow update">
                      <span className="text-gradient">
                        <Link
                          className="nav-link user"
                          to={`/editar/${product._id}`}
                        >
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
