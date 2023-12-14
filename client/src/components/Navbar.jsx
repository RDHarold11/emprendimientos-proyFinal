import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";
import { FaStar } from "react-icons/fa";

const Navbar = () => {
  const { userInfo: user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
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
        <div className="container__nav">
          <a className="navbar-brand" href="/home">
            <b>Catalyst</b>
          </a>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav nav__container">
              <div className="nav__links">
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    Inicio
                  </a>
                </li>
                <li className="nav-link">
                  <Link className="nav-link" to="/acercade">
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-link" to="/ecommerce/home">
                    Comprar ya
                  </Link>
                </li>
                {!user && (
                  <li className="nav-link">
                    <Link to="/login" className="nav-link">
                      Iniciar Sesión
                    </Link>
                  </li>
                )}
              </div>
              <div>
                <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                  <Link className="nav-link cart-amount" to="/carrito">
                    <AiOutlineShoppingCart size={30} />
                    {cartItems.length > 0 && (
                      <div>{cartItems.reduce((a, c) => a + c.qty, 0)}</div>
                    )}
                  </Link>
                  <Link className="nav-link favorites" to="/wish">
                    <FaStar size={30} />
                    {/* {cartItems.length > 0 && (
                  <div>{cartItems.reduce((a, c) => a + c.qty, 0)}</div>
                )} */}
                  </Link>
                  {user?.isAdmin && (
                    <Link className="nav-link user" to="/admin">
                      <RiUserSettingsLine size={30} />
                    </Link>
                  )}
                  {user?.isEmprendedor && (
                    <Link className="nav-link user" to="/emprendedor">
                      <AiOutlineUser size={30} />
                    </Link>
                  )}
                  {user && (
                    <div
                      className="logout-link nav-link"
                      onClick={handleLogout}
                    >
                      <AiOutlineLogout
                        size={30}
                        color="white"
                        cursor="pointer"
                      />
                    </div>
                  )}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
