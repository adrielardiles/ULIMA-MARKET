import React from 'react';

const EntradaDatos = ({ label, tipo, valor, setValor, placeholder, id, isPassword, required }) => {
    const valueOnChange = (evt) => {
        setValor(evt.target.value);
    };

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type={isPassword ? "password" : tipo} // Soporta diferentes tipos
                className="form-control"
                id={id}
                placeholder={placeholder}
                onChange={valueOnChange}
                value={valor}
                required={required}
            />
        </div>
    );
};

EntradaDatos.defaultProps = {
    tipo: "text", // Valor predeterminado de tipo si no se proporciona
    placeholder: "",
    id: "txt_value", // ID predeterminado si no se proporciona
    isPassword: false,
    required: false,
};

export default EntradaDatos;
