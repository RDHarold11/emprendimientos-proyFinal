import "./Edituser.css";
import img1 from "/icono.jpg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../../../../slices/usersApiSlice";
import { toast } from "sonner";
import Loading from "../../../../components/Loading";

const Edituser = () => {
  const { id: userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEmprendedor, setIsEmprendedor] = useState(false);
  const [isEmpresa, setIsEmpresa] = useState(false);

  const { data: user, isLoading, refetch, error } = useGetUserByIdQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({
        userId,
        name,
        email,
        isAdmin,
        isEmprendedor,
        isEmpresa,
      }).unwrap();
      refetch();
      toast.success("Usuario actualizado");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
      setIsEmprendedor(user.isEmprendedor);
      setIsEmpresa(user.isEmpresa);
    }
  }, [user]);

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="container">
      {loadingUpdate &&  <Loading/>}
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
                      <strong>Editar Usuarios</strong>
                    </h5>
                  </div>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={submitHandler}
                  >
                    <div className="col-12">
                      <label className="form-label">Nombre</label>
                      <input
                        className="form-control"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Introduzca el Nombre"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Correo</label>
                      <input
                        className="form-control"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Introduzca su Correo"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">
                        ¿Es un Administrador?
                      </label>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">¿Es un Emprendedor?</label>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={isEmprendedor}
                        onChange={(e) => setIsEmprendedor(e.target.checked)}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">
                        ¿Es cuenta empresa?
                      </label>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={isEmpresa}
                        onChange={(e) => setIsEmpresa(e.target.checked)}
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary mr-4 ">
                        Guardar Cambios
                      </button>
                      <Link to="/usuario" className="btn btn">
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

export default Edituser;
