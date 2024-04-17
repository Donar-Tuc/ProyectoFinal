import React, { Component } from "react";
import "./Styles/ManerasAyudar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class CardsAyudar extends Component {
  render() {
    return (
      <>
      <section id="ContainerAyudar">
          <div id="TituloBloqueAyudar">
            <h2 id="TituloAyudar" data-aos="fade-up">Maneras de Ayudar</h2>
            <p id="DescripcionAyudar" data-aos="fade-up">Hay muchas otras maneras de apoyar a la gente más necesitada.</p>
          </div>

          <div id="BloqueCards" data-aos="fade-up">
            {this.props.opciones.map((opcion, index) => (
              <div className="card" id="card" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{opcion.titulo}</h5>
                  <p className="card-text">{opcion.descripcion}</p>
                  <button type="button" className="btn btn-primary" id="botonDonar" onClick={() => window.location.href = opcion.url}>
                    Donar
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div id="BotonVerMasSection" data-aos="fade-up">
            <button type="button" className="btn btn-primary" id="botonVerMas">
              Ver Mas
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default CardsAyudar;
