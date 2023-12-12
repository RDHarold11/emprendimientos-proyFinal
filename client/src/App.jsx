import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";

/* Importacion de las paginas que se estableceran en las rutas de abajo */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/registro/Registro";
import CuentaPage from "./pages/cuenta/cuenta";
import DetallePublicacionPage from "./pages/detallePublicacion/detallePublicacion";
import EditarCuentapage from "./pages/cuenta/EditarCuenta";
import Navbar from "./components/Navbar";
import Carrito from "./pages/carrito/Carrito";
import Favorito from "./pages/wish/Wish";
import Direccion from "./pages/direccion/Direccion";
import Pago from "./pages/pago/Pago";
import AcercaDe from "./components/Acercade/AcercaDe";
import Peticiones from "./pages/peticiones/Peticiones";
import PeticionesUser from "./pages/peticionesUser/PeticionesUser";
import PeticionesAdmin from "./pages/peticionesAdmin/peticionesAdmin";

import Usuario from "./pages/admin/usuario/Usuario";
import Edituser from "./pages/admin/usuario/edituser/Edituser";
import Product from "./pages/admin/productos/Product";
import EditProduct from "./pages/admin/productos/editproduct/Editproduct";
import Ordenes from "./pages/admin/ordenes/Ordenes";

import ProtectAdminRoute from "./components/ProtectAdminRoute";
import Protect from "./components/Protect";

/* Rutas de emprendimiento */
import EmprendedorPage from "./pages/emprendedor/EmprendedorPage";
import EditarEmprendimientoPage from "./pages/emprendedor/EditarEmprendimientoPage";

/* Rutas del admin */
import AdminPage from "./pages/admin/AdminPage";

import Producto from "./pages/productos/Producto";
import CrearProducto from "./pages/productos/CrearProducto";
import Emprendimiento from "./pages/emprendimientos/Emprendimiento";
import PublicacionesAdminPage from "./pages/admin/Publicaciones/PublicacionesAdminPage";

/* Rutas del Ecommerce */
import HomeEcommerce from "./pages/ecommerce/Home/Home";
import ProductDetail from "./pages/ecommerce/DetailsProduct/ProductDetail";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Order from "./pages/order/Order";
import MisOrdenes from "./pages/MisOrdenes/Ordenes";
import CategoryProducts from './components/Ecommerce/Categories/categoryproducts';
function App() {
  return (
    <>
      {/* Aqui se ejecuta todo el codigo */}
      <Router>
        <Toaster richColors position="top-right"></Toaster>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" index={true} element={<Home />}></Route>
          <Route path="/ecommerce/home" element={<HomeEcommerce />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/carrito" element={<Carrito />}></Route>
          <Route path="/wish" element={<Favorito />}></Route>
          <Route path="/direccion" element={<Direccion />}></Route>
          <Route path="/pago" element={<Pago />}></Route>
          <Route path="/acercade" element={<AcercaDe />}></Route>
                  {/* Ruta para mostrar productos de una categoría específica */}
        <Route path="/categoria/:category" element={<CategoryProducts />} />
        

          <Route
            path="/publicacion/:id/detalle"
            element={<DetallePublicacionPage />}
          ></Route>
          <Route
            path="/producto/:id/detalle"
            element={<ProductDetail />}
          ></Route>

          {/* Rutas del admin */}
          <Route path="" element={<ProtectAdminRoute />}>
            <Route path="/usuario" element={<Usuario />}></Route>
            <Route
              path="/admin/publicaciones"
              element={<PublicacionesAdminPage />}
            ></Route>
            <Route path="/admin/productos" element={<Product />}></Route>
            <Route path="/editar/:id" element={<EditProduct />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
            <Route path="/admin/user/:id/edit" element={<Edituser />}></Route>
            <Route path="/ordenes" element={<Ordenes />}></Route>
          </Route>
          {/* Rutas para quienes iniciaron sesion */}
          <Route path="" element={<Protect />}>
            <Route path="/producto" element={<Producto />}></Route>
            <Route path="/crearProducto" element={<CrearProducto />}></Route>
            <Route path="/emprendimiento" element={<Emprendimiento />}></Route>
            <Route path="/emprendedor" element={<EmprendedorPage />}></Route>
            <Route path="/micuenta" element={<CuentaPage />}></Route>
            <Route path="/editcuenta" element={<EditarCuentapage />}></Route>
            <Route
              path="/edit/publicaciones/:id"
              element={<EditarEmprendimientoPage />}
            ></Route>
            <Route path="/peticiones" element={<Peticiones />}></Route>
            <Route path="/peticionesUser" element={<PeticionesUser />}></Route>
            <Route
              path="/peticionesAdmin"
              element={<PeticionesAdmin />}
            ></Route>
            <Route path="/placeorder" element={<PlaceOrder />}></Route>
            <Route path="/order/:id" element={<Order />}></Route>
            <Route path="/ordenes/me" element={<MisOrdenes />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
