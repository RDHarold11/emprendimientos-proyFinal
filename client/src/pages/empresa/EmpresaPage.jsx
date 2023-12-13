import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoCheckmarkCircle } from 'react-icons/io5';
import {
  useGetUsersQuery,
} from "../../slices/usersApiSlice";

const EmpresaPage = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>Error al cargar usuarios: {error.message}</p>;
  }

  // Filtra usuarios por nombre y cuenta empresa
  const filteredEmpresas = users.filter((user) =>
    user.isEmpresa &&
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="empresa-page">
    <h2>Usuarios Empresas</h2>
    <div className="filter-container">
      <input
        type="text"
        className="filter-input"
        placeholder="Filtrar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
      <div className="user-cards-container">
        {filteredEmpresas.map((user) => (
          <div key={user.id} className="user-card">
            <img
              className="profile-image"
              src={user.image ? user.image : '/icono.jpg'}
              alt="User"
            />
            <div className="user-details">
              <h4 className="user-name">
                {user.name} {user.lastName}
              </h4>
              <h5 className="user-email">{user.email}</h5>
              <p className="user-account-type">Cuenta Empresa</p>
              {user.isEmpresa && (
                <div className="verify">
                  <IoCheckmarkCircle color="green" size={40} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpresaPage;
