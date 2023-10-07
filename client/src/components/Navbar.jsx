import img from "/cart.svg";
import img2 from "/user.svg";

const Navbar = () => {
  return (
    /* Esta es la estructura para todas las paginas y componentes, dentro del return va la estructura
    del html de toda la vida */
    /* Todo elemento dentro del return debe estar dentro de un elemento padre.
    Es decir, si vas a colocar html con su diseño, todo debe estar dentro de una etiqueta contenedora
    Ejemplo:  
    <div> 
        Resto del contenido
    </div> */
    <div>
      {" "}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="/home">
            Catalyst<span></span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                  Inicio
                </a>
              </li>
              <li>
                <a className="nav-link" href="about.html">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a className="nav-link" href="services.html">
                  Servicios
                </a>
              </li>
              <li>
                <a className="nav-link" href="blog.html">
                  Emprendimientos
                </a>
              </li>
              <li>
                <a className="nav-link" href="/login">
                  Iniciar Sesión
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src={img} />
                </a>
              </li>
              <li>
                <a className="nav-link" href="cart.html">
                  <img src={img2} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
