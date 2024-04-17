import Accordion from 'react-bootstrap/Accordion';
import "./Styles/faq.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AlwaysOpenExample() {
  AOS.init();
  return (
    
    <section id='AcordeonContainer' >

    <div id='BloqueTituloPreguntas'>
        <h2 id='tituloFaq' data-aos="fade-up">Preguntas Frecuentes</h2>
    </div>
    <div data-aos="fade-up">
    <Accordion >
      <Accordion.Item eventKey="0" >
        <Accordion.Header>¿Dónde se destinan las donaciones que recibe su organización?</Accordion.Header>
        <Accordion.Body>
        Las donaciones que recibimos se destinan a una variedad de programas y proyectos que apoyan nuestra misión. Esto puede incluir proporcionar alimentos, servicios médicos, educación y otras necesidades básicas a comunidades necesitadas en todo San Miguel de Tucumán.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Cómo puedo verificar la transparencia y eficacia de mi donación?</Accordion.Header>
        <Accordion.Body>
        Puedes verificar la transparencia y eficacia de tu donación a través de informes y evaluaciones que publicamos regularmente. Además, estamos disponibles para responder cualquier pregunta que tengas sobre cómo se utilizan los fondos y el impacto que están teniendo nuestros proyectos.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Como registro mi organizacion?</Accordion.Header>
        <Accordion.Body>
        Si deseas registrar tu organización para recibir donaciones, puedes ponerte en contacto con nuestro equipo de administración a través de nuestro sitio web. Estaremos encantados de guiarte a través del proceso de registro y proporcionarte la información necesaria.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Recibo algún tipo de recibo o comprobante fiscal por mi donación?</Accordion.Header>
        <Accordion.Body>
        Sí, todos nuestros donantes reciben un recibo o comprobante fiscal por su donación. Esto te permite reclamar deducciones fiscales según las leyes y regulaciones locales. El recibo se enviará automáticamente por correo electrónico después de realizar la donación.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>

    </section>
    
  );
}

export default AlwaysOpenExample;