import React, { Component } from "react";
import "./Styles/Comunidad.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import fotoComunidad from './Images/Community image.png';

class Comunidad extends Component {

  render() {
    AOS.init();
    return (
      <>
         <section id="ComunidadContainer">
        
            <h2 className="TituloComunidad" >Unite a la Comunidad</h2>
                <p className="DescripcionComunidad" >Ingresá a nuestra comunidad de WhatsApp para estar al tanto de todos los eventos de caridad cerca tuyo.</p>
                <button type="button" className="btn btn-success btn-lg" id="btnComunidad" >
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    Comunidad de Whatsapp
                  </button>

                  <img src={fotoComunidad} alt="comunidad" className="FotoComunidad"/>
        </section>
            
      </>
    );
  }
}

export default Comunidad;