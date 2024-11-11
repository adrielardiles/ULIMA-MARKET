
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductoCarrito from './ProductoCarrito'; 
import { useCarrito } from '../context/CarritoContext'; 
import { useAuth } from '../context/AuthContext'; 

const Carrito = () => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const { productosCarrito, eliminarProducto, vaciarCarrito } = useCarrito(); 
  const { usuario } = useAuth(); 
  const navigate = useNavigate();


  const subtotal = productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);


  const manejarFinalizarPedido = () => {
    setMostrarCarrito(false);
    if (usuario) {
      navigate('/pagarTotal'); 
    } else {
      navigate('/login'); 
    }
  };

  return <>

      <div style={{ cursor: 'pointer' }} onClick={() => setMostrarCarrito(true)}>
        🛒 Carrito ({productosCarrito.reduce((total, producto) => total + producto.cantidad, 0)})
      </div>


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
