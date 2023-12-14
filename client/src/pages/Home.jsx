import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MejoresEmprendimientos from "../components/MejoresEmprendimientos";
import Recientes from "../components/Recientes";
import Skills from "../components/Skills/Skills";
import Conviertete from "../components/Conviertete/Conviertete";
import { Fade } from "react-awesome-reveal";
import PopularCourses from "../components/PopularCourses/PopularCourses";
import PeopleSay from "../components/PeopleSay/PeopleSay";
import LastBlogs from "../components/Ultimos Blogs/LastBlogs";
import {
  useGetEmprendimientosQuery,
  useGetTopEightQuery,
} from "../slices/emprendimientosApiSlice";
import Loading from "../components/Loading";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Home = () => {
  const { data, isLoading } = useGetEmprendimientosQuery();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Set the number of items per page
  const offset = currentPage * itemsPerPage;
  const currentData = data?.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (isLoading) {
    return <Loading />;
  }
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
              {currentData.map((item) => (
                <Recientes key={item._id} {...item}></Recientes>
              ))}
            </div>
            <div className="pagination-container">
              <ReactPaginate
                previousLabel={"Previo"}
                nextLabel={"Siguiente"}
                breakLabel={"..."}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </Fade>
      <Fade direction="left" cascade>
        <PopularCourses />
      </Fade>
      <Fade direction="left" cascade>
        <Skills></Skills>
        <Conviertete></Conviertete>
        <PeopleSay />
        <LastBlogs />
        <Footer></Footer>
      </Fade>
    </div>
  );
};

export default Home;
