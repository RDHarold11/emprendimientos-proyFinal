import React from 'react'
import images from "/icono.jpg"
import "./cuenta.css"
import {useSelector} from "react-redux"
import { toast } from "sonner";
import { Link } from 'react-router-dom'


const CuentaPage = () => {


  const {userInfo} = useSelector((state) => state.auth)
  return (
   <>
    <div className="centered-container">
      <img className="img" src={images} alt="User" />
      <h4  className="center">{userInfo.name} {userInfo.lastName}</h4>
      <h5  className="center">{userInfo.email}</h5>
      <br></br>
      <button className="btn btn-secondary btn-bottom" >
        <Link to="/editcuenta" style={{textDecoration: "none"}}>
          Editar 
        </Link>  
      </button>
      <button className="btn btn-primary btn-bottom">
        <Link to="/producto" style={{textDecoration: "none"}}>
          Cambiar la contraseña 
        </Link>  
      </button>
    </div>
    
   </>
  )
}

export default CuentaPage