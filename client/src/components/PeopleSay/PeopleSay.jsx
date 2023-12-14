import React from "react";
import "./people.css";
import PeopleSayCard from "./PeopleSayCard";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const opinions = [
  {
    stars: 4,
    content: "En mi opinión y propia experiencia en Catalyst ha sido un viaje extraño pero muy positivo...",
    name: "Edwin Díaz",
    location: "Dominican Republic",
    avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
  },
  {
    stars: 5,
    content: "¡Mi experiencia en Catalyst ha sido nada menos que extraordinaria! Como emprendedor, siempre he enfrentado desafíos para encontrar la plataforma perfecta que comprenda verdaderamente las necesidades de los innovadores. Catalyst facilita la conexión entre emprendedores y usuarios de manera eficiente.",
    name: "Elian Montilla",
    location: "Colombia",
    avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
  },
  {
    stars: 5,
    content: "Catalyst ha marcado un paso bastante beneficioso, cambiando lo tradicional por lo novedoso. Me siento cómoda y agradecida con la plataforma, es una plataforma a la que se le puede sacar el máximo provecho, ya que tiene funcionalidades únicas que te ayudan a crecer como emprendedor y también para buscar emprendimientos. Siento que se le puede sacar gran provecho a la misma.",
    name: "Luisa Díaz",
    location: "España",
    avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
  },
  {
    stars: 3,
    content: "Mi experiencia en Catalyst ha sido mixta. Si bien la plataforma ofrece oportunidades interesantes, he tenido algunos problemas técnicos que afectaron mi experiencia. Creo que hay áreas de mejora, pero en general, es una plataforma prometedora para emprendedores.",
    name: "Juan Pérez",
    location: "México",
    avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
  },
  {
    stars: 4,
    content: "Catalyst ha superado mis expectativas. La diversidad de proyectos y la comunidad emprendedora hacen que sea un lugar emocionante para estar. La interfaz es fácil de usar y la asistencia al cliente es excepcional. ¡Recomendaría Catalyst a cualquier persona que busque oportunidades de emprendimiento!",
    name: "Ana Gómez",
    location: "Argentina",
    avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
  },
];


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
            {opinions.map((opinion, index) => (
              <SwiperSlide key={index}>
                <PeopleSayCard {...opinion} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PeopleSay;
