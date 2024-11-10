import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaHorario from '../components/TablaHorario';
import Header from '../components/Header';
import Footer from '../components/Footer';


const HorarioDeAtencion = () => {
  const datosHorario = [
    { dia: 'Lunes', apertura: '08:00', cierre: '22:00' },
    { dia: 'Martes', apertura: '08:00', cierre: '22:00' },
    { dia: 'Miércoles', apertura: '08:00', cierre: '22:00' },
    { dia: 'Jueves', apertura: '08:00', cierre: '22:00' },
    { dia: 'Viernes', apertura: '08:00', cierre: '22:00' },
    { dia: 'Sábado', apertura: '08:00', cierre: '22:00' },
    { dia: 'Domingo', apertura: '08:00', cierre: '22:00' },
  ];

  return <>
    <Header/>
    <div className="container mt-5 mb-5 pt-5">
      <h2 className="text-center mb-5">HORARIO DE ATENCIÓN</h2>
      <TablaHorario datosHorario={datosHorario} />
    </div>
    <Footer/>



    </>
};

export default HorarioDeAtencion;
