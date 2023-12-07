import React from "react";
import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetyPaypalClientIdQuery,
  useDeliverOrderMutation,
} from "../../slices/ordersApiSlice";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

import "./order.css";

const Order = () => {
  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const { userInfo } = useSelector((state) => state.auth);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetyPaypalClientIdQuery();

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Pago satisfactorio");
      } catch (error) {
        toast.error(error?.data?.message || error?.message);
      }
    });
  }

  function onError(err) {
    toast.error(err.message);
  }
  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: order.totalPrice,
            },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  }

  const deliverOrderHandler = async () => {
    try {
      await deliverOrder(orderId);
      refetch();
      toast.success("Orden entregada");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPayPalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        }),
          paypalDispatch({
            type: "setLoadingStatus",
            value: "pending",
          });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPayPalScript();
        }
      }
    }
  }, [order, paypal, paypalDispatch, loadingPayPal, errorPayPal]);

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <>
      <Header text={`Tu orden: ${order._id}`} />
      <section className="order container__ecommerce">
        <div className="ecommerce__flex">
          <div className="order__info">
            <div className="order__shipping info">
              <h3>Tú Dirección</h3>
              <p>
                <strong>Nombre: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                {order.user.email}
              </p>
              <p>
                <span>Dirección:</span>
                {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <div className="mensaje__si">
                  {" "}
                  Entregado el {order.deliveredAt}
                </div>
              ) : (
                <div className="mensaje__no">No entregado</div>
              )}
            </div>
            <div className="order__pay info">
              <h3>Método de pago</h3>
              <p>
                <span>Método:</span>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <div className="mensaje__si"> Pagado el {order.paidAt}</div>
              ) : (
                <div className="mensaje__no">No pagado</div>
              )}
            </div>
            <div className="orden info">
              <h3>Tus articulos</h3>

              <div>
                {order.orderItems.map((item, index) => (
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
            </div>
          </div>
          <div className="detalle__orden">
            <h3>Resumen de la orden</h3>
            <div className="items">
              <div>
                <h4>Articulos: </h4>
              </div>
              <div>
                <h4>${order.itemsPrice}</h4>
              </div>
            </div>
            <div className="items">
              <div>
                <h4>Envío: </h4>
              </div>
              <div>
                <h4>${order.shippingPrice}</h4>
              </div>
            </div>
            <div className="items">
              <div>
                <h4>Impuestos: </h4>
              </div>
              <div>
                <h4>${order.taxPrice}</h4>
              </div>
            </div>
            <div className="items">
              <div>
                <h4>Total: </h4>
              </div>
              <div>
                <h4>${order.totalPrice}</h4>
              </div>
            </div>
            {!order.isPaid && (
              <div>
                {loadingPay && <h2>Cargando...</h2>}
                {isPending ? (
                  <h2>Cargando...</h2>
                ) : (
                  <div className="paypal__btn">
                    <PayPalButtons
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={onError}
                    ></PayPalButtons>
                  </div>
                )}
              </div>
            )}
            {loadingDeliver && <h2>Cargando...</h2>}
            {userInfo &&
              userInfo.isAdmin &&
              order.isPaid &&
              !order.isDelivered && (
                <div>
                  <button onClick={deliverOrderHandler}>
                    Marcar como entregado
                  </button>
                </div>
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
