import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MejoresEmprendimientos from "../components/MejoresEmprendimientos";
import Recientes from "../components/Recientes";
import Skills from "../components/Skills/Skills";
import Conviertete from "../components/Conviertete/Conviertete";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Fade direction="left" cascade>
        <Hero></Hero>
      </Fade>
      <Fade direction="left" cascade>
        <MejoresEmprendimientos></MejoresEmprendimientos>
      </Fade>
      <Fade direction="left" cascade>
        <div className="product-section products-container">
          <div className="pubs-container">
            <h1 className="titulo-publicaciones">
              Descubre entre las publicaciones más recientes
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              laboriosam voluptatibus quae culpa expedita quod eos aspernatur
              facere debitis! Tempore eligendi totam iste? Facilis cum, quos et
              commodi tempora inventore?
            </p>
          </div>
          <div className="cards__products-container">
            <div className="cards__row">
              <Recientes></Recientes>
              <Recientes></Recientes>
              <Recientes></Recientes>
              <Recientes></Recientes>
              <Recientes></Recientes>
              <Recientes></Recientes>
              <Recientes></Recientes>
              <Recientes></Recientes>
            </div>
            <div className="btn_container">
              <button className="products-btn">
                Ver Todas Las Publicaciones
              </button>
            </div>
          </div>
        </div>
      </Fade>
      <Fade direction="left" cascade>
        <Skills></Skills>
      </Fade>
      <Fade direction="left" cascade>
        <Conviertete></Conviertete>
        <Footer></Footer>
      </Fade>
    </div>
  );
};

export default Home;
