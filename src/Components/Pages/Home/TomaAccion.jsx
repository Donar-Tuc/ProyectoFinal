import React, { Component } from "react";
import "./Styles/TomaAccion.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import TomaAccionImage from '../Home/Images/TomaAccionImage.png'


class TomaAccion extends Component {

  render() {
    AOS.init();
    return (
      <>
        <section id="AccionContainer" >
            <div className="content" data-aos="fade-up">
                <h2 id="TituloAccion" >Toma Accion</h2>
                <p id="DescripcionAccion" >Tu ayuda puede cambiar vidas. Doná hoy para apoyar causas importantes. Desde educación hasta justicia social, cada donación cuenta. Juntos, podemos crear un mundo mejor.</p>
            </div>
            <img src= {TomaAccionImage} alt="" id="ImageDonar" data-aos="fade-up" />
        </section>
            
      </>
    );
  }
}

export default TomaAccion;