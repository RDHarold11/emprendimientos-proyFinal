import "./Pago.css";
import { toast } from "sonner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePaymentMethod } from "../../slices/cartSlice";

const Pago = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(savePaymentMethod(paymentMethod));
    toast.success("Método de pago agregado");
  };
  return (
    <div className="container-pago">
      <div className="price">
        <h1>Método de Pago</h1>
      </div>
      <div className="card__container">
        <div className="card-pago">
          <div className="left">
            <input
              id="PayPal"
              type="radio"
              name="paymentMethod"
              value="PayPal"
              data-method="paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <div className="radio"></div>
            <label htmlFor="PayPal o Credit Card">Paypal</label>
          </div>
          <div className="img-container">
            <img src="/fotoPaypal.jpg" alt="paypal" />
          </div>
        </div>
      </div>
      <div className="button">
        <button type="submit" onClick={submitHandler}>
          <i className="ion-locked"></i> Confirm and Pay
        </button>
      </div>
    </div>
  );
};

export default Pago;
