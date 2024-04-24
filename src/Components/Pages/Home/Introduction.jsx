import React, { Component } from "react";
import "./Styles/Introduction.css";
import { Link } from "react-router-dom";


const LinkIntroduction = [
  {
    name: "Donde Donar",
    href: "/categorias",
  }
];

const LinkAprenderMas = [
  {
    name: "Aprender Mas",
    href: "/categorias",
  }
]


class Introduction extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <section id="Introduction">
                <h1 id="TituloIntroduction">Tus donaciones. <br /> Nuestro compromiso.</h1>

                <div id="BotonesConteiner">

                  <div id="EnlaceIntroduccion" data-aos="fade-up">
                      {LinkIntroduction.map((x, index) => (
                        <li key={index}>
                          <Link className="btn btn-primary" id="btnDondeDonar" to={x.href}>{x.name}</Link>
                        </li>
                       ))}
                  </div>

                  <div id="EnlaceIntroduccion" data-aos="fade-up">
                      {LinkAprenderMas.map((x, index) => (
                        <li key={index}>
                          <Link className="btn btn-primary" id="btnAprenderMas" to={x.href}>{x.name}</Link>
                        </li>
                       ))}
                  </div>
                </div>

                <p id="DescripcionIntroduccion">Potenciando recursos y enlaces de compañías locales para organizaciones benéficas</p>
        </section>
            
      </>
    );
  }
}

export default Introduction;