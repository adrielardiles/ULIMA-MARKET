import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PedidoItem = ({ pedido }) => {
    const [mostrar, setMostrar] = useState(false);
    const [estaCancelado, setEstaCancelado] = useState(false);

    const manejarMostrar = () => setMostrar(true);
    const manejarCerrar = () => setMostrar(false);
    const manejarCancelar = () => {
        setEstaCancelado(true);
    };

    return (
        <div
            className={`card mb-3 ${estaCancelado ? 'bg-light text-muted' : ''}`}
            style={{ width: '18rem' }}
        >
            <div className="card-body text-center">
                <h5 className="card-title">Pedido - {pedido.fecha}</h5>
                <p className="card-text">Monto: ${pedido.monto.toFixed(2)}</p>
                <button className="btn btn-outline-dark btn-sm" onClick={manejarMostrar}>
                    +
                </button>
            </div>

            {/* Modal para mostrar detalles del pedido */}
            <Modal show={mostrar} onHide={manejarCerrar}>
                <Modal.Header closeButton>
                    <Modal.Title>Pedido - {pedido.fecha}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Monto:</strong> ${pedido.monto.toFixed(2)}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedido.productos.map((producto, index) => (
                                <tr key={index}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>${(producto.cantidad * producto.precio).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="text-center">
                        <button
                            className="btn btn-outline-danger"
                            onClick={manejarCancelar}
                            disabled={estaCancelado} // Deshabilitar el botón si el pedido está cancelado
                        >
                            Cancelar Pedido
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Leyenda para pedidos cancelados */}
            {estaCancelado && (
                <p className="text-center text-muted mt-2">
                    Este pedido ha sido cancelado.
                </p>
            )}
        </div>
    );
};

export default PedidoItem;
