import React from "react";
import "./navbar.css";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar__ecommerce">
      <div className="container__ecommerce">
        <div className="navbar__top">
          <div className="img__container-navbar">
            <img src="/ecommerce/catalyst.png" alt="" />
          </div>
          <div className="navbar__icons">
            <Link className="ecommerce__link" to="informacion" smooth={true} duration={500}>Información</Link>
            <Link className="ecommerce__link" to="categorias" smooth={true} duration={500}>Categorías</Link>
            <Link className="ecommerce__link" to="nuevo" smooth={true} duration={500}>Lo más nuevo</Link>
            <Link className="ecommerce__link" to="mel" smooth={true} duration={500}>Productos de Mel</Link>
          </div>
          <div className="input__container">
            <input
              type="text"
              placeholder="Search..."
              className="input__navbar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
