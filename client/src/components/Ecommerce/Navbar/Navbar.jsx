import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar__ecommerce">
      <div className="container__ecommerce">
        <div className="navbar__top">
          <div className="img__container-navbar">
            <img src="/ecommerce/catalyst.png" alt="" />
          </div>
          <div className="navbar__icons">
            <Link className="ecommerce__link">Más vendidos</Link>
            <Link className="ecommerce__link">Últimos productos</Link>
            <Link className="ecommerce__link">Mas vendidos</Link>
            <Link className="ecommerce__link">Mas vendidos</Link>
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
