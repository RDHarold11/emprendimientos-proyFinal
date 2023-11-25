import React from "react";
import "./popular.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const PopularCard = () => {
  return (
    <div className="popular__card">
      <>
        <img
          src="https://cdn.pixabay.com/photo/2019/08/06/04/27/smartphone-4387319_640.jpg"
          alt=""
        />
      </>
      <div className="popular_card__content">
        <div>
          <h5>Video Editing</h5>
          <small>Art & Design Course</small>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque
            accusantium sequi
          </p>
          <div className="popular__more">
            <h4>Ver mas</h4>
            <Link to="/publicacion/2/detalle">
            <AiOutlineArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
