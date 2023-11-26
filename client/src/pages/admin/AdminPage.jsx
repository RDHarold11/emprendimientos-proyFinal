import "./AdminPageCss.css";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom"

const AdminPage = () => {
  return (
    <>
      <Header text="¡Administra todo!"></Header>
      <section className="admin-container">
        <div className="products">
          <>
          <Link  to="/admin/productos" style={{textDecoration: "none"}}>
            <h3>Productos</h3>
            </Link>
          </>
        </div>
        <div className="users">
          <>
          <Link  to="/usuario" style={{textDecoration: "none"}}>
            <h3>Usuarios</h3>
          </Link>
          </>
        </div>
        <div className="orders">
          <>
          <Link  to="/ordenes" style={{textDecoration: "none"}}>
            <h3>Ordenes</h3>
            </Link>
          </>
        </div>
        <div className="pubs">
          <>
          <Link to="/admin/publicaciones" style={{textDecoration: "none"}}>
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
          <Link to="/peticionesAdmin" style={{textDecoration: "none"}}>
            <h3>Peticiones</h3>
          </Link>
          </>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
