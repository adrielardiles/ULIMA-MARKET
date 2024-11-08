import React from 'react';
import PerfilDatos from './PerfilDatos'; 
import Pedidos from './Pedidos'; 
import Direcciones from './Direcciones'; 
import MetodosPago from './MetodosPago'; 
import Autenticacion from './Autenticacion'; 

const PerfilContenido = ({ opcion }) => {
    switch (opcion) {
        case "perfil":
            return <PerfilDatos />;
        case "pedidos":
            return <Pedidos />;
        case "direcciones":
            return <Direcciones />;
        case "tarjetas":
            return <MetodosPago />;
        case "autenticacion":
            return <Autenticacion />;
        default:
            return <div><h2>Bienvenido</h2><p>Selecciona una opción.</p></div>;
    }
};

export default PerfilContenido;
