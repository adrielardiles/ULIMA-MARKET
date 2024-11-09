import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductoCarrito from './ProductoCarrito'; // Componente para mostrar cada producto
import { useAuth } from '../context/AuthContext'; // Importar el contexto de autenticación

const Carrito = ({ productosIniciales = [] }) => {
  const [productos, setProductos] = useState(productosIniciales);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const navigate = useNavigate();
  const { usuario } = useAuth(); // Obtener el estado del usuario del contexto de autenticación

  // Calcular subtotal
  const subtotal = productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

  // Manejar eliminación de un producto individual
  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  // Manejar eliminación de todos los productos
  const eliminarTodosLosProductos = () => {
    setProductos([]);
  };

  // Manejar la finalización del pedido
  const manejarFinalizarPedido = () => {
    setMostrarCarrito(false);
    if (!usuario) {
      // Si no hay usuario autenticado, redirige a /login
      navigate('/login');
    } else {
      // Si hay usuario autenticado, redirige a /pagarTotal
      navigate('/pagarTotal');
    }
  };

  return (
    <>
      {/* Botón para mostrar el carrito */}
      <div style={{ cursor: 'pointer' }} onClick={() => setMostrarCarrito(true)}>
        🛒 Carrito ({productos.length})
      </div>

      {/* Barra lateral de carrito */}
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
        {/* Botón de cerrar */}
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

        {/* Productos en el carrito */}
        {productos.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          productos.map((producto) => (
            <ProductoCarrito
              key={producto.id}
              producto={producto}
              eliminarProducto={eliminarProducto}
            />
          ))
        )}

        <hr />

        {/* Botón para eliminar todos los productos */}
        {productos.length > 0 && (
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
            onClick={eliminarTodosLosProductos}
          >
            Eliminar Todos
          </button>
        )}

        {/* Subtotal y botón para finalizar el pedido */}
        <div>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Subtotal:</span>
            <span>S/ {subtotal.toFixed(2)}</span>
          </p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Total:</span>
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
  );
};

export default Carrito;
