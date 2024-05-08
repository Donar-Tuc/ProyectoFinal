import React, { Component } from "react";
import "./Styles/Login.css";
import Fondo from './images/fondo.png'
import { Link } from "react-router-dom";

class Login extends Component {

  render() {
    return (
      <>
        <section className="LoginContainer">

          <div id="FormularioLoginContainer">
            <div className="bloque1">
              <img src={Fondo} alt="" id="FondoLogin" />
            </div>

            <div className="bloque2">

              <form class="form1">
                <p id="heading1">Inicio de sesión</p>
                <div class="field">
                <ion-icon classname='iconoInputForm' name="at-outline"></ion-icon>                  <input autocomplete="off" placeholder="Correo Electronico" class="input-field" type="text" />
                </div>
                <div class="field">
                  <ion-icon classname='iconoInputForm' name="lock-closed-outline"></ion-icon>
                  <input placeholder="Contraseña" class="input-field" type="password" />
                </div>

                <div className="buttons">
                  <div class="botonesLogincontainer">
                    <button class="button1">Acceder</button>

                    <Link to="/registrarse">
                      <button class="button2">Registrarse</button>
                    </Link>
                  </div>

                  <Link to="/recuperar-contrasena">
                    <button class="button3">Olvidaste tu contraseña?</button>
                  </Link>
                </div>

              </form>


            </div>
          </div>

        </section>

      </>
    );
  }
}

export default Login;