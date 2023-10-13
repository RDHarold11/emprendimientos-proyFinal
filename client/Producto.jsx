import React from 'react';
import "./Producto.css";

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

  return (
    <div className="product-section">
      <div className="container">
        <div className="text-center mt-2">
          <button className="btn btn-primary">Crear Producto</button>
        </div>
        <div className="row">
          {productos.map((producto) => (
            <div key={producto.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/home">
                <img src={producto.image} className="img-fluid product-thumbnail" alt={producto.name} />
                <h3 className="product-title">
                  <strong>{producto.name}</strong>
                </h3>
                <p>{producto.description}</p>
                <p className="product-price">Precio: ${producto.price}</p> {/* Added a CSS class for price */}
                <p>Cantidad en stock: {producto.stock}</p>
                <span className="icon-cross">
                  <img src="/cross.svg" className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;