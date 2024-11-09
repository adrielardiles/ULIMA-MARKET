import React from 'react';

const ProductoCarrito = ({ producto, eliminarProducto }) => {
  return (
    <div style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '10px' }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ margin: '0', fontWeight: 'bold' }}>{producto.nombre}</p>
          <p style={{ margin: '0', color: '#666' }}>S/ {producto.precio.toFixed(2)}</p>
        </div>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'red',
            fontSize: '16px'
          }}
          onClick={() => eliminarProducto(producto.id)}
        >
          &times;
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
        <button>-</button> {/* Botón para decrementar cantidad */}
        <span>{producto.cantidad}</span>
        <button>+</button> {/* Botón para incrementar cantidad */}
      </div>
    </div>
  );
};

export default ProductoCarrito;
