import React from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Header from "../../components/Header/Header";
import { useGetMyOrdersQuery } from "../../slices/ordersApiSlice";

const Ordenes = () => {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <>
      <Header text="Tus ordenes" />
      <div className="contenedor">
        <form action="/" method="POST">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Pagado</th>
                <th>Envíado</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <div className="nav-link user">
                        <AiOutlineClose size={20} />
                      </div>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <div className="nav-link user">
                        <AiOutlineClose size={20} />
                      </div>
                    )}
                  </td>
                  <td>
                    <Link className="nav-link user" to={`/order/${order._id}`}>
                      Detalles
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Ordenes;
