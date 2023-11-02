import img1 from "/icono.jpg";
import { useEffect, useState } from "react";
import {useGetSingleEmpQuery} from "../../slices/emprendimientosApiSlice"
import {useParams} from "react-router-dom"

const EditarEmprendimientoPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const {id} = useParams()

  const {data:emp, refetch, error} = useGetSingleEmpQuery(id)
  
  useEffect(() => {
    if(emp){
      setTitle(emp.title)
      setDescription(emp.description) 
      setImage(emp.image)
    }
  },[id, emp])

  const handleRegister = () => {};
  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
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
                      <strong>Edita los datos</strong>
                    </h5>
                    <p className="text-center small">
                      Introduzca los Datos Requeridos para editar los datos de
                      tu Emprendimiento
                    </p>
                  </div>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={handleRegister}
                  >
                    <div className="col-12">
                      <label className="form-label">Titulo</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Introduzca el titulo del emprendimiento"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Descripcion</label>
                      <input
                        className="form-control"
                        type="textarea"
                        placeholder="Introduzca una descripcion"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
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
                        accept=".png, .jpg"
                      />
                      <input
                        className="form-control"
                        type="file"
                        label="Seleccione una imagen"
                        //onChange={uploadImageHandler}
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-secondary w-100">
                        Editar
                      </button>
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

export default EditarEmprendimientoPage;
