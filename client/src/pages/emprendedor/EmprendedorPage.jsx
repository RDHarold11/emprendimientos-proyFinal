import Header from '../../components/Header/Header'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'

const EmprendedorPage = () => {
  const {userInfo} = useSelector((state) => state.auth)
  return (
   <>
    <Header text={`Hola, ${userInfo.name}`}></Header>
    <section className="admin-container">
        <div className="products">
          <>
          <Link to="/micuenta" style={{textDecoration: "none"}}>
            <h3>Mi cuenta</h3>
          </Link>
          </>
        </div>

        <div className="orders">
          <>
            <h3>Ordenes</h3>
          </>
        </div>
        <div className="pubs">
          <>
          <Link to="/emprendimiento" style={{textDecoration: "none"}}>
            <h3>Publicaciones</h3>
          </Link>
          </>
        </div>
        <div className="business">
          <>
          <Link to="/producto" style={{textDecoration: "none"}}>
            <h3>Mis Productos</h3>
          </Link>
          </>
        </div>
        <div className="requets">
          <>
            <h3>Crear Peticiones</h3>
          </>
        </div>
      </section>
   </>
  )
}

export default EmprendedorPage