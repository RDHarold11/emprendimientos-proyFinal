import React from "react";
import "./people.css";
import { IoStarSharp } from "react-icons/io5";

const PeopleSayCard = ({ stars, content, name, location, avatar }) => {
  return (
    <div className="people__card">
      <header>
        <div>
          <div>
            {Array.from({ length: stars }).map((_, index) => (
              <IoStarSharp key={index} color="#ff9400" />
            ))}
          </div>
          <p>{content}</p>
        </div>
      </header>
      <div className="people-card__content">
        <img src={avatar} alt="" />
        <div>
          <h5>{name}</h5>
          <small>{location}</small>
        </div>
      </div>
    </div>
  );
};

export default PeopleSayCard;
