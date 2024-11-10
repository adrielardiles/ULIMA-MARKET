import React from 'react';

const ProductoCarrito = ({ producto, eliminarProducto }) => {
  // Manejo seguro de las propiedades del producto
  const precio = producto?.precio ?? 0; // Si precio es undefined, usa 0
  const nombre = producto?.nombre ?? 'Producto Desconocido';
  const cantidad = producto?.cantidad ?? 1;
  const imagen = producto?.imagen ?? 'https://via.placeholder.com/150'; // URL de imagen predeterminada

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={imagen}
          alt={nombre}
          style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
        />
        <div>
          <h5 style={{ margin: '0 0 5px' }}>{nombre}</h5>
          <p style={{ margin: 0 }}>
            S/ {precio.toFixed(2)} x {cantidad} = S/ {(precio * cantidad).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={() => eliminarProducto(producto.id)}
        style={{
          background: 'red',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default ProductoCarrito;
