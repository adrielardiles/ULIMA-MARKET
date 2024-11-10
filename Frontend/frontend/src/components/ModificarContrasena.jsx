import React, { useState } from 'react';

const ModificarContrasena = ({ contrasena, actualizarContrasena }) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        const nuevaContrasena = e.target.nuevaContrasena.value;
        actualizarContrasena(nuevaContrasena);
        setMostrarFormulario(false);
    };

    return <>
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Contraseña</h5>
                {!mostrarFormulario ? (
                    <>
                        <p className="card-text">{'*'.repeat(contrasena.length)}</p>
                        <button className="btn btn-link text-danger p-0" onClick={() => setMostrarFormulario(true)}>
                            Modificar contraseña
                        </button>
                    </>
                ) : (
                    <form onSubmit={manejarEnvio}>
                        <div className="mb-3">
                            <label htmlFor="nuevaContrasena" className="form-label">Nueva Contraseña</label>
                            <input type="password" className="form-control" id="nuevaContrasena" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmarContrasena" className="form-label">Confirmar Contraseña</label>
                            <input type="password" className="form-control" id="confirmarContrasena" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        <button type="button" className="btn btn-link" onClick={() => setMostrarFormulario(false)}>
                            Cancelar
                        </button>
                    </form>
                )}
            </div>
        </div>
    </>
};

export default ModificarContrasena;
