import "./Editproduct.css";
import img1 from "/icono.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUploadEmpImageMutation } from "../../../../slices/emprendimientosApiSlice";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../../slices/productsApiSlice";
import Loading from "../../../../components/Loading";

const Editproduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetSingleProductQuery(id);

  const categories = [
    "Electrónica",
    "Ropa",
    "Hogar",
    "Juguetes",
    "Deportes",
    "Libros",
    "Salud y Belleza",
    "Alimentación",
    "Automóviles",
    "Herramientas",
    "Jardinería",
    "Mascotas",
    "Joyería",
    "Arte y Manualidades",
    "Electrodomésticos",
    "Muebles",
    "Instrumentos Musicales",
    "Fotografía",
    "Videojuegos",
    "Películas",
    "Música",
    "Computadoras",
    "Teléfonos",
    "Software",
    "Ropa Deportiva",
    "Calzado",
    "Bolsos y Accesorios",
    "Maquillaje",
    "Artículos para Bebés",
    "Deportes Acuáticos",
    "Camping y Excursionismo",
    "Electrodomésticos de Cocina",
    "Bicicletas",
    "Aparatos de Ejercicio",
    "Hobbies",
    "Instrumentos de Escritura",
    "Ropa de Cama",
    "Decoración del Hogar",
    "Artículos de Oficina",
    "Material de Arte",
    "Cine en Casa",
    "Aire Libre",
    "Salud Mental",
    "Suplementos Nutricionales",
    "Productos Orgánicos",
    "Instrumentos Culinarios",
    "Cuidado del Cabello",
    "Ropa Interior",
    "Relojes",
    "Gafas de Sol",
    "Tecnología Vestible",
    "Dispositivos Inteligentes para el Hogar",
    "Robótica",
    "Ciencia",
    "Fotografía Digital",
    "Idiomas Extranjeros",
    "Viajes",
    "Astronomía",
    "Arqueología",
    "Teatro",
    "Arquitectura",
    "Diseño",
    "Belleza Natural",
    "Arte Abstracto",
    "Fotografía de Naturaleza",
    "Drones",
    "Programación",
    "Realidad Virtual",
    "Historia Antigua",
    "Filosofía",
    "Misterio",
    "Literatura Clásica",
    "Ciencia Ficción",
    "Aventuras",
    "Crimen y Detectives",
    "Fantasía",
    "Romance",
    "Ciencia y Tecnología",
    "Biotecnología",
    "Innovación",
    "Desarrollo Sostenible",
    "Política",
    "Economía",
    "Psicología",
    "Sociología",
    "Educación",
    "Energías Renovables",
    "Medicina Natural",
    "Mindfulness",
    "Yoga",
    "Vida Sana",
    "Recetas Saludables",
    "Vegetarianismo",
    "Astrología",
    "Viajes Espaciales",
    "Consolas",
  ];
  const [uploadImg] = useUploadEmpImageMutation();
  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        id,
        name,
        price,
        category,
        countInStock,
        description,
        image,
      }).unwrap();
      toast.success("Producto actualizado");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const uploadImageHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const res = await uploadImg(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
      setImage(product.image);
    }
  }, [product]);

  if (isLoading) {
    return <Loading/>;
  }
  return (
    <div className="container">
      {loadingUpdate && <Loading/>}
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="/home"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src={img1} alt="" />
                  <span className="d-none d-lg-block">Catalyst</span>
                </a>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      <strong>Editar Producto</strong>
                    </h5>
                  </div>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={submitHandler}
                  >
                    <div className="col-12">
                      <label className="form-label">Nombre</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Introduzca el Nombre"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Precio</label>
                      <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                        type="number"
                        placeholder="Introduzca el Precio"
                      />
                    </div>
                    <div className="col-12">
  <label className="form-label">Categoría</label>
  <select
    className="form-control"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="" disabled>
      Selecciona una categoría
    </option>
    {categories.map((cat, index) => (
      <option key={index} value={cat}>
        {cat}
      </option>
    ))}
  </select>
</div>
                    <div className="col-12">
                      <label className="form-label">
                        Cantidad en Inventario
                      </label>
                      <input
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                        className="form-control"
                        type="number"
                        placeholder="Introduzca la Cantidad en Inventario"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Imagen</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Seleccione una imagen"
                        onChange={(e) => setImage}
                        value={image}
                        accept="image/png, image/jpg"
                      />
                      <input
                        className="form-control"
                        type="file"
                        label="Seleccione una imagen"
                        onChange={uploadImageHandler}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Descripción</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        placeholder="Introduzca la Descripción"
                      ></textarea>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary mr-4 ">
                          Guardar Cambios
                        </button>
                        <Link to="/emprendedor" className="btn btn">
                          Volver Atrás
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Editproduct;
