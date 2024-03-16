import "./Carrito.css";
import img1 from "/icono.jpg";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import Header from "../../components/Header/Header";

const Carrito = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = async (c, qty) => {
    dispatch(addToCart({ ...c, qty }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/direccion");
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <>
      <Header text="Tu carrito" />
      <div className="cart-container">
        <div className="cart-div">
          {cartItems?.map((c) => (
            <div className="product" key={c._id}>
              <img
                src={c.image}
                alt={c.image}
                className="product-image"
                loading="lazy"
              />
              <div className="product-details">
                <div className="product-name">
                  <Link to={`/producto/${c._id}/detalle`}>{c.name}</Link>
                </div>
                <div className="product-price">${c.price}</div>
              </div>
              <select
                className="bottom__select"
                value={c.qty}
                onChange={(e) => addToCartHandler(c, Number(e.target.value))}
              >
                {[...Array(c.countInStock).keys()].map((x) => (
                  <option value={x + 1} key={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <div
                className="remove__item"
                onClick={() => removeFromCartHandler(c._id)}
              >
                <FaTrash className="remove-icon" color="white" />
              </div>
            </div>
          ))}
        </div>
        <div className="carrito-total">
          <div className="fila">
            <strong>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              articulos
            </strong>
          </div>
          <br></br>
          <div className="cualto">
            <span className="carrito-precio-total">
              Precio: $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </span>
          </div>
          <br></br>
          <button
            className="btn-pagar"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Realizar Pago{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrito;
