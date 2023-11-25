import React from "react";
import "./people.css";
import { IoStarSharp } from "react-icons/io5";

const PeopleSayCard = () => {
  return (
    <div className="people__card">
      <header>
        <div>
          <div>
            <IoStarSharp color="#ff9400" />
            <IoStarSharp color="#ff9400" />
            <IoStarSharp color="#ff9400" />
            <IoStarSharp color="#ff9400" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            nisi culpa iusto ducimus illum debitis.
          </p>
        </div>
      </header>
      <div className="people-card__content">
        <img
          src="https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png"
          alt=""
        />
        <div>
          <h5>Mike Hadson</h5>
          <small>Dominican Republic</small>
        </div>
      </div>
    </div>
  );
};

export default PeopleSayCard;
