import "./AdminPageCss.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";
import { useGetUsersQuery } from "../../slices/usersApiSlice";
import Loading from "../../components/Loading";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./AdminPageCss.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminPage = () => {
  const { data, isLoading, error } = useGetOrdersQuery();
  const { data: users, isLoading: usersLoading } = useGetUsersQuery();

  const [ordenes, setOrdenes] = useState({ pagadas: 0, noPagadas: 0 });
  const [usuarios, setUsuarios] = useState({
    empresas: 0,
    admin: 0,
    emprendedores: 0,
  });

  const handleDataOrdenes = () => {
    if (data) {
      const ordenesPagadas = data.filter((item) => item.isPaid);
      const ordenesNoPagadas = data.filter((item) => !item.isPaid);
      setOrdenes({
        pagadas: ordenesPagadas.length,
        noPagadas: ordenesNoPagadas.length,
      });
    }
  };

  const handleDataUsers = () => {
    if (users) {
      const empresas = users.filter((item) => item.isEmpresa);
      const admin = users.filter((item) => item.isAdmin);
      const emprendedores = users.filter((item) => item.isEmprendedor);
      setUsuarios({
        empresas: empresas.length,
        admin: admin.length,
        emprendedores: emprendedores.length,
      });
    }
  };
  console.log(usuarios);

  const dataGraf = {
    labels: ["Pagado", "No pagado"],
    datasets: [
      {
        label: "# de orden",
        data: [ordenes.pagadas, ordenes.noPagadas],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const dataUsers = {
    labels: ["Administradores", "Empresas", "Emprendedores"],
    datasets: [
      {
        label: "# Tipo de cuenta",
        data: [usuarios.admin, usuarios.empresas, usuarios.emprendedores],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  //Grafico Peticiones resueltas/incompletas

  useEffect(() => {
    handleDataOrdenes();
    handleDataUsers();
  }, [data, users]);

  if (isLoading && usersLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header text="¡Administra todo!"></Header>
      <header className="graf__flex">
        <span>
          <Pie
            data={dataGraf}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Ordenes pagadas / no pagadas",
                },
              },
            }}
          />
        </span>
        <span>
          <Pie
            data={dataUsers}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Cuentas Admin/Emprendedores/Empresas",
                },
              },
            }}
          />
        </span>
      </header>
      <section className="admin-container">
        <div className="products">
          <>
            <Link to="/admin/productos" style={{ textDecoration: "none" }}>
              <h3>Productos</h3>
            </Link>
          </>
        </div>
        <div className="users">
          <>
            <Link to="/usuario" style={{ textDecoration: "none" }}>
              <h3>Usuarios</h3>
            </Link>
          </>
        </div>
        <div className="orders">
          <>
            <Link to="/ordenes" style={{ textDecoration: "none" }}>
              <h3>Ordenes</h3>
            </Link>
          </>
        </div>
        <div className="pubs">
          <>
            <Link to="/admin/publicaciones" style={{ textDecoration: "none" }}>
              <h3>Publicaciones</h3>
            </Link>
          </>
        </div>
        <div className="business">
          <>
            <h3>Empresas</h3>
          </>
        </div>
        <div className="requets">
          <>
            <Link to="/peticionesAdmin" style={{ textDecoration: "none" }}>
              <h3>Peticiones</h3>
            </Link>
          </>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
