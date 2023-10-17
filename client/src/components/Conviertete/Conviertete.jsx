import React from "react";
import "./conviertete.css";

const Conviertete = () => {
  return (
    <section className="instructor__section">
      <div className="instructor__container">
        <div>
          <img src="/instructor.png" alt="" />
        </div>
        <div>
          <h6 className="inst__title">Construye tu carrera</h6>
          <h2>Conviertete en emprendedor</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              accusantium quae earum beatae veniam voluptatibus soluta assumenda
              exercitationem debitis velit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus harum ullam reprehenderit.
            </p>
          </div>
          <button className="inst__btn">Aplica Ahora</button>
        </div>
      </div>
    </section>
  );
};

export default Conviertete;
