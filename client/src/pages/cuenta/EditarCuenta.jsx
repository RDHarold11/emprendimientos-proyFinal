import "./cuenta.css";
import img1 from "/icono.jpg";
import { useEffect, useState } from "react";
import {
  useUpdateProfileMutation,
  useUploadUserImageMutation,
} from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const EditarCuentapage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [uploadUserImage, { isLoading: loadingUpload }] =
    useUploadUserImageMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !lastName || !email) {
      toast.error("Debe completar los campos");
    } else if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          email,
          name,
          lastName,
          password,
          image,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Perfil actualizado");
        navigate("/micuenta");
      } catch (error) {
        toast.error(error?.data?.message || error?.error);
      }
    }
  };

  const uploadImageHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const res = await uploadUserImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  useEffect(() => {
    setImage(userInfo.image ? userInfo.image : "");
    setName(userInfo.name);
    setLastName(userInfo.lastName);
    setEmail(userInfo.email);
  }, [userInfo]);

  return (
    <div className="account__container">
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
                      Introduzca los Datos Requeridos para editar los datos de
                      tu cuenta
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
                        value={name}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Apellido</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Introduzca su apellido Completo"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
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
                        onChange={uploadImageHandler}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Correo Electroníco</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Introduzca su Correo Electroníco"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Introduzca su Correo Electroníco"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Confirmar Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Introduzca su Correo Electroníco"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
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
