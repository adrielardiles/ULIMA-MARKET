import React, { useState } from 'react';
import ModificarContrasena from './ModificarContrasena';
import ModificarCorreo from './ModificarCorreo';

// Datos simulados como si provinieran de una consulta al backend
const datosAutenticacion = [
    {
        id: 1,
        contrasena: 'miContrasena123',
        correo: '20211617@aloe.ulima.edu.pe',
    }
];

const Autenticacion = () => {
    const [usuario, setUsuario] = useState(datosAutenticacion[0]);

    const actualizarContrasena = (nuevaContrasena) => {
        setUsuario({ ...usuario, contrasena: nuevaContrasena });
    };

    const actualizarCorreo = (nuevoCorreo) => {
        setUsuario({ ...usuario, correo: nuevoCorreo });
    };

    return (
        <div className="container my-4">
            <ModificarContrasena contrasena={usuario.contrasena} actualizarContrasena={actualizarContrasena} />
            <ModificarCorreo correo={usuario.correo} actualizarCorreo={actualizarCorreo} />
        </div>
    );
};

export default Autenticacion;
