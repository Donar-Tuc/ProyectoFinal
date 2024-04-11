import React, { Component } from "react";
import "./Styles/TomaAccion.css";

import TomaAccionImage from '../Images/TomaAccionImage.png'


class TomaAccion extends Component {

  render() {
    return (
      <>
        <section id="AccionContainer">
            <div className="content">
                <h2 id="TituloAccion">Toma Accion</h2>
                <p id="DescripcionAccion">Tu ayuda puede cambiar vidas. Doná hoy para apoyar causas importantes. Desde educación hasta justicia social, cada donación cuenta. Juntos, podemos crear un mundo mejor.</p>
            </div>
            <img src= {TomaAccionImage} alt="" id="ImageDonar"/>
        </section>
            
      </>
    );
  }
}

export default TomaAccion;