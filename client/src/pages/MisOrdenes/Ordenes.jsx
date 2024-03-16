import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Header from "../../components/Header/Header";
import { useGetMyOrdersQuery } from "../../slices/ordersApiSlice";
import Loading from "../../components/Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Ordenes = () => {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery();
  const [filterPagado, setFilterPagado] = useState(false);
  const [filterEnviado, setFilterEnviado] = useState(false);
  const [filterPrecioMin, setFilterPrecioMin] = useState("");
  const [filterPrecioMax, setFilterPrecioMax] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const clearFilters = () => {
    setFilterPagado(false);
    setFilterEnviado(false);
    setFilterPrecioMin("");
    setFilterPrecioMax("");
    setStartDate(null);
    setEndDate(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  // Aplicar filtros
  const filteredOrders = orders
    .filter((order) => (!filterPagado || order.isPaid) && (!filterEnviado || order.isDelivered))
    .filter((order) =>
      (filterPrecioMin === "" || parseFloat(order.totalPrice) >= parseFloat(filterPrecioMin)) &&
      (filterPrecioMax === "" || parseFloat(order.totalPrice) <= parseFloat(filterPrecioMax))
    )
    .filter((order) =>
      (startDate === null || new Date(order.createdAt) >= startDate) &&
      (endDate === null || new Date(order.createdAt) <= endDate)
    );

  return (
    <>
      <Header text="Tus ordenes" />
      <div className="contenedor">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="form-check form-check-inline ml-5">
            <input
              type="checkbox"
              className="form-check-input"
              id="pagadoFilter"
              checked={filterPagado}
              onChange={() => setFilterPagado(!filterPagado)}
            />
            <label className="form-check-label" htmlFor="pagadoFilter">
              Pagado
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="enviadoFilter"
              checked={filterEnviado}
              onChange={() => setFilterEnviado(!filterEnviado)}
            />
            <label className="form-check-label" htmlFor="enviadoFilter">
              Enviado
            </label>
          </div>
          <div className="form-group ml-3">
            <label htmlFor="precioFilter">Filtrar por Precio:</label>
            <input
              type="number"
              className="form-control mr-1 mt-3"
              placeholder="Min"
              value={filterPrecioMin}
              onChange={(e) => setFilterPrecioMin(e.target.value)}
            />
     
            <input
              type="number"
              className="form-control ml-1 mt-3"
              placeholder="Max"
              value={filterPrecioMax}
              onChange={(e) => setFilterPrecioMax(e.target.value)}
            />
          </div>
          <div className="form-group ml-3">
            <label htmlFor="fechaFilter">Filtrar por Rango de Fecha:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy-MM-dd"
              className="form-control mt-3"
              placeholderText="Inicio"
            />
            <br></br>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy-MM-dd"
              className="form-control ml-1 mt-3"
              placeholderText="Fin"
            />
          </div>
          
          <div className="form-group ml-3">
            <button
              type="button"
              className="btn btn-success"
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
