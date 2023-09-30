import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'

/* Importacion de las paginas que se estableceran en las rutas de abajo */
import Home from "./pages/Home"

function App() {

  return (
    <>
    {/* Aqui se ejecuta todo el codigo */}
      <Router>
        <Routes>
          {/* Aqui dentro se colocaran todas las rutas del proyecto */}
          {/* path indica la ruta, es decir, si colocamos path="/products" en la url, podremos ver la pagina correspondiente a esa ruta */}
          {/* Dentro de element se coloca la pagina */}
          <Route path="/" index={true} element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
