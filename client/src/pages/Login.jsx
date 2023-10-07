import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import "./Login.css"
import { Link } from 'react-router-dom';
import img1 from '/icono.jpg'

async function Login(email, password, history) {
  try {
   const response = await axios.post('mongodb://localhost:27017/', {
      email: email,
      password: password,
    });

    if (response.data === "exist") {
      history("/Home");
    } else if (response.data === "no") {
      alert("Usuario no encontrado");
    }
  } catch (error) {
    alert("Error al iniciar sesión");
    console.error('Error al enviar la solicitud:', error);
  }
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the Login function with email, password, and history
    await Login(email, password, history);
  };

  return (
    <div class="container">
      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex justify-content-center py-4">
                <a href="/home" class="logo d-flex align-items-center w-auto">
                  <img src= {img1} alt=""/>
                  <span class="d-none d-lg-block">Catalyst</span>
                  </a>
                  </div>
    <div class="card mb-3">
    <div class="card-body">
      <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4"><strong>Inicia Sesión con tu Cuenta</strong></h5>
                    <p class="text-center small">Introduzca su Correo y Contraseña para Inicar Sesión</p>
                  </div>
      <form class="row g-3 needs-validation" onSubmit={handleSubmit}>
        <div class="col-12">
          <label class="form-label" htmlFor="email">Email:</label>
          <div class="input-group has-validation">
          <input class="form-control"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
        </div>
        <div class="col-12">
          <label class="form-label" htmlFor="password">Contraseña:</label>
          <div class="input-group has-validation">
          <input class="form-control"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
        </div>
        <div class="col-12">
        <button class="btn btn-primary w-100" type="submit">Iniciar sesión</button>
        </div>
        
      </form>
      <div class="col-12">
        <button class="btn btn-primary w-100"><Link to="/registro" class = "link" >Registrate</Link></button>
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
    </section>
    </div>
  );
}

export default LoginForm;
