import React from "react";
import "./popular.css";
import PopularCard from "./PopularCard";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img from "/images/dots.webp";
import {
  useGetTopEmprendimientosQuery,
  useGetEmprendimientosQuery,
} from "../../slices/emprendimientosApiSlice";
import Loading from "../Loading";

const PopularCourses = () => {
  const { data, isLoading } = useGetEmprendimientosQuery();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="popular__section">
      <div className="popular_section__container">
        <div>
          <header className="popular__header">
            <h4 className="popular__title">Publicaciones más populares</h4>
            <p className="popular__p">
              Descubre los artículos que están causando sensación y únete a la
              tendencia. Encuentra emprendimientos que ya han conquistado
              corazones. Tu próximo hallazgo está a solo un clic de distancia.
            </p>
          </header>
          <Fade>
            <div className="popular_card__container">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {data.map((item) => {
                  if (item.numReviews >= 1) {
                    return (
                      <SwiperSlide key={item._id}>
                        <PopularCard {...item}></PopularCard>
                      </SwiperSlide>
                    );
                  }
                })}
              </Swiper>
            </div>
          </Fade>
        </div>
      </div>
      <img src={img} className="absolute__img__1" alt="" />
      <img src={img} className="absolute__img__2" alt="" />
    </section>
  );
};

export default PopularCourses;
