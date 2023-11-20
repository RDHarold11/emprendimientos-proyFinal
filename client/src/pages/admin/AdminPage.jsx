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
          <Link  to="/productoadmin">
            <h3>Productos</h3>
            </Link>
          </>
        </div>
        <div className="users">
          <>
          <Link  to="/usuario">
            <h3>Usuarios</h3>
          </Link>
          </>
        </div>
        <div className="orders">
          <>
          <Link  to="/ordenes">
            <h3>Ordenes</h3>
            </Link>
          </>
        </div>
        <div className="pubs">
          <>
            <h3>Publicaciones</h3>
          </>
        </div>
        <div className="business">
          <>
            <h3>Empresas</h3>
          </>
        </div>
        <div className="requets">
          <>
            <h3>Peticiones</h3>
          </>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
