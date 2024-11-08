import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Carrito = ({ productos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Calcular el total de productos y el monto total
  const totalProductos = productos.reduce((acc, producto) => acc + producto.cantidad, 0);
  const montoTotal = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

  const toggleCarrito = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCarrito} style={{ cursor: 'pointer' }}>
        <span role="img" aria-label="Carrito">🛒</span> Carrito ({totalProductos})
      </div>
      {isOpen && (
        <div className="mt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>${producto.precio.toFixed(2)}</td>
                  <td>${(producto.precio * producto.cantidad).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-right font-weight-bold">Total</td>
                <td>${montoTotal.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <button
            className="btn btn-primary mt-2"
            onClick={() => navigate('/PagoPage')}
          >
            Pagar
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
