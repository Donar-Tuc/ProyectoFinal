import React, { Component } from "react";
import "./Styles/Signup.css";
import Fondo from './images/fondo.png'
import { Link } from "react-router-dom";


class Signup extends Component {

    render() {
        return (
            <>
                <section className="LoginContainer">

                    <div id="FormularioLoginContainer">
                        <div className="bloque1">
                            <img src={Fondo} alt="" id="FondoLogin" />
                        </div>

                        <div className="bloque3">

                            <form class="form2" action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="50e21fd4-36fa-4bfd-85c8-cb279489ba9b" />
                                <div className="TitulosContainer">
                                    <p id="heading">Registro</p>
                                    <p id="aclaracion">Este formulario se enviará a nosotros, evaluamos los datos y te otorgamos el usuario y contraseña.</p>
                                </div>
                                <div class="field">

                                    <ion-icon classname='iconoInputForm' name="at-outline"></ion-icon>
                                    <input className="input-field" type="text" name="Correo Electronico" placeholder="Correo electrónico" required="required" id="Correo Electronico" />

                                </div>
                                <div class="field">
                                    <ion-icon classname='iconoInputForm' name="call-outline"></ion-icon>
                                    <input className="input-field" type="text" name="Contacto" placeholder="Numero de contacto" required="required" id="firstname" />

                                </div>
                                <div class="field">

                                    <ion-icon classname='iconoInputForm' name="business-outline"></ion-icon>
                                    <input className="input-field" type="text" name="Institucion" placeholder="Nombre de institución" required="required" id="firstname" />

                                </div>
                                <div class="field">
                                    <ion-icon classname='iconoInputForm' name="id-card-outline"></ion-icon>
                                    <input className="input-field" type="text" name="Cuit" placeholder="Cuit" required="required" id="firstname" />

                                </div>
                                <div class="field">
                                    <ion-icon classname='iconoInputForm' name="navigate-circle-outline"></ion-icon>
                                    <input className="input-field" type="text" name="Direccion" placeholder="Dirección física" required="required" id="firstname" />

                                </div>

                                <div class="field" id="descripcion">
                                    <ion-icon classname='iconoInputForm' name="help-outline"></ion-icon>
                                    <input className="input-field" type="text" name="Descripcion" placeholder="Por qué necesitan la visibilidad?" required="required" id="firstname" />

                                </div>

                                <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                                <div class="btnRegistrarse" >
                                    <button type="submit" class="buttonSendRequestRegister">Registrarme</button>
                                </div>
                            </form>


                        </div>
                    </div >

                </section >

            </>
        );
    }
}

export default Signup;