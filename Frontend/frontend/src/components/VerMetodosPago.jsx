import React, { useState } from 'react';

const VerMetodosPago = ({ metodos, eliminarMetodo }) => {
    const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);

    return (
        <div>
            <div className="row">
                {metodos.map((metodo) => (
                    <div key={metodo.id} className="col-md-6 mb-4">
                        <div className={`card ${metodoSeleccionado === metodo.id ? 'bg-light' : ''}`}>
                            <div className="card-body">
                                <h5 className="card-title">Método N° {metodo.id}</h5>
                                <p>{metodo.tipo}, {metodo.banco}</p>
                                <button className="btn btn-outline-dark btn-sm" onClick={() => setMetodoSeleccionado(metodo.id)}>
                                    +
                                </button>
                                {metodoSeleccionado === metodo.id && (
                                    <div className="mt-3">
                                        <p><strong>Tipo:</strong> {metodo.tipo}</p>
                                        <p><strong>Número:</strong> {metodo.numero}</p>
                                        <p><strong>Titular:</strong> {metodo.titular}</p>
                                        <p><strong>Fecha de Vencimiento:</strong> {metodo.fechaVencimiento}</p>
                                        <p><strong>Banco:</strong> {metodo.banco}</p>
                                        <button className="btn btn-danger mt-2" onClick={() => eliminarMetodo(metodo.id)}>
                                            Eliminar Método de Pago
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerMetodosPago;
