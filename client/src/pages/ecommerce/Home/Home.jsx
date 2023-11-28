import Categories from "../../../components/Ecommerce/Categories/Categories";
import BestSellers from "../../../components/Ecommerce/BestSellers/BestSellers";
import Detalles from "../../../components/Ecommerce/Detalles/Detalles";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar";
import Eco from "../../../components/Ecommerce/Eco/Eco";
import Hero from "../../../components/Ecommerce/HeroEcommerce/Hero";
const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
      <Categories />
      <BestSellers />
      <Eco></Eco>
      <Detalles></Detalles>
    </>
  );
};

export default Home;
