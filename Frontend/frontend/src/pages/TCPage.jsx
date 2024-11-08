import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">Términos y Condiciones de Ulimarket</h1>
            <p className="text-muted text-center">Última actualización: [Fecha]</p>

            <p>
              Bienvenido a Ulimarket, el ecommerce de supermercado que facilita tus compras diarias. Por favor, lea atentamente estos Términos y Condiciones antes de utilizar nuestro sitio web y servicios. Al acceder o realizar una compra en Ulimarket, aceptas cumplir con estos términos.
            </p>

            <h3>1. Uso del Sitio Web</h3>
            <p>
              Ulimarket ofrece un servicio de compra de productos de supermercado en línea, disponible para personas mayores de 18 años. Al registrarte o realizar un pedido, confirmas ser mayor de edad y contar con la capacidad legal para aceptar estos términos.
            </p>
            <p>
              Los usuarios son responsables de proporcionar datos precisos y actualizados durante el proceso de registro.
            </p>

            <h3>2. Pedidos y Pagos</h3>
            <p>
              Los precios de los productos mostrados en Ulimarket incluyen todos los impuestos aplicables. Ulimarket se reserva el derecho de modificar los precios en cualquier momento sin previo aviso.
            </p>
            <p>
              Una vez que un pedido sea confirmado, recibirás una notificación por correo electrónico con los detalles. La aceptación del pedido está sujeta a la disponibilidad de los productos.
            </p>
            <p>
              Los pagos se realizarán mediante las opciones habilitadas en el sitio (tarjeta de crédito, débito, transferencias bancarias, entre otras). El proceso de pago será gestionado por plataformas seguras.
            </p>

            <h3>3. Envío y Entrega</h3>
            <p>
              Ulimarket ofrece servicios de entrega a domicilio de acuerdo con las áreas de cobertura especificadas en el sitio. Los tiempos de entrega son estimados y pueden variar según la disponibilidad de productos, condiciones climáticas u otros factores.
            </p>
            <p>
              En caso de retraso o problemas en la entrega, Ulimarket se comunicará contigo para ofrecer una solución.
            </p>

            <h3>4. Política de Devoluciones y Reembolsos</h3>
            <p>
              Para productos defectuosos o en mal estado, el cliente deberá contactarnos dentro de un plazo de [X] días desde la recepción del pedido. Evaluaremos la situación para proceder con un reemplazo o reembolso, según corresponda.
            </p>
            <p>
              No se aceptarán devoluciones de productos perecederos, a menos que se trate de un problema de calidad.
            </p>

            <h3>5. Privacidad y Protección de Datos</h3>
            <p>
              Ulimarket se compromete a proteger tu privacidad. Los datos personales proporcionados serán tratados de acuerdo con nuestra{' '}
              <a href="#" onClick={() => navigate('/datos-personales')}>
                Política de Privacidad
              </a>
              , disponible en nuestro sitio web.
            </p>

            <h3>6. Limitación de Responsabilidad</h3>
            <p>
              Ulimarket no será responsable por cualquier daño directo, indirecto, incidental o consecuente derivado del uso de nuestro sitio o servicios, salvo en los casos expresamente previstos por la legislación aplicable.
            </p>

            <h3>7. Modificaciones a los Términos y Condiciones</h3>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en el sitio y entrarán en vigor desde su publicación. Te recomendamos revisar periódicamente estos términos.
            </p>

            <h3>8. Contacto</h3>
            <p>
              Para cualquier consulta, sugerencia o reclamación relacionada con nuestros servicios, puedes ponerte en contacto con nosotros a través del correo{' '}
              <a href="mailto:soporte@ulimarket.com">soporte@ulimarket.com</a> o al teléfono <a href="tel:+1234567890">929229012</a>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TermsAndConditions;
