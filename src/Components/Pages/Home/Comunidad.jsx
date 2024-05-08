import React, { Component } from "react";
import "./Styles/Comunidad.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Comunidad extends Component {

  render() {
    AOS.init();
    return (
      <>
         <section id="ComunidadContainer">
            <div className="Titulo" data-aos="fade-up">
                <h2 className="TituloComunidad" >Unite a la Comunidad</h2>
            </div>
            <div id="DescripcionContainer" data-aos="fade-up">
                <p className="DescripcionComunidad" >Ingresá a nuestra comunidad de WhatsApp para estar al tanto de todos los eventos de caridad cerca tuyo.</p>
                <button type="button" className="btn btn-success btn-lg" id="btnComunidad" >
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    Comunidad de Whatsapp
                  </button>
            </div>
        </section>
            
      </>
    );
  }
}

export default Comunidad;