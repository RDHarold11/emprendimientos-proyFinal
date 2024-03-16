import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Header from "../../../components/Header/Header";
import { useGetOrdersQuery } from "../../../slices/ordersApiSlice";
import Loading from "../../../components/Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Ordenes = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  const [filterUsuario, setFilterUsuario] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startPaidDate, setStartPaidDate] = useState(null);
  const [endPaidDate, setEndPaidDate] = useState(null);
  const [startDeliveredDate, setStartDeliveredDate] = useState(null);
  const [endDeliveredDate, setEndDeliveredDate] = useState(null);

  const clearFilters = () => {
    setFilterUsuario("");
    setStartDate(null);
    setEndDate(null);
    setStartPaidDate(null);
    setEndPaidDate(null);
    setStartDeliveredDate(null);
    setEndDeliveredDate(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  // Aplicar filtros

const filteredOrders = orders
  .filter((order) =>
    order.user &&
    order.user.name.toLowerCase().includes(filterUsuario.toLowerCase())
  )
  .filter((order) =>
    (startDate === null || new Date(order.createdAt) >= startDate) &&
    (endDate === null || new Date(order.createdAt) <= endDate)
  )
  .filter((order) =>
    (startPaidDate === null || new Date(order.paidAt) >= startPaidDate) &&
    (endPaidDate === null || new Date(order.paidAt) <= endPaidDate)
  )
  .filter((order) =>
    (startDeliveredDate === null || new Date(order.deliveredAt) >= startDeliveredDate) &&
    (endDeliveredDate === null || new Date(order.deliveredAt) <= endDeliveredDate)
  );

  return (
    <>
      <Header text="Administra las ordenes" />
      <div className="contenedor">
        <div className="filter-row">
          <div className="filter-group-half">
            <label className="filter-label" htmlFor="usuarioFilter">
              Filtrar por Usuario:
            </label>
            <input
              type="text"
              className="form-control filter-input"
              value={filterUsuario}
              onChange={(e) => setFilterUsuario(e.target.value)}
            />
          </div>

          <div className="filter-group-half">
            <label className="filter-label" htmlFor="fechaFilter">
              Rango de Fecha de Orden:
            </label>
            <div className="date-range-picker">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy-MM-dd"
                className="form-control filter-input"
                placeholderText="Inicio"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy-MM-dd"
                className="form-control filter-input"
                placeholderText="Fin"
              />
            </div>
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group-half">
            <label className="filter-label" htmlFor="fechaFilter">
              Rango de Fecha de Pago:
            </label>
            <div className="date-range-picker">
              <DatePicker
                selected={startPaidDate}
                onChange={(date) => setStartPaidDate(date)}
                selectsStart
                startDate={startPaidDate}
                endDate={endPaidDate}
                dateFormat="yyyy-MM-dd"
                className="form-control filter-input"
                placeholderText="Inicio"
              />
              <DatePicker
                selected={endPaidDate}
                onChange={(date) => setEndPaidDate(date)}
                selectsEnd
                startDate={startPaidDate}
                endDate={endPaidDate}
                dateFormat="yyyy-MM-dd"
                className="form-control filter-input"
                placeholderText="Fin"
              />
            </div>
          </div>

          <div className="filter-group-half">
            <label className="filter-label" htmlFor="fechaFilter">
              Rango de Fecha de Envío:
            </label>
            <div className="date-range-picker">
              <DatePicker
                selected={startDeliveredDate}
                onChange={(date) => setStartDeliveredDate(date)}
                selectsStart
                startDate={startDeliveredDate}
                endDate={endDeliveredDate}
                dateFormat="yyyy-MM-dd"
                className="form-control filter-input"
                placeholderText="Inicio"
              />
              <DatePicker
                selected={endDeliveredDate}
                onChange={(date) => setEndDeliveredDate(date)}
                selectsEnd
                startDate={startDeliveredDate}
                endDate={endDeliveredDate}
                dateFormat="yyyy-MM-dd"
                className="form-control filter-input"
                placeholderText="Fin"
              />
            </div>
          </div>

          <div className="filter-group">
            <button
              type="button"
              className="btn btn-primary filter-button"
              onClick={clearFilters}
            >
              Limpiar Filtros
            </button>
          </div>
        </div>

        <form action="/" method="POST">
          <table className="table">
            {/* Encabezado de la tabla */}
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Pagado</th>
                <th>Enviado</th>
                <th>Detalles</th>
              </tr>
            </thead>
            {/* Cuerpo de la tabla */}
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
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
                    <Link
                      className="nav-link user"
                      to={`/order/${order._id}`}
                    >
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
