import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Styles/Dinero.css";

class TemplatePerfil extends Component {
    render() {
        const { opciones } = this.props;
        const { logo, titulo, horario, direccion, telefono, sitioWeb, email, mapaBoton, mapa, descripcion, tituloEtiquetas, etiquetas } = opciones;


        // Con esto obtengo la URL Actual para compararla despues con los perfiles que si aceptan donaciones monetarias
        const currentUrl = window.location.pathname;

        return (
            <section id="ContainerDineroPadre">
                <div className="DineroHijo">
                    <img src={logo} alt="Logo" id="LogoDinero" />

                    <div className="TextoDinero">
                        <div id="ContainerTituloBtn">
                            <div id="Box1Texto">
                                <h2 id="TituloDinero">{titulo}</h2>
                                <div id="etiquetasContainer">
                                    {etiquetas.map((etiqueta, index) => (
                                        <div className="EtiquetaContainer " key={index}>
                                            <img src={etiqueta} id="EtiquetaCard" alt="categoria" />
                                            <p className="TituloEtiqueta">{tituloEtiquetas[index]}</p>
                                        </div>
                                    ))}
                                </div>
                                <p>{horario}</p>
                                <a href={mapaBoton}>{direccion}</a>

                                {currentUrl === '/banco-alimentos' && ( // Esta logica hace que si la url es igual a un perfil con donaciones monetarias, va a mostrar el boton
                                    <div className="ContainerMP">
                                        <a href="http://link.mercadopago.com.ar/donarorganizacion">
                                            <button className="BtnMercadopago">Donar Online</button>
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div className="Box2Btn">
                                <a href={`tel:${telefono}`}>
                                    <ion-icon name="call-outline" size='large' id='icon'></ion-icon>
                                </a>
                                <a href={sitioWeb}>
                                    <ion-icon name="globe-outline" size='large' id='icon'></ion-icon>
                                </a>
                                <a href={mapaBoton}>
                                    <ion-icon name="navigate-circle-outline" size='large' id='icon'></ion-icon>
                                </a>
                                <a href={`mailto:${email}`}>
                                    <ion-icon name="at-outline" size='large' id='icon'></ion-icon>
                                </a>
                            </div>
                        </div>

                        <p>{descripcion}</p>
                    </div>

                    <div className="Mapa">
                        <iframe id="MapaGoogle" src={mapa} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de Google con ubicaciones"></iframe>
                    </div>
                </div>
            </section>
        );
    }
}

TemplatePerfil.propTypes = {
    opciones: PropTypes.object.isRequired,
};

export default TemplatePerfil;
