import React from "react";
import "./popular.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const PopularCard = ({image, title, description, category, _id}) => {
  const formattedDescription = { __html: description?.replace(/^"(.*)"$/, "$1").slice(0, 80) };
  return (
    <div className="popular__card">
      <>
        <img
          src={image !== "Sample img" ? image : "https://cdn.pixabay.com/photo/2019/08/06/04/27/smartphone-4387319_640.jpg"}
          alt=""
        />
      </>
      <div className="popular_card__content">
        <div>
          <h5>{title}</h5>
          <small>{category}</small>
        </div>
        <div>
          <p dangerouslySetInnerHTML={formattedDescription}/>
          <div className="popular__more">
            <h4>Ver mas</h4>
            <Link to={`/publicacion/${_id}/detalle`}>
            <AiOutlineArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
