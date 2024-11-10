import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaSeleccionable from '../components/ListaSeleccionable';
import VerDetallesPopup from '../components/VerDetallesPopUp';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCarrito } from '../context/CarritoContext'; // Importa el contexto del carrito

const PagarTotal = () => {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);
  const [direccionSeleccionada, setDireccionSeleccionada] = useState(null);
  const [mostrarPopupMetodo, setMostrarPopupMetodo] = useState(false);
  const [mostrarPopupDireccion, setMostrarPopupDireccion] = useState(false);
  const [metodoDetalle, setMetodoDetalle] = useState(null);
  const [direccionDetalle, setDireccionDetalle] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();

  const { productosCarrito, vaciarCarrito } = useCarrito(); 
  const total = productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);


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
      setMostrarModal(true); 
    }
  };

  const confirmarPago = () => {
    setMostrarModal(false);
    vaciarCarrito(); 
    navigate('/'); 
  };

  return <>
    <>
      <Header />

      <div style={{ marginTop: '50px', marginBottom: '50px', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Total a Pagar: S/ {total.toFixed(2)}</h2>


        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <ListaSeleccionable
            titulo="Métodos de Pago"
            elementos={metodosPago}
            elementoSeleccionado={metodoSeleccionado}
            setElementoSeleccionado={setMetodoSeleccionado}
            mostrarDetalle={(metodo) => {
              setMetodoDetalle(metodo);
              setMostrarPopupMetodo(true);
            }}
          />

          <ListaSeleccionable
            titulo="Direcciones"
            elementos={direcciones}
            elementoSeleccionado={direccionSeleccionada}
            setElementoSeleccionado={setDireccionSeleccionada}
            mostrarDetalle={(direccion) => {
              setDireccionDetalle(direccion);
              setMostrarPopupDireccion(true);
            }}
          />
        </div>


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


        <div className={`modal fade ${mostrarModal ? 'show' : ''}`} style={{ display: mostrarModal ? 'block' : 'none' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmación de Pago</h5>
                <button type="button" className="btn-close" onClick={() => setMostrarModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>¿Está seguro de que desea realizar el pago?</p>
                <p>El pedido se recibirá en 72 horas y tiene un máximo de 24 horas para cancelarlo.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setMostrarModal(false)}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={confirmarPago}>Confirmar</button>
              </div>
            </div>
          </div>
        </div>

        {mostrarPopupMetodo && metodoDetalle && (
          <VerDetallesPopup
            titulo="Detalles del Método de Pago"
            detalle={metodoDetalle}
            campos={[
              { etiqueta: 'Tipo', valor: metodoDetalle.tipo },
              { etiqueta: 'Número', valor: metodoDetalle.numero },
              { etiqueta: 'Titular', valor: metodoDetalle.titular },
              { etiqueta: 'Fecha de Vencimiento', valor: metodoDetalle.fechaVencimiento },
              { etiqueta: 'Banco', valor: metodoDetalle.banco }
            ]}
            cerrarPopup={() => setMostrarPopupMetodo(false)}
          />
        )}

        {mostrarPopupDireccion && direccionDetalle && (
          <VerDetallesPopup
            titulo="Detalles de la Dirección"
            detalle={direccionDetalle}
            campos={[
              { etiqueta: 'País', valor: direccionDetalle.pais },
              { etiqueta: 'Departamento', valor: direccionDetalle.departamento },
              { etiqueta: 'Provincia', valor: direccionDetalle.provincia },
              { etiqueta: 'Distrito', valor: direccionDetalle.distrito },
              { etiqueta: 'Calle', valor: direccionDetalle.calle },
              { etiqueta: 'Número', valor: direccionDetalle.numero },
              { etiqueta: 'Información Adicional', valor: direccionDetalle.informacionAdicional },
              { etiqueta: 'Destinatario', valor: direccionDetalle.destinatario }
            ]}
            cerrarPopup={() => setMostrarPopupDireccion(false)}
          />
        )}
      </div>
      <Footer />
    </>
  </>
};

export default PagarTotal;
