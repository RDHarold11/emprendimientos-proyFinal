import { useEffect } from "react";
import Header from "../../components/Header/Header";
import "./placeorder.css";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { clearCartItems } from "../../slices/cartSlice";
import { useNavigate, Link } from "react-router-dom";
import {useCreateOrderMutation} from "../../slices/ordersApiSlice"
import Loading from "../../components/Loading";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [createOrder, {isLoading, error}] = useCreateOrderMutation()

  useEffect(() => {
    if(!cart.shippingAddress.address){
      navigate("/direccion")
    } else if(!cart.paymentMethod){
      navigate("/pago")
    }
  },[cart.paymentMethod, cart.shippingAddress.address, navigate])

  const dispatch = useDispatch()
  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice
      }).unwrap()
      dispatch(clearCartItems())
      toast.success("Orden creada")
      navigate(`/order/${res._id}`)
    } catch (err) {
      toast.error(error)
    }
  }
  if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <Header text="Coloca tu orden" />
      <section className="order container__ecommerce">
        <div className="ecommerce__flex">
          <div className="order__info">
            <div className="order__shipping info">
              <h3>Tú Dirección</h3>
              <p>
                <span>Dirección:</span>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </div>
            <div className="order__pay info">
              <h3>Método de pago</h3>
              <p>
                <span>Método:</span>
                {cart.paymentMethod}
              </p>
            </div>
            <div className="orden info">
              <h3>Tus articulos</h3>
              {cart.cartItems.length === 0 ? (
                <h2>Tu carrito está vacío</h2>
              ) : (
                <div>
                  {cart.cartItems.map((item, index) => (
                    <div className="order__items-order" key={index}>
                      <div>
                        <img
                          className="img__order"
                          src={item.image}
                          alt={item.image}
                        />
                      </div>
                      <div>
                        <h5>
                          <Link to={`/producto/${item._id}/detalle`}>
                            {item.name}
                          </Link>
                        </h5>
                      </div>
                      <div>
                        {item.qty} x {item.price} = $
                        {(item.qty * item.price).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="detalle__orden">
            <h3>Resumen de la orden</h3>
            <div className="items">
              <div>
                <h4>Articulos: </h4>
              </div>
              <div>
                <h4>${cart.itemsPrice}</h4>
              </div>
            </div>
            <div className="items">
              <div>
                <h4>Envío: </h4>
              </div>
              <div>
                <h4>${cart.shippingPrice}</h4>
              </div>
            </div>
            <div className="items">
              <div>
                <h4>Impuestos: </h4>
              </div>
              <div>
                <h4>${cart.taxPrice}</h4>
              </div>
            </div>
            <div className="items">
              <div>
                <h4>Total: </h4>
              </div>
              <div>
                <h4>${cart.totalPrice}</h4>
              </div>
            </div>
            <button disabled={cart.cartItems === 0} onClick={placeOrderHandler}>Colocar orden</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceOrder;
