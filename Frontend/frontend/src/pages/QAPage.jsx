import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SeccionPreguntas from '../components/SeccionPreguntas';


const PreguntasRespuestasPage = () => {
  const mediosPago = [
    { pregunta: '¿Qué medios de pago aceptan?', respuesta: 'Aceptamos tarjetas de crédito, débito, transferencias bancarias y otros métodos disponibles en el proceso de pago.' },
    { pregunta: '¿Puedo tener más de un medio de pago?', respuesta: 'Sí, puedes registrar y usar varios medios de pago para tus compras.' },
    { pregunta: '¿Es seguro ingresar mi tarjeta de crédito?', respuesta: 'Sí, contamos con medidas de seguridad avanzadas para proteger tu información personal y financiera.' },
    { pregunta: '¿Tienen su propia tarjeta?', respuesta: 'Actualmente, no contamos con una tarjeta de marca propia.' }
  ];

  const miCuenta = [
    { pregunta: '¿Cómo cambio mi correo electrónico?', respuesta: 'Puedes cambiar tu correo electrónico ingresando a la sección de ajustes de tu cuenta.' },
    { pregunta: '¿Qué hacen con mi información?', respuesta: 'Utilizamos tu información para procesar tus pedidos y mejorar tu experiencia, siempre protegiendo tu privacidad.' },
    { pregunta: '¿Cómo veo mis compras anteriores?', respuesta: 'Puedes ver tus compras anteriores en la sección de "Historial de compras" dentro de tu cuenta.' }
  ];

  const misPedidos = [
    { pregunta: '¿Otra persona puede recibir mi compra?', respuesta: 'Sí, otra persona puede recibir tu compra presentando una identificación válida.' },
    { pregunta: '¿Puedo cambiar el día de llegada?', respuesta: 'Ofrecemos flexibilidad para cambiar la fecha de llegada dentro de las opciones disponibles al momento de gestionar tu pedido.' },
    { pregunta: '¿Puedo pagar con efectivo el pedido?', respuesta: 'Sí, en ciertas áreas ofrecemos la opción de pago en efectivo al momento de la entrega.' }
  ];

  const soporteTecnico = [
    { pregunta: '¿Cómo contacto al soporte técnico?', respuesta: 'Puedes contactar al soporte técnico mediante nuestro formulario de contacto o llamando al número proporcionado en la sección de ayuda.' },
    { pregunta: '¿Cuánto tiempo toma recibir una respuesta?', respuesta: 'Nos esforzamos por responder a todas las consultas dentro de 24 horas hábiles.' },
    { pregunta: '¿Ofrecen soporte 24/7?', respuesta: 'No, nuestro soporte está disponible de lunes a viernes en horario laboral.' }
  ];

  return <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <SeccionPreguntas titulo="Medios de Pago" preguntasRespuestas={mediosPago} idBase="mediosPago" />
          </div>
          <div className="col-md-6 mb-4">
            <SeccionPreguntas titulo="Mi Cuenta" preguntasRespuestas={miCuenta} idBase="miCuenta" />
          </div>
          <div className="col-md-6 mb-4">
            <SeccionPreguntas titulo="Mis Pedidos" preguntasRespuestas={misPedidos} idBase="misPedidos" />
          </div>
          <div className="col-md-6 mb-4">
            <SeccionPreguntas titulo="Soporte Técnico" preguntasRespuestas={soporteTecnico} idBase="soporteTecnico" />
          </div>
        </div>
      </div>
      <Footer />
    </>

};

export default PreguntasRespuestasPage;
