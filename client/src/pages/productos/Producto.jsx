import React, { useState } from "react";
import "./Producto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "../../slices/productsApiSlice";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product";

const Productos = () => {
  const [createProduct] = useCreateProductMutation();
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();
  console.log(products);

  console.log(products);
  console.log(error);

  const [searchTerm, setSearchTerm] = useState("");

  const handleCreateProduct = async () => {
    try {
      await createProduct();
      toast.success("Creaste un producto!");
      refetch(); // Refetch products after creating a new one
    } catch (err) {
      toast.error(err.message);
    }
  };

  let userId = 0;
  const { userInfo: user } = useSelector((state) => state.auth);

  if (user && user._id) {
    userId = user._id;
    console.log("ID del usuario:", userId);
  } else {
    console.log("No se pudo obtener el ID del usuario.");
  }

  let filteredProducts = [];
  let filteredProductsByUser = [];

  if (products) {
    // Filtrar por usuario
    filteredProductsByUser = products.filter(
      (product) => product.user === userId
    );

    // Si hay un término de búsqueda, aplicar filtro adicional por nombre
    if (searchTerm) {
      filteredProducts = filteredProductsByUser.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // Si no hay término de búsqueda, mostrar todos los productos del usuario
      filteredProducts = filteredProductsByUser;
    }
  }

  // filteredProducts ahora contendrá los productos filtrados por usuario y, si se proporciona, por nombre

  return (
    <div className="product-section">
      <div className="container">
        <div className="text-center mt-2">
          <button className="btn btn-primary" onClick={handleCreateProduct}>
            Crear Producto
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
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
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="row">
          {isLoading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>Error fetching products: {error.message}</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
              >
                <Product
                  id={product._id}
                  name={product.name}
                  image={product.image}
                  category={product.category}
                  description={product.description}
                  price={product.price}
                  stock={product.countInStock}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Productos;
