import img1 from "/icono.jpg";
import { useEffect, useState } from "react";
import {
  useGetSingleEmpQuery,
  useUpdateEmpMutation,
  useUploadEmpImageMutation,
} from "../../slices/emprendimientosApiSlice";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";
import Loading from "../../components/Loading";

const EditarEmprendimientoPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const { id } = useParams();

  const { data: emp, refetch, error } = useGetSingleEmpQuery(id);
  const [updateEmp, { isLoading: loadingUpdate }] = useUpdateEmpMutation();
  const [uploadImg, { isLoading: loadingImgUpload }] =
    useUploadEmpImageMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateEmp({
        id,
        title,
        description,
        image,
      }).unwrap();
      toast.success("Emprendimiento actualizado");
      refetch();
      navigate("/emprendimiento");
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
    if (emp) {
      setTitle(emp.title);
      setDescription(emp.description);
      setImage(emp.image);
    }
  }, [id, emp]);

  if(loadingUpdate){
    return <Loading/>
  }

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
                    onSubmit={submitHandler}
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
                    <div className="col-12 quill">
                      <ReactQuill

                        placeholder="Escribe algo"
                        value={description}
                        onChange={(e) => setDescription(e)}
                      />
                      {/* <label className="form-label">Descripcion</label>
                      <input
                        className="form-control"
                        type="textarea"
                        placeholder="Introduzca una descripcion"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      /> */}
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
                        onChange={uploadImageHandler}
                      />
                      {loadingImgUpload && <Loading/>}
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

export default EditarEmprendimientoPage;
