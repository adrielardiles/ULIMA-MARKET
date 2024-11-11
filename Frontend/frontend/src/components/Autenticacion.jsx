import React, { useState } from 'react';
import ModificarContrasena from './ModificarContrasena';
import ModificarCorreo from './ModificarCorreo';


const datosAutenticacion = {
    contrasena: 'miContrasena123',
    correo: '20211617@aloe.ulima.edu.pe',
};

const Autenticacion = () => {
    const [usuario, setUsuario] = useState(datosAutenticacion);

    const actualizarContrasena = (nuevaContrasena) => {
        setUsuario((prevUsuario) => ({ ...prevUsuario, contrasena: nuevaContrasena }));
    };

    const actualizarCorreo = (nuevoCorreo) => {
        setUsuario((prevUsuario) => ({ ...prevUsuario, correo: nuevoCorreo }));
    };

    return <>
        <div className="container my-4">
            <ModificarContrasena contrasena={usuario.contrasena} actualizarContrasena={actualizarContrasena} />
            <ModificarCorreo correo={usuario.correo} actualizarCorreo={actualizarCorreo} />
        </div>
    </>
};

export default Autenticacion;
