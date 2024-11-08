import React, { useState } from 'react';
import AgregarMetodoPago from './AgregarMetodoPago';
import VerMetodosPago from './VerMetodosPago';

const MetodosPago = () => {
    // Simulación de datos de métodos de pago
    const metodosSimulados = [
        {
            id: 1,
            numeroTarjeta: '**** **** **** 1234',
            pais: 'Perú',
            nombrePropietario: 'Juan Pérez',
            departamento: 'Lima',
            validoHasta: '12/24',
            provincia: 'Lima',
            cve: '123',
            distrito: 'Miraflores',
        },
    ];

    const [metodos, setMetodos] = useState(metodosSimulados);
    const [mostrarAgregar, setMostrarAgregar] = useState(false);
    const [mostrarVer, setMostrarVer] = useState(true);

    // Función para agregar un nuevo método de pago
    const agregarMetodo = (nuevoMetodo) => {
        setMetodos([...metodos, { ...nuevoMetodo, id: metodos.length + 1 }]);
    };

    // Función para eliminar un método de pago
    const eliminarMetodo = (id) => {
        setMetodos(metodos.filter((metodo) => metodo.id !== id));
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between mb-4">
                <button className={`btn ${mostrarAgregar ? 'btn-warning' : 'btn-light'}`} onClick={() => { setMostrarAgregar(true); setMostrarVer(false); }}>
                    Agregar Método de Pago
                </button>
                <button className={`btn ${mostrarVer ? 'btn-warning' : 'btn-light'}`} onClick={() => { setMostrarAgregar(false); setMostrarVer(true); }}>
                    Ver Métodos de Pago
                </button>
            </div>
            {mostrarAgregar && <AgregarMetodoPago agregarMetodo={agregarMetodo} />}
            {mostrarVer && <VerMetodosPago metodos={metodos} eliminarMetodo={eliminarMetodo} />}
        </div>
    );
};

export default MetodosPago;
