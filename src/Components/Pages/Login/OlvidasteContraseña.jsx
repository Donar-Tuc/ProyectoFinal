import React, { Component } from "react";
import "./Styles/OlvidasteContraseña.css";
import Fondo from './images/fondo.png'
import { Link } from "react-router-dom";


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

                            <form class="formRecuperar">
                                <div className="TitulosContainer">
                                    <p id="heading3">Recuperar contraseña</p>
                                    <p id="aclaracion2">Ingresa tu correo y te mandaremos un mail con el codigo de recuperación</p>
                                </div>
                                <div class="field">
                                    <ion-icon name="at-outline" classname='iconoInputForm'></ion-icon>
                                    <input autocomplete="off" placeholder="Ingresa tu mail" class="input-field" type="text" />
                                </div>

                                <div class="btnOlvideContrasena">
                                    <button class="button4">Enviar codigo</button>
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