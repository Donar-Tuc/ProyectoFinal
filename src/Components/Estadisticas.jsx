import React, { Component } from "react";
import "./Styles/Estadisticas.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Estadisticas extends Component {

  render() {
    AOS.init();
    return (
      <>
         <section id="EstadisticasContainer">
            <div className="Bloqueestadisticas">
                <div className="Estadistica" data-aos="fade-up">
                    <h2 id="NumeroEst">+4500</h2>
                    <h2 id="TextEst">Donaciones</h2>
                </div>
                <div className="Estadistica" data-aos="fade-up">
                    <h2 id="NumeroEst">+50</h2>
                    <h2 id="TextEst">Fundaciones</h2>
                </div>
                <div className="Estadistica" data-aos="fade-up">
                    <h2 id="NumeroEst">+10</h2>
                    <h2 id="TextEst">Años ayudando</h2>
                </div>
            </div>
        </section>
            
      </>
    );
  }
}

export default Estadisticas;