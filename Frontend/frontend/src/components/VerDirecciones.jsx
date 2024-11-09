import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerMetodosPago from './VerMetodosPago';
import VerDirecciones from './VerDirecciones';

const PagarTotal = () => {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);
  const [direccionSeleccionada, setDireccionSeleccionada] = useState(null);
  const [mostrarPopupMetodo, setMostrarPopupMetodo] = useState(false);
  const [mostrarPopupDireccion, setMostrarPopupDireccion] = useState(false);
  const [metodoDetalle, setMetodoDetalle] = useState(null);
  const [direccionDetalle, setDireccionDetalle] = useState(null);
  const navigate = useNavigate();

  // Arrays de ejemplo
  const metodosPago = [
    { id: 1, tipo: 'Tarjeta de Crédito', numero: '**** 1234', titular: 'Juan Pérez', fechaVencimiento: '12/24', banco: 'Banco 1' },
    { id: 2, tipo: 'PayPal', numero: 'usuario@example.com', titular: 'María Gómez', fechaVencimiento: 'N/A', banco: 'PayPal' }
  ];

  const direcciones = [
    { id: 1, pais: 'Perú', departamento: 'Lima', provincia: 'Lima', distrito: 'Miraflores', calle: 'Av. Larco', numero: '123', informacionAdicional: 'Apt. 202', destinatario: 'Juan Pérez' },
    { id: 2, pais: 'Perú', departamento: 'Cusco', provincia: 'Cusco', distrito: 'Centro', calle: 'Calle Real', numero: '456', informacionAdicional: '', destinatario: 'Ana García' }
  ];

  const handlePagar = () => {
    if (metodoSeleccionado && direccionSeleccionada) {
      alert('Pago confirmado. Redirigiendo al menú principal.');
      navigate('/');
    }
  };

  const mostrarDetalleMetodo = (metodo) => {
    setMetodoDetalle(metodo);
    setMostrarPopupMetodo(true);
  };

  const mostrarDetalleDireccion = (direccion) => {
    setDireccionDetalle(direccion);
    setMostrarPopupDireccion(true);
  };

  return (
    <div style={{ marginTop: '50px', marginBottom: '50px', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Total a Pagar: S/ 123.45</h2>

      {/* Sección de Métodos de Pago */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <div style={{ width: '45%', marginRight: '20px' }}>
          <h4 style={{ textAlign: 'center' }}>Métodos de Pago</h4>
          {metodosPago.map(metodo => (
            <div
              key={metodo.id}
              onClick={() => setMetodoSeleccionado(metodo.id)}
              style={{
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: metodoSeleccionado === metodo.id ? '#FFD580' : '#FFF'
              }}
            >
              <p><strong>{metodo.tipo}</strong></p>
              <p>{metodo.numero}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Evitar selección accidental
                  mostrarDetalleMetodo(metodo);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'blue',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Ver Detalles
              </button>
            </div>
          ))}
        </div>

        {/* Sección de Direcciones */}
        <div style={{ width: '45%' }}>
          <h4 style={{ textAlign: 'center' }}>Direcciones</h4>
          {direcciones.map(direccion => (
            <div
              key={direccion.id}
              onClick={() => setDireccionSeleccionada(direccion.id)}
              style={{
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: direccionSeleccionada === direccion.id ? '#FFD580' : '#FFF'
              }}
            >
              <p><strong>{direccion.calle}</strong></p>
              <p>{direccion.distrito}, {direccion.provincia}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Evitar selección accidental
                  mostrarDetalleDireccion(direccion);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'blue',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Botón de Pagar */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={handlePagar}
          disabled={!metodoSeleccionado || !direccionSeleccionada}
          style={{
            padding: '15px 30px',
            backgroundColor: !metodoSeleccionado || !direccionSeleccionada ? '#ccc' : '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: !metodoSeleccionado || !direccionSeleccionada ? 'not-allowed' : 'pointer'
          }}
        >
          Pagar
        </button>
      </div>

      {/* Popup de Detalles de Método de Pago */}
      {mostrarPopupMetodo && metodoDetalle && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '5px',
              width: '90%',
              maxWidth: '400px',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setMostrarPopupMetodo(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <h4>Detalles del Método de Pago</h4>
            <p><strong>Tipo:</strong> {metodoDetalle.tipo}</p>
            <p><strong>Número:</strong> {metodoDetalle.numero}</p>
            <p><strong>Titular:</strong> {metodoDetalle.titular}</p>
            <p><strong>Fecha de Vencimiento:</strong> {metodoDetalle.fechaVencimiento}</p>
            <p><strong>Banco:</strong> {metodoDetalle.banco}</p>
          </div>
        </div>
      )}

      {/* Popup de Detalles de Dirección */}
      {mostrarPopupDireccion && direccionDetalle && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '5px',
              width: '90%',
              maxWidth: '400px',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setMostrarPopupDireccion(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <h4>Detalles de la Dirección</h4>
            <p><strong>País:</strong> {direccionDetalle.pais}</p>
            <p><strong>Departamento:</strong> {direccionDetalle.departamento}</p>
            <p><strong>Provincia:</strong> {direccionDetalle.provincia}</p>
            <p><strong>Distrito:</strong> {direccionDetalle.distrito}</p>
            <p><strong>Calle:</strong> {direccionDetalle.calle}</p>
            <p><strong>Número:</strong> {direccionDetalle.numero}</p>
            <p><strong>Información Adicional:</strong> {direccionDetalle.informacionAdicional}</p>
            <p><strong>Destinatario:</strong> {direccionDetalle.destinatario}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PagarTotal;
