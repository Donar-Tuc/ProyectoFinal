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
            <div className="Titulo">
                <h2 className="TituloComunidad" data-aos="fade-right">Unite a la Comunidad</h2>
            </div>
            <div id="DescripcionContainer">
                <p className="DescripcionComunidad" data-aos="fade-left">Ingresá a nuestra comunidad de WhatsApp para estar al tanto de todos los eventos de caridad cerca tuyo.</p>
                <button type="button" className="btn btn-success btn-lg btnComunidad" data-aos="fade-left">
                    Comunidad de Whatsapp
                  </button>
            </div>
        </section>
            
      </>
    );
  }
}

export default Comunidad;