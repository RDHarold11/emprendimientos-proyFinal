import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useGetMyOrdersQuery } from "../../slices/ordersApiSlice";
import { useGetMyProductsQuery } from "../../slices/productsApiSlice";
import {useGetMyEmpQuery} from "../../slices/emprendimientosApiSlice";
import {useGetPeticionesQuery } from "../../slices/peticionesApiSlice";
import Loading from "../../components/Loading";
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmprendedorPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [productos, setProductos] = useState(0);
  const [ordenes, setOrdenes] = useState(0);
  const [publicaciones, setPublicaciones] = useState(0);
  const [peticiones, setPeticiones] = useState(0);

  const { data: orders, isLoading: ordersLoading } = useGetMyOrdersQuery();
  const { data: products, isLoading: productsLoading } = useGetMyProductsQuery();
  const { data: publications, isLoading: publicationsLoading } =useGetMyEmpQuery();
  const { data: requests, isLoading: requestsLoading } = useGetPeticionesQuery();

  const handleData = () => {
    setProductos(products ? products.length : 0);
    setOrdenes(orders ? orders.length : 0);
    setPublicaciones(publications ? publications.length : 0);
    setPeticiones(requests ? requests.length : 0);
  };

  useEffect(() => {
    handleData();
  }, [products, orders, publications, requests]);

  if (ordersLoading || productsLoading || publicationsLoading || requestsLoading) {
    return <Loading />;
  }

  const dataChart = {
    labels: ["Productos", "Órdenes", "Publicaciones", "Peticiones"],
    datasets: [
      {
        label: "# Cantidad",
        data: [productos, ordenes, publicaciones, peticiones],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Header text={`Hola, ${userInfo.name}`}></Header>
      <header className="graf__flex">
        <span>
          <Pie
            data={dataChart}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Estadísticas de Usuario",
                },
              },
            }}
          />
        </span>
      </header>
      <section className="admin-container">
        <div className="products">
          <Link to="/micuenta" style={{ textDecoration: "none" }}>
            <h3>Mi cuenta</h3>
          </Link>
        </div>

        <div className="orders">
          <Link to="/ordenes/me" style={{ textDecoration: "none" }}>
            <h3>Ordenes</h3>
          </Link>
        </div>
        <div className="pubs">
          <Link to="/emprendimiento" style={{ textDecoration: "none" }}>
            <h3>Publicaciones</h3>
          </Link>
        </div>
        <div className="business">
          <Link to="/producto" style={{ textDecoration: "none" }}>
            <h3>Mis Productos</h3>
          </Link>
        </div>
        <div className="requets">
          <Link to="/peticiones" style={{ textDecoration: "none" }}>
            <h3>Crear Peticiones</h3>
          </Link>
        </div>
        <div className="requets">
          <Link to="/peticionesUser" style={{ textDecoration: "none" }}>
            <h3>Mis Peticiones</h3>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EmprendedorPage;
