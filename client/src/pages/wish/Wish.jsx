import "./Wish.css";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import Header from "../../components/Header/Header";

const Wish = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addWishHandler = async (c, qty) => {
    dispatch(addToCart({ ...c, qty })); // Utilizar addToCart en lugar de addToWish
  };

  const removeFromWishHandler = async (id) => {
    dispatch(removeFromCart(id)); // Utilizar removeFromCart en lugar de removeFromWish
  };

  const checkoutHandler = () => {
    navigate("/direccion");
  };

  const wish = useSelector((state) => state.cart);
  const { WishItems } = wish; // Utilizar WishItems en lugar de cartItems
  return (
    <>
      <Header text="Tus Favoritos" />
      <div className="wish-container">
        <div className="wish-div">
          {WishItems?.map((c) => (
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
                onChange={(e) => addWishHandler(c, Number(e.target.value))} // Corregir addToWishHandler a addWishHandler
              >
                {[...Array(c.countInStock).keys()].map((x) => (
                  <option value={x + 1} key={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <div
                className="remove__item"
                onClick={() => removeFromWishHandler(c._id)}
              >
                <FaTrash className="remove-icon" color="white" />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Wish;
