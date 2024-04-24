import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Styles/Dinero.css";

class DineroComponente extends Component {
    render() {
        const { opciones } = this.props; // Cambio aquí
        const { logo, titulo, horario, direccion, telefono, sitioWeb, email, mapa, descripcion } = opciones; // Cambio aquí
        return (
            <section id="ContainerDineroPadre">
                <div className="DineroHijo">
                    <img src={logo} alt="Logo" id="LogoDinero" />

                    <div className="TextoDinero">
                        <div id="ContainerTituloBtn">
                            <div id="Box1Texto">
                                <h2 id="TituloDinero">{titulo}</h2>
                                <p>{horario}</p>
                                <a href={mapa}>{direccion}</a>
                                <div className="Box2Btn">
                                <button className="BtnDinero"><a href={`tel:${telefono}`}>Llamar</a></button>
                                <button className="BtnDinero"><a href={sitioWeb}>Sitio Web</a></button>
                                <button className="BtnDinero"><a href={mapa}>Mapa</a></button>
                                <button className="BtnDinero"><a href={`mailto:${email}`}>Email</a></button>
                            </div>
                            </div>
                           
                        </div>

                        <p>{descripcion}</p>
                    </div>

                    <div className="Mapa">
                        <iframe id="MapaGoogle" src={mapa} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        );
    }
}

DineroComponente.propTypes = {
    opciones: PropTypes.object.isRequired, // Cambio aquí
};

export default DineroComponente;
