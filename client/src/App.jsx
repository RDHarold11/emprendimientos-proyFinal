import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";

/* Importacion de las paginas que se estableceran en las rutas de abajo */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/registro/Registro";
import CuentaPage from "./pages/cuenta/cuenta";
import  EditarCuentapage from "./pages/cuenta/EditarCuenta";
import Navbar from "./components/Navbar";

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

function App() {
  return (
    <>
      {/* Aqui se ejecuta todo el codigo */}
      <Router>
        <Toaster richColors position="top-right"></Toaster>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" index={true} element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/registro" element={<Registro />}></Route>

          {/* Rutas del admin */}
          <Route path="" element={<ProtectAdminRoute />}>
            <Route path="/admin" element={<AdminPage />}></Route>
          </Route>
          {/* Rutas para quienes iniciaron sesion */}
          <Route path="" element={<Protect />}>
            <Route path="/producto" element={<Producto />}></Route>
            <Route path="/crearProducto" element={<CrearProducto />}></Route>
            <Route path="/emprendimiento" element={<Emprendimiento />}></Route>
            <Route path="/emprendedor" element={<EmprendedorPage />}></Route>
            <Route path="/micuenta" element={<CuentaPage />}></Route>
            <Route path="/editcuenta" element={<EditarCuentapage />}></Route>
            <Route path="/edit/publicaciones/:id" element={<EditarEmprendimientoPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
