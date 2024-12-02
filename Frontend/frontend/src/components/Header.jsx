import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Carrito from './Carrito'; 
import Categorias from './Categorias';
import { useAuth } from '../context/AuthContext'; 

const Header = () => {
  const navigate = useNavigate();
  const { usuario, cerrarSesion } = useAuth();
  const [mostrarMenuUsuario, setMostrarMenuUsuario] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const manejarBusqueda = () => {
    if (terminoBusqueda.trim() === '') return;

    const categoriasRelacionadas = [
      { id: 'Frutas y Verduras', nombre: 'Frutas y Verduras', palabrasClave: ['manzana', 'banana', 'tomate', 'verdura', 'fruta'] },
      { id: 'Carnes y Aves', nombre: 'Carnes y Aves', palabrasClave: ['pollo', 'res', 'carne', 'ave', 'cerdo'] },
      { id: 'Lácteos y Huevos', nombre: 'Lácteos y Huevos', palabrasClave: ['leche', 'yogurt', 'queso', 'huevo'] },
      { id: 'Bebidas', nombre: 'Bebidas', palabrasClave: ['jugo', 'agua', 'refresco', 'bebida'] },
      { id: 'Snacks y Dulces', nombre: 'Snacks y Dulces', palabrasClave: ['chocolate', 'galleta', 'snack', 'dulce'] },
    ];

    const categoriaEncontrada = categoriasRelacionadas.find(categoria =>
      categoria.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      categoria.palabrasClave.some(palabra => palabra.toLowerCase().includes(terminoBusqueda.toLowerCase()))
    );

    if (categoriaEncontrada) {
      navigate(`/mostrarTodo/${encodeURIComponent(categoriaEncontrada.id)}`);
    } else {
      navigate(`/mostrarTodo/${encodeURIComponent('No Encontrado')}`);
    }
  };

  const manejarNavegacionPedidos = () => {
    if (usuario) {
      navigate('/perfil');
    } else {
      navigate('/login');
    }
  };

  const manejarToggleMenuUsuario = () => {
    setMostrarMenuUsuario(!mostrarMenuUsuario);
  };

  const manejarCerrarSesion = () => {
    cerrarSesion();
    setMostrarMenuUsuario(false);
    navigate('/');
  };

  return (
    <div>
      <div style={{ backgroundColor: '#474747', height: '30px', width: '100%' }}></div>

      <div className="header pt-3 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">

          <div
            className="logo-section d-flex align-items-center"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <img src={`${process.env.PUBLIC_URL}/imagenes/shopcar.png`} alt="Carrito" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            <h5 style={{ color: '#CE4500' }}>ULIMARKET</h5>
          </div>

          <div className="search-section d-flex align-items-center position-relative" style={{ width: '500px' }}>
            <input
              type="text"
              placeholder="¡Hola, ¿Qué estás buscando?"
              className="form-control"
              style={{ paddingRight: '40px' }}
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
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
              onClick={manejarBusqueda}
            >
              🔍
            </span>
          </div>

          <div className="icons-section d-flex align-items-center">
            <div
              className="mx-3"
              style={{ cursor: 'pointer' }}
              onClick={manejarNavegacionPedidos}
            >
              <span role="img">📝</span> Perfil
            </div>

            <div className="mx-3">
              <Carrito productos={[]} />
            </div>

            {usuario?.isAdmin && (
              <div
                className="mx-3"
                style={{ cursor: 'pointer', color: '#000000' }}
                onClick={() => navigate('/admin-dashboard')}
              >
                Admin
              </div>
            )}

            {usuario ? (
              <div
                style={{ position: 'relative', cursor: 'pointer' }}
                onClick={manejarToggleMenuUsuario}
              >
                {usuario.nombre}
                {mostrarMenuUsuario && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      background: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      zIndex: 1000,
                    }}
                  >
                    <button
                      onClick={manejarCerrarSesion}
                      className="bg-none border-none cursor-pointer w-full text-center px-5 py-2"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                Iniciar Sesión
              </div>
            )}
          </div>
        </div>
        <Categorias />
      </div>
    </div>
  );
};

export default Header;
