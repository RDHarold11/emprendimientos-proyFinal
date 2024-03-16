import React from "react";
import "./acerca.css"; // Asegúrate de importar tu archivo de estilos

const AcercaDe = () => {
  const equipo = {
    nombre: "Catalyst",
    descripcion:
      "Catalyst es un sistema donde puedes publicar tus ideas de emprendimiento o productos para que otros puedan visualizar, aportar o comprar a tu causa.",
    equipo: {
      nombre: "Equipo Catalyst",
      miembros: [
        "Edwin David Díaz Mendoza",
        "Harold Manuel Aquino Peralta",
        "Alex Manuel Frias Molina",
        "Mélida Mel Piña Acosta",
        "Sary Consuelo Ramirez Paulino",
        "Regil Isaac Batista Calderón",
        "Frailin Ogando",
        "Angel Luis Díaz Cabral",
      ],
    },
  };

  return (
    <div className="contenedor">
      <h1 className="titulo">{equipo.nombre}</h1>
      <p className="descripcion">{equipo.descripcion}</p>

      <div className="equipo-catalyst">
        <h2 className="subtitulo">Equipo Catalyst</h2>
        <ul className="lista-miembros">
          {equipo.equipo.miembros.map((miembro, index) => (
            <li key={index} className="miembro">
              {miembro}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AcercaDe;
