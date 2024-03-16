import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { useGetProductsQuery } from "../../../slices/productsApiSlice";
import { Link as RouterLink } from "react-router-dom";  // Importa Link de react-router-dom
import { Link as ScrollLink } from "react-scroll";  // Importa ScrollLink de react-scroll
import Loading from "../../../components/Loading";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { data, refetch, isLoading, error } = useGetProductsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        closeSearch();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const filteredResults = data
    ? data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <nav className="navbar__ecommerce">
      <div className="container__ecommerce">
        <div className="navbar__top">
          <div className="img__container-navbar">
            <img src="/ecommerce/catalyst.png" alt="" />
          </div>
          <div className="navbar__icons">
            <ScrollLink className="ecommerce__link" to="informacion" smooth={true} duration={500}>
              Información
            </ScrollLink>
            <ScrollLink className="ecommerce__link" to="categorias" smooth={true} duration={500}>
              Categorías
            </ScrollLink>
            <ScrollLink className="ecommerce__link" to="nuevo" smooth={true} duration={500}>
              Lo más nuevo
            </ScrollLink>
            <ScrollLink className="ecommerce__link" to="mel" smooth={true} duration={500}>
              Productos de Mel
            </ScrollLink>
  
          </div>
          <div className="input__container" ref={searchContainerRef}>
            <input
              type="text"
              placeholder="Search..."
              className="input__navbar"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={openSearch}
            />
            {isSearchOpen && (
              <div className="search-results">
                {filteredResults.map((result) => (
                  <RouterLink
                    to={`/producto/${result._id}/detalle`}
                    className="mini-card"
                    key={result._id}
                    smooth={true}
                    duration={500}
                  >
                    <img src={result.image} alt={result.name} />
                    <div className="mini-card__content">
                      <h3>{result.name}</h3>
                      <p>${result.price}</p>
                    </div>
                  </RouterLink>
                ))}
                {filteredResults.length === 0 && <p>No hay resultados.</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
