import React, { useState } from 'react';

const EntradaDatos = ({ label, tipo, valor, setValor, placeholder, id, readOnly }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={tipo}
                className="form-control"
                id={id}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder={placeholder}
                readOnly={readOnly} 
            />
        </div>
    );
};

export default EntradaDatos;
