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
                <p id="DescripcionAccion" >Tu decisión de ayudar hoy puede transformar el mañana. En DON.AR, creemos en el poder de la comunidad y en cómo cada pequeña acción puede tener un gran impacto. Ya sea donando bienes, tiempo o dinero, estás contribuyendo a un cambio real en la vida de quienes más lo necesitan. Uní tu voz a la de miles de donantes y fundaciones que ya están marcando la diferencia.</p>
            </div>
            <img src= {TomaAccionImage} alt="" id="ImageDonar" data-aos="fade-up" />
        </section>
            
      </>
    );
  }
}

export default TomaAccion;