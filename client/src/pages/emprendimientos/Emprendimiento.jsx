import React, { useState } from 'react';
import './Emprendimiento.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Emprendimientos = () => {
  const emprendimientos = [
    {
      id: 1,
      name: 'Plataforma de Comida Saludable',
      image: '/comida.png',
      category: 'Alimentos',
      description: 'Crea una plataforma para pedidos de comida saludable a emprendedores locales.',
      price: 2000, // Costo estimado del proyecto
      requiredSkills: 'Desarrollo web, UX/UI design',
    },
    {
      id: 2,
      name: 'Marketplace de Productos Artesanales',
      image: '/carrito.png',
      category: 'Negocios',
      description: 'Desarrolla un marketplace para artesanos vender sus productos de forma digital.',
      price: 3000,
      requiredSkills: 'Desarrollo web, Marketing digital',
    },
    {
      id: 3,
      name: 'Plataforma de Cursos en Línea',
      image: '/web.png',
      category: 'Educación',
      description: 'Crea una plataforma de cursos en línea para emprendedores y profesionales.',
      price: 2500,
      requiredSkills: 'Desarrollo web, Contenido educativo',
    },
    {
      id: 4,
      name: 'Aplicación de Gestión de Proyectos',
      image: '/web.png',
      category: 'Tecnología',
      description: 'Desarrolla una aplicación para gestionar proyectos de emprendimiento de forma eficiente.',
      price: 2800,
      requiredSkills: 'Desarrollo de software, Gestión de proyectos',
    },
    {
      id: 5,
      name: 'Plataforma de Networking Empresarial',
      image: '/web.png',
      category: 'Negocios',
      description: 'Crea una plataforma que conecte a emprendedores y fomente el networking empresarial.',
      price: 2600,
      requiredSkills: 'Desarrollo web, Redes empresariales',
    },
    {
      id: 6,
      name: 'Aplicación de Gestión de Ventas',
      image: '/web.png',
      category: 'Negocios',
      description: 'Desarrolla una aplicación para gestionar ventas y clientes en emprendimientos.',
      price: 2700,
      requiredSkills: 'Desarrollo de software, Ventas',
    },
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProductos = emprendimientos.filter((producto) =>
  producto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-section">
    <div className="container">
      <div className="text-center mt-2">
        <button className="btn btn-primary">Publicar Emprendimiento</button>
        </div>
        <br></br>
        <br></br>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="input-group mb-3">
          
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
      </div>
        <div className="row">
        {filteredProductos.map((emprendimiento) => (
            <div key={emprendimiento.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href='/home'>
                <img src={emprendimiento.image} className="img-fluid product-thumbnail" alt={emprendimiento.name} />
                <h3 className="product-title">
                  <strong>{emprendimiento.name}</strong>
                </h3>
                <p>{emprendimiento.description}</p>
                <p className="product-price">Costo estimado: ${emprendimiento.price}</p>
                <p>Habilidades requeridas: {emprendimiento.requiredSkills}</p>
                </a>
                <div className="product-buttons">
                  <button className="btn btn-secondary">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </div>
                <span className="icon-cross">
                  <img src="/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
        
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emprendimientos;
