import React, { useState } from 'react';

const EntradaDatos = ({ label, tipo, valor, setValor, placeholder }) => {
    const [error, setError] = useState('');

    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const valueOnChange = (evt) => {
        const nuevoValor = evt.target.value;
        setValor(nuevoValor);

        if (tipo === 'email') {
            if (!validarEmail(nuevoValor)) {
                setError('El formato del email no es válido.');
            } else {
                setError('');
            }
        } else {
            setError('');
        }
    };

    return (
        <>
            <div className="mb-3">
                <label className="form-label">
                    {label}
                </label>
                <input
                    type={tipo}
                    className="form-control"
                    placeholder={placeholder}
                    onChange={valueOnChange}
                    value={valor}
                    required
                />
                {error && <div className="text-danger mt-2">{error}</div>}
            </div>
        </>
    );
};

export default EntradaDatos;
