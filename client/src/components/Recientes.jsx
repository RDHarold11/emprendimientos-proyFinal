import provisional from "/mujerempresaria.jpg";
import img4 from "/cross.svg";
import "./recientes.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Recientes = ({ title, image, _id, description, numReviews }) => {
  const formattedDescription = { __html: description?.replace(/^"(.*)"$/, "$1").slice(0, 80) };
  const navigate = useNavigate()
  return (
    <Fade>
      <div className="col-12 col-md-4 col-lg-3 recientes-container mb-5 mb-md-0">
        <div className="reciente-card" onClick={() => navigate(`/publicacion/${_id}/detalle`)}>
          <a className="product-item">
            <img
              src={image !== "Sample img" ? image : provisional}
              className="img-fluid product-thumbnail"
            />
            <div className="card-info">
              <h3 className="product-title">
                <strong>{title}</strong>
              </h3>
              <h5>Subtitulo de la publicación</h5>
              <p dangerouslySetInnerHTML={formattedDescription} className="card-p"/>
              <div className="more-section">
                <div>
                  <h3>{numReviews} reviews</h3>
                </div>
                <Link to="/publicacion/2/detalle">
                <AiOutlineArrowRight size={22} />
                </Link>
              </div>
   
            </div>
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default Recientes;
