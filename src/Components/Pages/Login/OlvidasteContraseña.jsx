import React, { Component } from "react";
import "./Styles/OlvidasteContraseña.css";
import Fondo from './images/fondo.png'
// import { Link } from "react-router-dom";


class OlvidasteContraseña extends Component {

    render() {
        return (
            <>
                <section className="LoginContainer">

                    <div id="FormularioLoginContainer">
                        <div className="bloque1">
                            <img src={Fondo} alt="" id="FondoLogin" />
                        </div>

                        <div className="bloque4">

                            <form class="formRecuperar" action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="50e21fd4-36fa-4bfd-85c8-cb279489ba9b" />
                                <div className="TitulosContainer">
                                    <p id="heading3">Recuperar contraseña</p>
                                    <p id="aclaracion2">Ingresa tu correo y te mandaremos un correo con el código de recuperación</p>
                                </div>
                                <div class="field">
                                    <ion-icon name="at-outline" classname='iconoInputForm'></ion-icon>
                                    <input className="input-field" type="text" name="Correo Electronico" placeholder="Correo Electronico" required="required" id="Correo Electronico" />
                                </div>
                                <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                                <div class="ContainerBotonOlvideContrasena">
                                    <button id="btnSendCode" type="submit">Enviar código</button>
                                </div>
                            </form>


                        </div>
                    </div >

                </section >

            </>
        );
    }
}

export default OlvidasteContraseña;