import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills__section">
      <div className="skills__container">
        <div>
          <h4>
            <strong>Comercializa tus emprendimientos en todo el mundo</strong>
          </h4>
          <div className="info">
            <div className="info__container">
              <h2>900+</h2>
              <div>
                <h6>
                  <strong>Lorem ipsum dolor sit.</strong>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat libero iusto laborum corrupti minima consequatur.
                </p>
              </div>
            </div>
            <div className="info__container">
              <h2>200+</h2>
              <div>
                <h6>
                  <strong>Lorem ipsum dolor sit.</strong>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat libero iusto laborum corrupti minima consequatur.
                </p>
              </div>
            </div>
            <div className="info__container">
              <h2>600+</h2>
              <div>
                <h6>
                  <strong>Lorem ipsum dolor sit.</strong>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat libero iusto laborum corrupti minima consequatur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/skills.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
