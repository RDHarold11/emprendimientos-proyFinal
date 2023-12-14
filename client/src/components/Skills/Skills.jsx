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
              <h2>+1k</h2>
              <div>
                <h6>
                  <strong>Emprendedores Exitosos:</strong>
                </h6>
                <p>
                Descubre cómo más de 100 emprendedores han triunfado con Catalyst.
                </p>
              </div>
            </div>
            <div className="info__container">
              <h2>+50</h2>
              <div>
                <h6>
                  <strong>Categorías Destacadas:</strong>
                </h6>
                <p>
                Explora más de 20 categorías para resaltar tu emprendimiento, ya sea en moda, tecnología, arte o servicios.
                </p>
              </div>
            </div>
            <div className="info__container">
              <h2>+20</h2>
              <div>
                <h6>
                  <strong>Colaboraciones Exitosas</strong>
                </h6>
                <p>
                Únete a la red de más de 50 colaboraciones exitosas y lleva tu emprendimiento a nuevas alturas.
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
