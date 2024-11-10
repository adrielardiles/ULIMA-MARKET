import React, { useState } from 'react';
import EntradaDatos from './EntradaDatos';

const AgregarDireccion = ({ agregarDireccion }) => {
    const [pais, setPais] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [provincia, setProvincia] = useState('');
    const [distrito, setDistrito] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [informacionAdicional, setInformacionAdicional] = useState('');
    const [destinatario, setDestinatario] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarDireccion({ pais, departamento, provincia, distrito, calle, numero, informacionAdicional, destinatario });
        setPais('');
        setDepartamento('');
        setProvincia('');
        setDistrito('');
        setCalle('');
        setNumero('');
        setInformacionAdicional('');
        setDestinatario('');
    };

    return <>
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="row">
                <div className="col-md-6">
                    <EntradaDatos label="País" tipo="text" valor={pais} setValor={setPais} />
                    <EntradaDatos label="Departamento" tipo="text" valor={departamento} setValor={setDepartamento} />
                    <EntradaDatos label="Provincia" tipo="text" valor={provincia} setValor={setProvincia} />
                    <EntradaDatos label="Distrito" tipo="text" valor={distrito} setValor={setDistrito} />
                </div>
                <div className="col-md-6">
                    <EntradaDatos label="Calle" tipo="text" valor={calle} setValor={setCalle} />
                    <EntradaDatos label="Número" tipo="text" valor={numero} setValor={setNumero} />
                    <EntradaDatos label="Información Adicional" tipo="text" valor={informacionAdicional} setValor={setInformacionAdicional} />
                    <EntradaDatos label="Destinatario" tipo="text" valor={destinatario} setValor={setDestinatario} />
                </div>
            </div>
            <button type="submit" className="btn btn-warning mt-3">Guardar</button>
        </form>
    </>
};

export default AgregarDireccion;
