import Categories from "../../../components/Ecommerce/Categories/Categories";
import BestSellers from "../../../components/Ecommerce/BestSellers/BestSellers";
import Detalles from "../../../components/Ecommerce/Detalles/Detalles";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar";
import Eco from "../../../components/Ecommerce/Eco/Eco";
import Hero from "../../../components/Ecommerce/HeroEcommerce/Hero";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Fade cascade>
        <Hero></Hero>
      </Fade>
      <Fade cascade>
        <Categories />
      </Fade>
      <Fade cascade>
        <BestSellers />
      </Fade>
      <Fade cascade>
        <Eco></Eco>
      </Fade>
      <Fade cascade>
        <Detalles></Detalles>
      </Fade>
    </>
  );
};

export default Home;
