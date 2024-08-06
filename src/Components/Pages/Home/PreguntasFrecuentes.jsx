import Accordion from "react-bootstrap/Accordion";
import "./Styles/faq.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AlwaysOpenExample() {
  AOS.init();
  return (
    <section id="AcordeonContainer">
      <div id="BloqueTituloPreguntas">
        <h2 id="tituloFaq">Preguntas Frecuentes</h2>
      </div>
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Qué es DON.AR?</Accordion.Header>
            <Accordion.Body>
              DON.AR es una plataforma que conecta a personas generosas con
              organizaciones benéficas que necesitan apoyo. Nuestra aplicación
              facilita la donación de bienes, servicios, y dinero a causas
              benéficas, permitiendo a los usuarios encontrar fundaciones
              cercanas y eventos solidarios de manera rápida y sencilla.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿Cómo puedo registrarme como organización en DON.AR?
            </Accordion.Header>
            <Accordion.Body>
              Para registrarte como organización en DON.AR, simplemente llena
              nuestro formulario de registro con la información necesaria sobre
              tu fundación. Una vez que verifiquemos los datos, te enviaremos
              las credenciales de acceso a tu nueva cuenta. Puedes empezar el
              proceso <a href="/registrarse">aquí</a>.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ¿Cómo funciona el proceso de verificación para organizaciones?
            </Accordion.Header>
            <Accordion.Body>
              Después de recibir tu solicitud de registro, nuestro equipo de
              verificación revisará la información proporcionada para asegurarse
              de que cumples con nuestros criterios de autenticidad. Esto puede
              incluir una revisión de documentos oficiales y referencias. Una
              vez aprobado, recibirás un email de confirmación.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿Es necesario crear una cuenta para donar a una organización?
            </Accordion.Header>
            <Accordion.Body>
              No, no es necesario crear una cuenta para donar a través de
              DON.AR. Los donantes pueden buscar organizaciones, seleccionar
              categorías de donación, y realizar contribuciones sin necesidad de
              registro.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿Qué tipos de donaciones puedo hacer en la plataforma?
            </Accordion.Header>
            <Accordion.Body>
              Puedes donar una variedad de bienes, incluyendo ropa, alimentos,
              medicamentos, y útiles escolares. También puedes ofrecer tu tiempo
              como voluntario para eventos benéficos o realizar donaciones
              monetarias directamente a través de la plataforma.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              ¿Cómo se procesan las donaciones monetarias?
            </Accordion.Header>
            <Accordion.Body>
              Las donaciones monetarias se procesan de forma segura a través de
              nuestra integración con Mercado Pago. No necesitas tener una
              cuenta en nuestra aplicación para donar, pero se te redirigirá a
              Mercado Pago para completar la transacción. Es importante que
              tengas una cuenta en su plataforma para realizar el pago.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              ¿Cómo funcionan los eventos publicados por las fundaciones?
            </Accordion.Header>
            <Accordion.Body>
              Las fundaciones pueden publicar eventos en la plataforma para
              recaudar fondos o reunir voluntarios. Estos eventos están listados
              en nuestra sección de <a href="/eventos">Eventos</a>, donde puedes encontrar
              información detallada sobre cómo participar y contribuir. Una vez
              que un evento ha finalizado, su publicación se eliminará
              automáticamente.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}

export default AlwaysOpenExample;
