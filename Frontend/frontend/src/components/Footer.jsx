import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Asumiendo que usas React Router para navegación
import SeccionContacto from './SeccionContacto';
import SeccionAtencionCliente from './SeccionAtencion';
import SeccionPoliticas from './SeccionPoliticas';

const Footer = () => {
  const navigate = useNavigate();

  // Datos que se pasan a las secciones
  const datosContacto = {
    telefono: '(01) 613 9999',
    correo: 'soporte@ulimarket.com',
  };

  const opcionesAtencionCliente = [
    { texto: 'Horarios de Atención', ruta: '/horarios-atencion' },
    { texto: 'Preguntas Frecuentes', ruta: '/preguntas-frecuentes' },
  ];

  const politicasUso = [
    { texto: 'Términos y Condiciones', ruta: '/terminos-condiciones' },
    { texto: 'Política de Datos Personales', ruta: '/datos-personales' },
  ];

  return (
    <div className="footer bg-light mt-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="logo-section">
              <h5>ULIMARKET</h5>
              {/* Aquí puedes añadir el logo si es necesario */}
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <SeccionContacto datos={datosContacto} />
          </div>
          <div className="col-md-3 mb-3">
            <SeccionAtencionCliente opciones={opcionesAtencionCliente} navigate={navigate} />
          </div>
          <div className="col-md-3 mb-3">
            <SeccionPoliticas politicas={politicasUso} navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
