import React from "react";
import "./conviertete.css";
import { useNavigate } from "react-router-dom";

const Conviertete = () => {
  const navigate = useNavigate();
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
              En este espacio vibrante y lleno de potencial, te invitamos a dar
              el primer paso hacia tu viaje emprendedor. ¿Tienes una idea
              innovadora que está esperando florecer? ¿Buscas el socio ideal
              para llevar tu proyecto al siguiente nivel?
            </p>
            <p>
              Al registrarte, no solo estarás creando tu cuenta, sino que
              estarás abriendo las puertas a innumerables oportunidades de
              colaboración. Tu próxima asociación estratégica podría estar a
              solo un clic de distancia. Haz clic en el botón a continuación y
              regístrate ahora para desbloquear un mundo de oportunidades
              comerciales esperando por ti.
            </p>
          </div>
          <button className="inst__btn" onClick={() => navigate("/registro")}>
            Aplica ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Conviertete;
