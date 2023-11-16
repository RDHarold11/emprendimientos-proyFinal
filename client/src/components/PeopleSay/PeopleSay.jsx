import React from "react";
import "./people.css";
import PeopleSayCard from "./PeopleSayCard";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const PeopleSay = () => {
  return (
    <section className="people__container">
      <div>
        <div className="people-container__header">
          <h3>Review</h3>
          <h2>Lo que la gente dice</h2>
        </div>
        <div className="people__card__container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <PeopleSayCard />
            </SwiperSlide>
            <SwiperSlide>
              <PeopleSayCard />
            </SwiperSlide>
            <SwiperSlide>
              <PeopleSayCard />
            </SwiperSlide>
            <SwiperSlide>
              <PeopleSayCard />
            </SwiperSlide>
            <SwiperSlide>
              <PeopleSayCard />
            </SwiperSlide>
            <SwiperSlide>
              <PeopleSayCard />
            </SwiperSlide>
            <SwiperSlide>
              <PeopleSayCard />
            </SwiperSlide>
            <SwiperSlide>
              <PeopleSayCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PeopleSay;
