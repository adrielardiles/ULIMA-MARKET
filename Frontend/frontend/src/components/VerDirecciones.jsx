import React, { useState } from 'react';

const VerDirecciones = ({ direcciones, eliminarDireccion }) => {
    const [direccionSeleccionada, setDireccionSeleccionada] = useState(null);

    return (
        <div>
            <div className="row">
                {direcciones.map((direccion) => (
                    <div key={direccion.id} className="col-md-6 mb-4">
                        <div className={`card ${direccionSeleccionada === direccion.id ? 'bg-light' : ''}`}>
                            <div className="card-body">
                                <h5 className="card-title">Dirección N° {direccion.id}</h5>
                                <p>{direccion.pais}, {direccion.departamento}, {direccion.provincia}, {direccion.distrito}</p>
                                <button className="btn btn-outline-dark btn-sm" onClick={() => setDireccionSeleccionada(direccion.id)}>
                                    +
                                </button>
                                {direccionSeleccionada === direccion.id && (
                                    <div className="mt-3">
                                        <p><strong>País:</strong> {direccion.pais}</p>
                                        <p><strong>Departamento:</strong> {direccion.departamento}</p>
                                        <p><strong>Provincia:</strong> {direccion.provincia}</p>
                                        <p><strong>Distrito:</strong> {direccion.distrito}</p>
                                        <p><strong>Calle:</strong> {direccion.calle}</p>
                                        <p><strong>Número:</strong> {direccion.numero}</p>
                                        <p><strong>Información Adicional:</strong> {direccion.informacionAdicional}</p>
                                        <p><strong>Destinatario:</strong> {direccion.destinatario}</p>
                                        <button className="btn btn-danger mt-2" onClick={() => eliminarDireccion(direccion.id)}>
                                            Eliminar Dirección
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

export default VerDirecciones;
