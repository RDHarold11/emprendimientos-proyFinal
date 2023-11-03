import "./comentarios.css";
import img1 from "/icono.jpg";
import { useEffect, useState } from "react";
import { useUpdateProfileMutation, useUploadUserImageMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import images from "/icono.jpg";
const Comentarios = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [setCommenterName, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("")
  


  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [uploadUserImage, {isLoading: loadingUpload}] = useUploadUserImageMutation()

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
          commentText,
          image
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Perfil actualizado");
      } catch (error) {
        toast.error(error?.data?.message || error?.error);
      }
    }
  };
  console.log(image)
  const uploadImageHandler = async (e) => {
    const formData = new FormData()
    formData.append("image", e.target.files[0])

    try {
      const res = await uploadUserImage(formData).unwrap()
      toast.success(res.message)
      setImage(res.image)
    } catch (error) {
      console.log(error)
      toast.error(error?.data?.message)
    }
  }

  useEffect(() => {
    setImage(userInfo.image ? userInfo.image : "")
    setName(userInfo.name);
    setLastName(userInfo.lastName);
    setEmail(userInfo.email);
  }, [userInfo]);

  return (
    <div className="container-xl">
    <section className="section comments min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 d-flex flex-column align-items-center justify-content-center">
            <div className="card card-coment mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">
                    <strong>Comentarios</strong>
                  </h5>
                  <p className="text-center small">
                    Deja tus comentarios a continuación
                  </p>
                </div>
                <form className="row justify-content-center g-3">
                  <div className="col-8">
                    <textarea
                      className="form-control"
                      style={{ width: '100%' }}
                      placeholder="Escribe tu comentario"
                      rows="4"
                      onChange={(e) => setCommentText(e.target.value)}
                      value={commentText}
                    />
                  </div>
                  <div className="col-2 me-2">
                    <button type="submit" className="btn btn-primary">
                      Enviar Comentario
                    </button>
                  </div>
                </form>
                <ul className="list-group list-group-flush mt-4 ">
                    <li className="list-group-item">
                    <div className="media">
                    <img className="img" style={{marginBottom: "30px"}} src={userInfo.image ? `${userInfo.image}` : images} alt="User" />
                    <div className="media-body">
                    <p className="nombre">{userInfo.name} <span>Hace 20 minutos</span></p> 
                    <p className="comentario">Lorem ipsum dolor sit amet consectetur adipiscing elit libero porta, ultrices cursus felis justo netus sodales per neque, mauris donec potenti ridiculus blandit congue aptent sociosqu.</p>
                    </div>
                     </div>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  

  );
};

export default Comentarios;
