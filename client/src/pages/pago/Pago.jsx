import "./Pago.css";


import React from 'react'


const Pago = () => {
  return (
    <div class="container-pago">
      <div class="price">
        <h1>Método de Pago</h1>
      </div>
      <div class="card__container">
      
        <div class="card-pago">
          <div class="left">
            <input id="pp" type="radio" name="payment" data-method="paypal" />
            <div class="radio"></div>
            <label for="pp">Paypal</label>
          </div>
          <div className="img-container">
            <img src="/fotoPaypal.jpg" alt="paypal" />
          </div>
        </div>
      </div>
      <div class="button">
        <button type="submit"><i class="ion-locked"></i> Confirm and Pay</button>
      </div>
    </div>
  )
}

export default Pago;