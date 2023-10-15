import "./AdminPageCss.css";
import Header from "../../components/Header/Header";

const AdminPage = () => {
  return (
    <>
      <Header text="¡Administra todo!"></Header>
      <section className="admin-container">
        <div className="products">
          <>
            <h3>Productos</h3>
          </>
        </div>
        <div className="users">
          <>
            <h3>Usuarios</h3>
          </>
        </div>
        <div className="orders">
          <>
            <h3>Ordenes</h3>
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
