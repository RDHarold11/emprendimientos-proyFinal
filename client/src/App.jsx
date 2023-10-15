import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";

/* Importacion de las paginas que se estableceran en las rutas de abajo */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/registro/Registro";
import Navbar from "./components/Navbar";

import ProtectAdminRoute from "./components/ProtectAdminRoute";

import EmprendedorPage from "./pages/emprendedor/EmprendedorPage";

/* Rutas del admin */
import AdminPage from "./pages/admin/AdminPage";

function App() {
  return (
    <>
      {/* Aqui se ejecuta todo el codigo */}
      <Router>
        <Toaster richColors position="top-right"></Toaster>
        <Navbar></Navbar>
        <Routes>
          {/* Aqui dentro se colocaran todas las rutas del proyecto */}
          {/* path indica la ruta, es decir, si colocamos path="/products" en la url, podremos ver la pagina correspondiente a esa ruta */}
          {/* Dentro de element se coloca la pagina */}
          <Route path="/" index={true} element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/registro" element={<Registro />}></Route>

          <Route path="" element={<ProtectAdminRoute />}>
            <Route path="/admin" element={<AdminPage />}></Route>
            <Route path="/emprendedor" element={<EmprendedorPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
