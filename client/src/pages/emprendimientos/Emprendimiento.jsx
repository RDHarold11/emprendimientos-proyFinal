import React, { useState } from 'react';
import '../productos/Producto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useCreateEmprendimientoMutation, useGetEmprendimientosQuery } from '../../slices/emprendimientosApiSlice';
import { toast } from 'sonner';
import { useDispatch, useSelector } from "react-redux";
import Emprendimiento from '../../components/Emprendimiento';

const Emprendimientos = () => {
  const [createEmprendimiento] = useCreateEmprendimientoMutation();
  const { data: emprendimientos, isLoading, error, refetch } = useGetEmprendimientosQuery();

  console.log(emprendimientos);
  console.log(error);

  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateEmprendimiento = async () => {
    try {
      await createEmprendimiento();
      toast.success("Publicaste un Emprendimiento!");
      refetch();  // Refetch Emprendimientos after creating a new one
    } catch (err) {
      toast.error(err.message);
    }
  };

  let userId=0;
  const { userInfo: user } = useSelector((state) => state.auth);

if (user && user._id) {
 userId = user._id;
  console.log('ID del usuario:', userId);
} else {
  console.log('No se pudo obtener el ID del usuario.');
}

  let filteredEmprendimientos = [];
let filteredEmprendimientosByUser = [];

if (emprendimientos) {
  // Filtrar por usuario
  filteredEmprendimientosByUser = emprendimientos.filter(emprendimiento => emprendimiento.user === userId);

  // Si hay un término de búsqueda, aplicar filtro adicional por nombre
  if (searchTerm) {
    filteredEmprendimientos = filteredEmprendimientosByUser.filter(emprendimiento =>
      emprendimiento.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    // Si no hay término de búsqueda, mostrar todos los Emprendimientoos del usuario
    filteredEmprendimientos = filteredEmprendimientosByUser;
  }
}

// filteredEmprendimientos ahora contendrá los Emprendimientoos filtrados por usuario y, si se proporciona, por nombre


  return (
    <div className="product-section">
      <div className="container">
        <div className="text-center mt-2">
          <button className="btn btn-primary" onClick={handleCreateEmprendimiento}>
            Crear Emprendimiento
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
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
            <br></br>
          <br></br>
          <br></br>
          </div>
        </div>
        <div className="row">
          {isLoading ? (
            <p>Loading Emprendimientos...</p>
          ) : error ? (
            <p>Error fetching Emprendimientos: {error.message}</p>
          ) : (
            filteredEmprendimientos.map((emprendimiento) => (
              <div key={emprendimiento.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <Emprendimiento
                  id={emprendimiento.id}
                  titulo={emprendimiento.title}
                  image={emprendimiento.image}
                  description={emprendimiento.description}
                  rating={emprendimiento. numReviews}
             
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Emprendimientos;
