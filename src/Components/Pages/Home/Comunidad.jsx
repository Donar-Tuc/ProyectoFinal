import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styles/Comunidad.css";
import AOS from "aos";
import "aos/dist/aos.css";

import fotoComunidad from "./Images/Community image.png";

const LinkDescubriEventos = [
  {
    name: "Ver eventos",
    href: "/eventos",
  }
];

class Comunidad extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <>
        <section id="ComunidadContainer">
          <h2 className="TituloComunidad" data-aos="fade-up">Haz la Diferencia</h2>
          <p className="DescripcionComunidad" data-aos="fade-up">
            Asiste a eventos y contribuye a buenas causas. Participar en nuestros eventos es una manera efectiva de apoyar a diversas organizaciones y proyectos que necesitan tu ayuda. Cada evento es una oportunidad para marcar la diferencia en la vida de muchas personas.
          </p>
          <div className="ContainerBotonOlvideContrasena" data-aos="fade-up">
            <Link to="/eventos">
              <button id="btnSendCode">
                Ver Eventos
              </button>
            </Link>
          </div>
          <img src={fotoComunidad} alt="comunidad" data-aos="fade-up" className="FotoComunidad" />
        </section>
      </>
    );
  }
}

export default Comunidad;

