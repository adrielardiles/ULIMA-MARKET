import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Carrito from './Carrito'; // Suponiendo que Carrito es un componente
import Categorias from './Categorias'; // Suponiendo que Categorias es un componente
import MenuUsuario from './MenuUsuario'; // Importa el nuevo componente MenuUsuario

const Header = () => {
  const navigate = useNavigate();

  // Datos de productos simulados para mostrar en el carrito
  const productos = [
    { id: 1, nombre: 'Producto 1', cantidad: 2, precio: 10.0 },
    { id: 2, nombre: 'Producto 2', cantidad: 1, precio: 20.0 },
  ];

  // Simulación del estado del usuario (puede ser reemplazado por un hook de autenticación)
  const usuario = null; // Cambia a un objeto { nombre: 'Adriel' } si el usuario está logueado

  return (
    <div className="header pt-3 border-bottom" style={{ backgroundColor: '#F8E8CB' }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo y Nombre con Navegación */}
        <div
          className="logo-section d-flex align-items-center"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <img src={`${process.env.PUBLIC_URL}/imagenes/shopcar.png`} alt="Carrito" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          <h5 style={{ color: '#CE4500' }}>ULIMARKET</h5>
        </div>

        {/* Barra de Búsqueda */}
        <div className="search-section d-flex align-items-center position-relative" style={{ width: '500px' }}>
          <input
            type="text"
            placeholder="¡Hola, ¿Qué estás buscando ?"
            className="form-control"
            style={{ paddingRight: '40px' }}
          />
          <span
            className="position-absolute"
            style={{
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#666',
            }}
          >
            🔍
          </span>
        </div>

        {/* Secciones de Navegación e Iconos */}
        <div className="icons-section d-flex align-items-center">
          {/* Navegación a Pedidos */}
          <div
            className="mx-3"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/pedidos')}
          >
            <span role="img" aria-label="Pedidos">📝</span> pedidos
          </div>

          {/* Componente Carrito con productos */}
          <div className="mx-3">
            <Carrito productos={productos} />
          </div>

          {/* Menú de Usuario */}
          <MenuUsuario usuario={usuario} />
        </div>
      </div>
      <Categorias />
    </div>
  );
};

export default Header;
