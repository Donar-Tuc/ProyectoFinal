import React, { Component } from "react";
import "./Styles/Comunidad.css";

class Comunidad extends Component {

  render() {
    return (
      <>
         <section id="ComunidadContainer">
            <div className="Titulo">
                <h2 className="TituloComunidad">Unite a la Comunidad</h2>
            </div>
            <div id="DescripcionContainer">
                <p className="DescripcionComunidad">Ingresá a nuestra comunidad de WhatsApp para estar al tanto de todos los eventos de caridad cerca tuyo.</p>
                <button type="button" className="btn btn-success btn-lg btnComunidad">
                    Comunidad de Whatsapp
                  </button>
            </div>
        </section>
            
      </>
    );
  }
}

export default Comunidad;