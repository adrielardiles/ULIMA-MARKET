import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Carrito from './Carrito'; // Supuesto componente Carrito
import Categorias from './Categorias'; // Supuesto componente Categorias
import MenuUsuario from './MenuUsuario'; // Supuesto componente MenuUsuario

const Header = () => {
  const navigate = useNavigate();
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  // Simulación de categorías disponibles (puedes modificar según tu estructura)
  const categoriasDisponibles = [
    { id: 'frutas-verduras', nombre: 'Frutas y Verduras' },
    { id: 'carnes-aves', nombre: 'Carnes y Aves' },
    { id: 'lacteos-huevos', nombre: 'Lácteos y Huevos' },
    { id: 'bebidas', nombre: 'Bebidas' },
    { id: 'snacks-dulces', nombre: 'Snacks y Dulces' },
  ];

  const manejarBusqueda = () => {
    if (terminoBusqueda.trim() === '') return; // Si la búsqueda está vacía, no hacemos nada
  
    // Índice de palabras clave relacionadas con cada categoría
    const categoriasRelacionadas = [
      { id: 'Frutas y Verduras', nombre: 'Frutas y Verduras', palabrasClave: ['manzana', 'banana', 'tomate', 'verdura', 'fruta'] },
      { id: 'Carnes y Aves', nombre: 'Carnes y Aves', palabrasClave: ['pollo', 'res', 'carne', 'ave', 'cerdo'] },
      { id: 'Lácteos y Huevos', nombre: 'Lácteos y Huevos', palabrasClave: ['leche', 'yogurt', 'queso', 'huevo'] },
      { id: 'Bebidas', nombre: 'Bebidas', palabrasClave: ['jugo', 'agua', 'refresco', 'bebida'] },
      { id: 'Snacks y Dulces', nombre: 'Snacks y Dulces', palabrasClave: ['chocolate', 'galleta', 'snack', 'dulce'] },
    ];
  
    // Encuentra la categoría con la mayor concordancia según el término de búsqueda
    const categoriaEncontrada = categoriasRelacionadas.find(categoria =>
      categoria.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      categoria.palabrasClave.some(palabra => palabra.toLowerCase().includes(terminoBusqueda.toLowerCase()))
    );
  
    if (categoriaEncontrada) {
      // Redirige usando encodeURIComponent para codificar la URL de manera segura
      navigate(`/mostrarTodo/${encodeURIComponent(categoriaEncontrada.id)}`);
    } else {
      // Redirige a una categoría "No encontrado"
      navigate(`/mostrarTodo/${encodeURIComponent('No Encontrado')}`);
    }
  };
  
  
  

  return (
    <div>
      {/* Rectángulo negro en la parte superior */}
      <div style={{ backgroundColor: '#474747', height: '30px', width: '100%' }}></div>

      <div className="header pt-3 border-bottom">
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
              <Carrito productos={[]} /> {/* Supón que el carrito tiene productos simulados */}
            </div>

            {/* Menú de Usuario */}
            <MenuUsuario usuario={null} /> {/* Cambia el usuario según tu lógica */}
          </div>
        </div>
        <Categorias />
      </div>
    </div>
  );
};

export default Header;
