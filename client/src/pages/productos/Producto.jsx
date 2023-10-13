import React, { useState } from 'react';
import './Producto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Productos = () => {

  const productos = [
    {
      id: 1,
      name: 'Cocina Gourmet',
      image: '/comida.png',
      category: 'Alimentos',
      description: 'Aprende a cocinar platos gourmet con otros emprendedores.',
      price: 20,  // Precio del producto
      stock: 10,   // Cantidad en stock
    },
    {
      id: 2,
      name: 'Tu Propio Super Mercado',
      image: '/carrito.png',
      category: 'Negocios',
      description: 'Crea tu propio supermercado desde cero y aumenta tus posibilidades de éxito.',
      price: 30,
      stock: 5,
    },
    {
      id: 3,
      name: 'Desarrollo de Sitios Web',
      image: '/web.png',
      category: 'Tecnología',
      description: 'Aprende a desarrollar sitios web desde cero y ayuda a otros con sus proyectos.',
      price: 25,
      stock: 8,
    },
    {
      id: 4,
      name: 'Desarrollo de Sitios Web',
      image: '/web.png',
      category: 'Tecnología',
      description: 'Aprende a desarrollar sitios web desde cero y ayuda a otros con sus proyectos.',
      price: 25,
      stock: 8,
    },
    {
      id: 5,
      name: 'Desarrollo de Sitios Web',
      image: '/web.png',
      category: 'Tecnología',
      description: 'Aprende a desarrollar sitios web desde cero y ayuda a otros con sus proyectos.',
      price: 25,
      stock: 8,
    },
    {
      id: 6,
      name: 'Desarrollo de Sitios Web',
      image: '/web.png',
      category: 'Tecnología',
      description: 'Aprende a desarrollar sitios web desde cero y ayuda a otros con sus proyectos.',
      price: 25,
      stock: 8,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredProductos = productos.filter((producto) =>
  producto.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div className="product-section">
    <div className="container">
      <div className="text-center mt-2">
        <a className="btn btn-primary" href="/crearProducto">Crear Producto</a>
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
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <div className="product-item">
              <img src={producto.image} className="img-fluid product-thumbnail" alt={producto.name} />
              <h3 className="product-title">
                <strong>{producto.name}</strong>
              </h3>
              <p>{producto.description}</p>
              <p className="product-price">Precio: ${producto.price}</p>
              <p>Cantidad en stock: {producto.stock}</p>
              <div className="product-buttons">
                <button className="btn btn-secondary">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </div>
              <span className="icon-cross">
                <img src="/cross.svg" className="img-fluid" alt="Cross Icon" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Productos;