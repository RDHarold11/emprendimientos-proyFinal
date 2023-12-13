import "./Peticiones.css";
import img1 from "/icono.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useCreatePeticionMutation } from "../../slices/peticionesApiSlice";
import Loading from "../../components/Loading";

const Peticiones = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [createPeticion, { isLoading, error }] = useCreatePeticionMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!type || !description) {
      toast.error("Debe completar los campos");
    } else {
      try {
        await createPeticion({ type, description }).unwrap();
        toast.message("Petición enviada exitosamente", {
          description: "Te estaremos contactando lo más pronto posible",
        });
      } catch (error) {
        toast.error(error?.data?.meessage);
      }
    }
  };

  const handleClearFilters = () => {
    setType("");
    setDescription("");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <section className="section nuevo-archivo min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
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
                      <strong>Nueva Petición</strong>
                    </h5>
                    <p className="text-center small">
                      Complete los siguientes campos para crear una petición
                    </p>
                  </div>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-12">
                      <label className="form-label">Tipo</label>
                      <select
                        className="form-select-custom"
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                      >
                        <option value="" disabled>
                          Seleccione un Tipo de Petición.
                        </option>
                        <option value="Quiero ser empresa">Quiero ser empresa</option>
                        <option value="Eliminar cuenta">Quiero eliminar mi cuenta</option>
                        <option value="Recogida de mercancia">Recoger mi mercancia</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Descripción</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Introduzca la Descripción"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      />
                    </div>

                    <div className="col-12 d-flex mt-4">
                      <button type="submit" className="btn btn-secondary mr-4">
                        Enviar
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClearFilters}
                      >
                        Limpiar Filtros
                      </button>
                      <Link to="/emprendedor" className="btn btn">
                        Volver Atrás
                      </Link>
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

export default Peticiones;
