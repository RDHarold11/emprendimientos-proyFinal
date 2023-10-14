import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Navbar = () => {
  const { userInfo: user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
                <a className="nav-link" href="/producto">
                  Servicios
                </a>
              </li>
              <li>
                <a className="nav-link" href="/emprendimiento">
                  Emprendimientos
                </a>
              </li>
              {!user && (
                <Link to="/login" className="nav-link">
                  Iniciar Sesión
                </Link>
              )}
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <Link className="nav-link">
                <AiOutlineShoppingCart size={30} />
              </Link>
              {user && (
                <Link className="nav-link user" to="/cart">
                  <AiOutlineUser size={30} />
                </Link>
              )}
              {user && (
                <div className="logout-link nav-link" onClick={handleLogout}>
                  <AiOutlineLogout size={30} color="white" cursor="pointer" />
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
