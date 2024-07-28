import React, { Component } from "react";
import "./Styles/ManerasAyudar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class CardsAyudar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  toggleShowAll = () => {
    this.setState(prevState => ({ showAll: !prevState.showAll }));
  }

  render() {
    const { showAll } = this.state;
    const { opciones } = this.props;

    // Muestra 4 tarjetas por defecto y el resto al hacer clic en el botón
    const visibleOpciones = showAll ? opciones : opciones.slice(0, 4);

    return (
      <>
        <section id="ContainerAyudar">
          <div id="TituloBloqueAyudar">
            <h2 id="TituloAyudar" data-aos="fade-up">Maneras de Ayudar</h2>
            <p id="DescripcionAyudar" data-aos="fade-up">Hay muchas otras maneras de apoyar a la gente más necesitada.</p>
          </div>

          <div id="BloqueCards" data-aos="fade-up">
            {visibleOpciones.map((opcion, index) => (
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

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-secondary" id="BotonVerMas" onClick={this.toggleShowAll}>
              {showAll ? 'Ver menos' : 'Ver más'}
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default CardsAyudar;

