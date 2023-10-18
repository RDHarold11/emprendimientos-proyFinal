import "./cuenta.css";
import img1 from "/icono.jpg";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const EditarCuentapage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.auth)
  const [register, { isLoading }] = useRegisterMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!name || !lastName || !email || !id) {
        toast.error("Debe completar los campos");
      } else {
        const res = await register({
          email,
          name,
          lastName,
          id,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Bienvenido");
      }
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

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
                      <strong>Edita tus datos</strong>
                    </h5>
                    <p className="text-center small">
                      Introduzca los Datos Requeridos para editar los datos de tu cuenta
                    </p>
                  </div>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={handleRegister}
                  >
                    <div className="col-12">
                      <label className="form-label">Nombre</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Introduzca su Nombre Completo"
                        onChange={(e) => setName(e.target.value)}
                        value={userInfo.name}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Apellido</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Introduzca su apellido Completo"
                        onChange={(e) => setLastName(e.target.value)}
                        value={userInfo.lastName}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Correo Electroníco</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Introduzca su Correo Electroníco"
                        onChange={(e) => setEmail(e.target.value)}
                        value={userInfo.email}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="hidden"
                        className="form-control"
                        onChange={(e) => setId(e.target.value)}
                        value={userInfo._id}
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

export default EditarCuentapage;