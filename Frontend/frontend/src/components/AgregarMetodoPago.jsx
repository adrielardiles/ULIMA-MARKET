import React, { useState } from 'react';
import EntradaDatos from './EntradaDatos';
import SeleccionarDireccion from './SeleccionarDireccion';
import { departamentosYProvincias } from './datosUbigeo';

const AgregarMetodoPago = ({ agregarMetodo }) => {
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [validoHasta, setValidoHasta] = useState('');
    const [cve, setCve] = useState('');
    const [direccion, setDireccion] = useState({ departamento: '', provincia: '', distrito: '' });

    const manejarEnvio = (e) => {
        e.preventDefault();
        agregarMetodo({ numeroTarjeta, nombrePropietario, validoHasta, cve, ...direccion });
        setNumeroTarjeta('');
        setNombrePropietario('');
        setValidoHasta('');
        setCve('');
        setDireccion({ departamento: '', provincia: '', distrito: '' });
    };

    return <>        <form onSubmit={manejarEnvio} className="mb-4">
            <div className="row">
                <div className="col-md-6">
                    <EntradaDatos label="Número de Tarjeta" tipo="text" valor={numeroTarjeta} setValor={setNumeroTarjeta} />
                    <EntradaDatos label="Nombre del Propietario" tipo="text" valor={nombrePropietario} setValor={setNombrePropietario} />
                    <EntradaDatos label="Válido Hasta" tipo="date" valor={validoHasta} setValor={setValidoHasta} />
                    <EntradaDatos label="CVE" tipo="number" valor={cve} setValor={setCve} />
                </div>
                <div className="col-md-6">
                    <SeleccionarDireccion
                        label="Ubicación"
                        departamentosData={departamentosYProvincias}
                        onChange={setDireccion}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Guardar</button>
        </form>
    </>

};

export default AgregarMetodoPago;
