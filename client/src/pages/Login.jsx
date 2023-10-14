import { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import img1 from "/icono.jpg";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo: user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.error("Debe completar los campos");
      } else {
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success(`Bienvenido`);
      }
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
                      <strong>Inicia Sesión con tu Cuenta</strong>
                    </h5>
                    <p className="text-center small">
                      Introduzca su Correo y Contraseña para Inicar Sesión
                    </p>
                  </div>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-12">
                      <label className="form-label" htmlFor="email">
                        Email:
                      </label>
                      <div className="input-group has-validation">
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="password">
                        Contraseña:
                      </label>
                      <div className="input-group has-validation">
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                  <div className="col-12">
                    <button className="btn btn-primary w-100">
                      <Link to="/registro" className="link">
                        Registrate
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
