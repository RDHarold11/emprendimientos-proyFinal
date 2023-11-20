import "./comentarios.css";
import images from "/icono.jpg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Comentarios = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComments([...comments, commentText]);
    setCommentText("");
    toast.success("Comentario publicado");
  };

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
                  <form
                    className="row justify-content-center g-3"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-8">
                      <textarea
                        className="form-control"
                        style={{ width: "100%" }}
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
                      <Link to="/home" className="btn btn">
    Volver Atrás
  </Link>
                    </div>
                  </form>
                  <ul className="list-group list-group-flush mt-4 ">
                    {comments.map((item) => (
                      <li className="list-group-item" key={item}>
                        <div className="media">
                          <img
                            className="img"
                            style={{ marginBottom: "30px" }}
                            src={userInfo.image ? `${userInfo.image}` : images}
                            alt="User"
                          />
                          <div className="media-body">
                            <p className="nombre">
                              {userInfo.name} <span>Hace 20 minutos</span>
                            </p>
                            
                            <p className="comentario">
                              {item}
                              {/* Lorem ipsum dolor sit amet consectetur adipiscing
                            elit libero porta, ultrices cursus felis justo netus
                            sodales per neque, mauris donec potenti ridiculus
                            blandit congue aptent sociosqu. */}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
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
