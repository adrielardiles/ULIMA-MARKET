// src/components/Carrito.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductoCarrito from './ProductoCarrito'; // Componente para mostrar cada producto
import { useCarrito } from '../context/CarritoContext'; // Importar el contexto del carrito
import { useAuth } from '../context/AuthContext'; // Importar el contexto de autenticación

const Carrito = () => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const { productosCarrito, eliminarProducto, vaciarCarrito } = useCarrito(); // Obtener estado y funciones del contexto del carrito
  const { usuario } = useAuth(); // Obtener el usuario autenticado del contexto de autenticación
  const navigate = useNavigate();

  // Calcular el subtotal de los productos en el carrito
  const subtotal = productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

  // Manejar la redirección de finalizar pedido
  const manejarFinalizarPedido = () => {
    setMostrarCarrito(false);
    if (usuario) {
      navigate('/pagarTotal'); // Redirigir a la página de pago si el usuario está autenticado
    } else {
      navigate('/login'); // Redirigir a la página de inicio de sesión si el usuario no está autenticado
    }
  };

  return <>
      {/* Botón para mostrar el carrito */}
      <div style={{ cursor: 'pointer' }} onClick={() => setMostrarCarrito(true)}>
        🛒 Carrito ({productosCarrito.reduce((total, producto) => total + producto.cantidad, 0)})
      </div>

      {/* Barra lateral del carrito */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: mostrarCarrito ? 0 : '-100%',
          width: '300px',
          height: '100%',
          backgroundColor: '#fff',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.3)',
          transition: 'right 0.3s ease',
          zIndex: 1000,
          padding: '20px',
          overflowY: 'auto'
        }}
      >
        {/* Encabezado del carrito */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4>Productos Agregados</h4>
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer'
            }}
            onClick={() => setMostrarCarrito(false)}
          >
            &times;
          </button>
        </div>

        <hr />

        {/* Lista de productos en el carrito */}
        {productosCarrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          productosCarrito.map((producto) => (
            <ProductoCarrito
              key={producto.id}
              producto={producto}
              eliminarProducto={eliminarProducto}
            />
          ))
        )}

        <hr />

        {/* Botón para eliminar todos los productos */}
        {productosCarrito.length > 0 && (
          <button
            style={{
              background: 'red',
              color: '#fff',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
              width: '100%',
              marginBottom: '10px',
              borderRadius: '5px'
            }}
            onClick={vaciarCarrito}
          >
            Eliminar Todos
          </button>
        )}

        {/* Sección de subtotal y botón de finalizar pedido */}
        <div>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Subtotal:</span>
            <span>S/ {subtotal.toFixed(2)}</span>
          </p>
          <button
            style={{
              background: '#28a745',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              width: '100%',
              borderRadius: '5px'
            }}
            onClick={manejarFinalizarPedido}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </>
  
};

export default Carrito;
