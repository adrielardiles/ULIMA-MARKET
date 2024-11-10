import React, { useState } from 'react';

const ModificarCorreo = ({ correo, actualizarCorreo }) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        const nuevoCorreo = e.target.nuevoCorreo.value;
        actualizarCorreo(nuevoCorreo);
        setMostrarFormulario(false);
    };

    return <>
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Correo Electrónico</h5>
                {!mostrarFormulario ? (
                    <>
                        <p className="card-text">{correo}</p>
                        <button className="btn btn-link text-danger p-0" onClick={() => setMostrarFormulario(true)}>
                            Modificar e-mail
                        </button>
                    </>
                ) : (
                    <form onSubmit={manejarEnvio}>
                        <div className="mb-3">
                            <label htmlFor="nuevoCorreo" className="form-label">Nuevo Correo Electrónico</label>
                            <input type="email" className="form-control" id="nuevoCorreo" required />
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

export default ModificarCorreo;
