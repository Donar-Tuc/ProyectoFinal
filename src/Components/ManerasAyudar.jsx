import React, { Component } from "react";
import "./Styles/ManerasAyudar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class BloqueAyudar extends Component {
  render() {
    return (
      <>
        <section id="ContainerAyudar">
          <div id="TituloBloqueAyudar">
            <h2 id="TituloAyudar">Maneras de Ayudar</h2>
            <p id="DescripcionAyudar">Hay muchas otras maneras de apoyar a la gente más necesitada.</p>
          </div>

          <div id="BloqueCards">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Dinero</h5>
              <p className="card-text">Dona dinero. Ayuda causas importantes. Transforma vidas.</p>
              <button type="button" className="btn btn-primary botonDonar">
                    Donar
                  </button>
            </div>
          </div>

          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Comida</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
              <p className="card-text">Dona dinero. Ayuda causas importantes. Transforma vidas.</p>
              <button type="button" className="btn btn-primary botonDonar">
                    Donar
                  </button>
            </div>
          </div>

          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Hogar</h5>
              <p className="card-text">Dona dinero. Ayuda causas importantes. Transforma vidas.</p>
              <button type="button" className="btn btn-primary botonDonar">
                    Donar
                  </button>
            </div>
          </div>

          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Escolar</h5>
              <p className="card-text">Dona dinero. Ayuda causas importantes. Transforma vidas.</p>
              <button type="button" className="btn btn-primary botonDonar">
                    Donar
                  </button>
            </div>
          </div>

          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Vestimenta</h5>
              <p className="card-text">Dona dinero. Ayuda causas importantes. Transforma vidas.</p>
              <button type="button" className="btn btn-primary botonDonar">
                    Donar
                  </button>
            </div>
          </div>

          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Asistencia</h5>
              <p className="card-text">Dona dinero. Ayuda causas importantes. Transforma vidas.</p>
              <button type="button" className="btn btn-primary botonDonar">
                    Donar
                  </button>
            </div>
          </div>

          </div>
          <div id="BotonVerMas">
          <button type="button" className="btn btn-primary botonDonar">
                    Ver Mas
                  </button>
          </div>
          

         
        </section>
      </>
    );
  }
}

export default BloqueAyudar;
