import React, { Component } from "react";
import "./Styles/TomaAccion.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import TomaAccionImage from '../Images/TomaAccionImage.png'


class TomaAccion extends Component {

  render() {
    AOS.init();
    return (
      <>
        <section id="AccionContainer">
            <div className="content">
                <h2 id="TituloAccion" data-aos="fade-right">Toma Accion</h2>
                <p id="DescripcionAccion" data-aos="fade-right">Tu ayuda puede cambiar vidas. Doná hoy para apoyar causas importantes. Desde educación hasta justicia social, cada donación cuenta. Juntos, podemos crear un mundo mejor.</p>
            </div>
            <img src= {TomaAccionImage} alt="" id="ImageDonar" data-aos="fade-left"/>
        </section>
            
      </>
    );
  }
}

export default TomaAccion;