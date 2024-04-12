import React, { Component } from "react";
import "./Styles/Introduction.css";

class Introduction extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <section id="Introduction">
                <h1 id="TituloIntroduction">Facil, Seguro y Rapido</h1>

                <div id="BotonesConteiner">
                <button type="button" className="btn btn-primary" id="btnDondeDonar">
                    Donde Donar
                  </button>
                  <button type="button" className="btn" id="btnAprenderMas">
                    Aprender Mas
                  </button>
                </div>

                <p id="DescripcionIntroduccion">Potenciando recursos y enlaces de compañías internacionales para organizaciones benéficas</p>
        </section>
            
      </>
    );
  }
}

export default Introduction;