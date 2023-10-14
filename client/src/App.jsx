import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import { Toaster } from "sonner"

/* Importacion de las paginas que se estableceran en las rutas de abajo */
import Home from "./pages/Home"
import Login from "./pages/Login"
import Producto from './pages/productos/Producto'; 
import CrearProducto from './pages/productos/CrearProducto'; 
import Emprendimiento from './pages/emprendimientos/Emprendimiento'; 
import Registro from "./pages/registro/Registro"
import Navbar from "./components/Navbar"


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
          <Route path="/" index={true} element={<Home/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/registro"  element={<Registro/>}></Route>
          <Route path="/producto" element={<Producto />} > </Route>
          <Route path="/crearProducto" element={<CrearProducto />} > </Route>
          <Route path="/emprendimiento" element={<Emprendimiento/>} > </Route>
        
        </Routes>
      </Router>
    </>
  )
}

export default App
