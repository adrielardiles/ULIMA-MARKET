import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const DatosPersonales = () => {
  return (
    <>
      <Header/>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">Política de Protección de Datos Personales</h1>
            <p className="text-muted text-center">Última actualización: 05/11/2024</p>

            <p>
              En Ulimarket, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Protección de Datos Personales describe cómo recopilamos, utilizamos y protegemos tu información personal en relación con el uso de nuestros servicios y sitio web.
            </p>

            <h3 className="mb-4">1. Recopilación de Datos</h3>
            <p>
              Recopilamos información personal que proporcionas al registrarte, realizar un pedido o comunicarte con nosotros. Esta información puede incluir tu nombre, dirección, número de teléfono, correo electrónico y detalles de pago, según sea necesario para ofrecerte nuestros servicios.
            </p>

            <h3 className="mb-4">2. Uso de los Datos</h3>
            <p>
              Utilizamos tus datos personales para gestionar tus pedidos, procesar pagos, mejorar nuestros servicios, y comunicarnos contigo de manera eficiente. Podemos emplear tu información con fines de marketing únicamente con tu consentimiento expreso.
            </p>

            <h3 className="mb-4">3. Protección de los Datos</h3>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, el uso indebido o la divulgación.
            </p>

            <h3 className="mb-4">4. Derechos del Usuario</h3>
            <p>
              Tienes derecho a acceder, rectificar, eliminar o limitar el uso de tus datos personales. Para ejercer estos derechos, puedes ponerte en contacto con nosotros a través de los medios especificados en esta política.
            </p>

            <h3 className="mb-4">5. Retención de Datos</h3>
            <p>
              Conservaremos tus datos personales mientras sea necesario para cumplir con los propósitos descritos en esta política o para cumplir con requisitos legales.
            </p>

            <h3 className="mb-4">6. Contacto</h3>
            <p>
              Si tienes preguntas sobre nuestra política de protección de datos, puedes escribirnos a <a href="mailto:soporte@ulimarket.com">soporte@ulimarket.com</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DatosPersonales;
