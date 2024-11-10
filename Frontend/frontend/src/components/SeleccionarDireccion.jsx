import React, { useState } from 'react';

const SeleccionarDireccion = ({ label, departamentosData, onChange }) => {
    const [departamento, setDepartamento] = useState('');
    const [provincia, setProvincia] = useState('');
    const [distrito, setDistrito] = useState('');

    const manejarCambioDepartamento = (e) => {
        const nuevoDepartamento = e.target.value;
        setDepartamento(nuevoDepartamento);
        setProvincia('');
        setDistrito('');
        if (onChange) {
            onChange({ departamento: nuevoDepartamento, provincia: '', distrito: '' });
        }
    };

    const manejarCambioProvincia = (e) => {
        const nuevaProvincia = e.target.value;
        setProvincia(nuevaProvincia);
        setDistrito('');
        if (onChange) {
            onChange({ departamento, provincia: nuevaProvincia, distrito: '' });
        }
    };

    const manejarCambioDistrito = (e) => {
        const nuevoDistrito = e.target.value;
        setDistrito(nuevoDistrito);
        if (onChange) {
            onChange({ departamento, provincia, distrito: nuevoDistrito });
        }
    };

    const provincias = departamento ? Object.keys(departamentosData?.[departamento]?.provincias || {}) : [];
    const distritos = provincia ? departamentosData?.[departamento]?.provincias?.[provincia] || [] : [];

    return <>
        <div>
            <label className="form-label">{label} - Departamento</label>
            <select className="form-select mb-3" value={departamento} onChange={manejarCambioDepartamento}>
                <option value="">Seleccione un departamento</option>
                {departamentosData && Object.keys(departamentosData).map((dep) => (
                    <option key={dep} value={dep}>{dep}</option>
                ))}
            </select>

            <label className="form-label">{label} - Provincia</label>
            <select className="form-select mb-3" value={provincia} onChange={manejarCambioProvincia} disabled={!departamento}>
                <option value="">Seleccione una provincia</option>
                {provincias.map((prov) => (
                    <option key={prov} value={prov}>{prov}</option>
                ))}
            </select>

            <label className="form-label">{label} - Distrito</label>
            <select className="form-select mb-3" value={distrito} onChange={manejarCambioDistrito} disabled={!provincia}>
                <option value="">Seleccione un distrito</option>
                {distritos.map((dist) => (
                    <option key={dist} value={dist}>{dist}</option>
                ))}
            </select>
        </div>
    </>
};

export default SeleccionarDireccion;
