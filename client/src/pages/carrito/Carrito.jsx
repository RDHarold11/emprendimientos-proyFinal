import "./Carrito.css";
import img1 from "/icono.jpg";
import { FaTrash } from "react-icons/fa";

import React, { useState } from 'react'

const Carrito = () => {
  const [quantity, setQuantity] = useState(0)
  return (
    <div className="cart-container">
      <div className="cart-title">CARRITO DE COMPRAS</div>
      <div className="cart-div">
        <div className="product">
          <img src={img1} alt="Producto 1" className="product-image" />
          <div className="product-details">
            <div className="product-name">Producto 1</div>
            <div className="product-price">$19.99</div>
          </div>
          <input type="number" className="quantity-input" value="1" />
          <FaTrash className="remove-icon" />
        </div>

        <div className="product">
          <img src={img1} alt="Producto 2" className="product-image" />
          <div className="product-details">
            <div className="product-name">Producto 2</div>
            <div className="product-price">$24.99</div>
          </div>
          <input type="number" className="quantity-input" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
          <FaTrash className="remove-icon" />
        </div>
      </div>
      <div class="carrito-total">
        <div class="fila">
          <strong>Tu Total</strong>
        </div>
        <br></br>
        <div className="cualto">
          <span class="carrito-precio-total">
            $120.000,00
          </span>
        </div>
        <br></br>

        <button class="btn-pagar">Realizar Pago </button>
      </div>
    </div>
  )
}

export default Carrito;