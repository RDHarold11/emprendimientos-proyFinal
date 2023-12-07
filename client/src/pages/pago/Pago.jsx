import "./Pago.css";
import { toast } from "sonner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../slices/cartSlice";
import Header from "../../components/Header/Header";

const Pago = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
    toast.success("Método de pago agregado");
  };
  return (
    <>
      <Header text="Método de pago" />
      <div className="container-pago">
        <div className="card__pago-container">
          <div className="card__pago">
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
    </>
  );
};

export default Pago;
