import "./comentarios.css";
import images from "/icono.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const Comentarios = ({
  setComment,
  rating,
  comment,
  setRating,
  submitHandler,
  product,
}) => {
  const { userInfo } = useSelector((state) => state.auth);

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
                    onSubmit={submitHandler}
                  >
                    <div className="col-8">
                      <div>
                        <select
                          className="options__comment"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Selecciona</option>
                          <option value="1">1 - Meh..</option>
                          <option value="2">2 - Algo justo</option>
                          <option value="3">3 - Bueno</option>
                          <option value="4">4 - Muy buena</option>
                          <option value="5">5 - Excelente idea</option>
                        </select>
                      </div>
                      <textarea
                        className="form-control"
                        style={{ width: "100%" }}
                        placeholder="Escribe tu comentario"
                        rows="4"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>
                    <div className="col-2 me-2">
                      <button type="submit" className="btn btn-primary">
                        Enviar Comentario
                      </button>
                      {/*  <Link to="/home" className="btn btn">
                        Volver Atrás
                      </Link> */}
                    </div>
                  </form>
                  <ul className="list-group list-group-flush mt-4 ">
                    {product.reviews.map((item) => (
                      <li className="list-group-item" key={item}>
                        <div className="media__comment">
                          <img
                            className="img"
                            style={{ marginBottom: "30px" }}
                            src="/ecommerce/avatarc.svg"
                            alt="User"
                          />
                          <div className="media-body">
                            <div className="rating__value">
                              <Rating value={item.rating}></Rating>
                            </div>
                            <p className="nombre">
                              {item.name}{" "}
                              <span>{item.createdAt.substring(0, 10)}</span>
                            </p>

                            <p className="comentario">{item.comment}</p>
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
