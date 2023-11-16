import provisional from "/mujerempresaria.jpg";
import img4 from "/cross.svg";
import "./recientes.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Recientes = () => {

  return (
    <Fade>
      <div className="col-12 col-md-4 col-lg-3 recientes-container mb-5 mb-md-0">
        <div className="reciente-card">
          <a className="product-item" href="/home">
            <img src={provisional} className="img-fluid product-thumbnail" />
            <div className="card-info">
              <h3 className="product-title">
                <strong>Titulo</strong>
              </h3>
              <h5>Subtitulo de la publicación</h5>
              <p className="card-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos nostrum quos laboriosam accusantium?
              </p>
              <div className="more-section">
                <div>
                  <h3>50 Course</h3>
                </div>
                <AiOutlineArrowRight size={22} />
              </div>
              <span className="icon-cross">
                <Link to="/publicacion/2/detalle">
                <img src={img4} className="img-fluid" />
                </Link>
              </span>
            </div>
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default Recientes;
