import React, { useState } from 'react';
import AgregarDireccion from './AgregarDireccion';
import VerDirecciones from './VerDirecciones';

const Direcciones = () => {
    // Simulación de datos obtenidos desde el backend
    const direccionesSimuladas = [
        {
            id: 1,
            pais: 'Perú',
            departamento: 'Lima',
            provincia: 'Lima',
            distrito: 'Miraflores',
            calle: 'Av. Larco',
            numero: '123',
            informacionAdicional: 'Apt. 202',
            destinatario: 'Juan Pérez',
        },
        {
            id: 2,
            pais: 'Chile',
            departamento: 'Santiago',
            provincia: 'Santiago',
            distrito: 'Providencia',
            calle: 'Calle Providencia',
            numero: '456',
            informacionAdicional: 'Casa 3',
            destinatario: 'María González',
        },
    ];

    const [direcciones, setDirecciones] = useState(direccionesSimuladas);
    const [mostrarAgregar, setMostrarAgregar] = useState(false); // Cambiado a false
    const [mostrarVer, setMostrarVer] = useState(true); // Cambiado a true

    // Función para agregar una nueva dirección
    const agregarDireccion = (nuevaDireccion) => {
        setDirecciones([...direcciones, { ...nuevaDireccion, id: direcciones.length + 1 }]);
    };

    // Función para eliminar una dirección
    const eliminarDireccion = (id) => {
        setDirecciones(direcciones.filter((direccion) => direccion.id !== id));
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between mb-4">
                <button className={`btn ${mostrarAgregar ? 'btn-warning' : 'btn-light'}`} onClick={() => { setMostrarAgregar(true); setMostrarVer(false); }}>
                    Agregar dirección
                </button>
                <button className={`btn ${mostrarVer ? 'btn-warning' : 'btn-light'}`} onClick={() => { setMostrarAgregar(false); setMostrarVer(true); }}>
                    Ver direcciones
                </button>
            </div>
            {mostrarAgregar && <AgregarDireccion agregarDireccion={agregarDireccion} />}
            {mostrarVer && <VerDirecciones direcciones={direcciones} eliminarDireccion={eliminarDireccion} />}
        </div>
    );
};

export default Direcciones;
