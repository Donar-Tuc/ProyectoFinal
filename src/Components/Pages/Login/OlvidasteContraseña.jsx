import React, { Component } from "react";
import "./Styles/OlvidasteContraseña.css";
import Fondo from './images/fondo.png';
// import { Link } from "react-router-dom";

class OlvidasteContraseña extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {}
        };
    }

    validateEmail = (email) => {
        // Expresión regular para validar el formato de email
        // Esta expresión regular es básica y puede no cubrir todos los casos posibles
        // Se recomienda utilizar una validación más robusta según tus necesidades específicas
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validateForm = () => {
        const { email } = this.state;
        let errors = {};
        let formIsValid = true;

        // Validar email
        if (!email) {
            formIsValid = false;
            errors["email"] = "El correo electrónico es requerido.";
        } else if (!this.validateEmail(email)) {
            formIsValid = false;
            errors["email"] = "Ingrese un correo electrónico válido.";
        } else {
            errors["email"] = ""; // Limpiar el mensaje de error si es válido
        }

        this.setState({ errors });
        return formIsValid;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            // Enviar el formulario si todas las validaciones son correctas
            e.target.submit();
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <>
                <section className="LoginContainer">
                    <div id="FormularioLoginContainer">
                        <div className="bloque1">
                            <img src={Fondo} alt="" id="FondoLogin" />
                        </div>
                        <div className="bloque4">
                            <form className="formRecuperar" action="https://api.web3forms.com/submit" method="POST" onSubmit={this.handleSubmit}>
                                <input type="hidden" name="access_key" value="50e21fd4-36fa-4bfd-85c8-cb279489ba9b" />
                                <div className="TitulosContainer">
                                    <p id="heading3">Recuperar contraseña</p>
                                    <p id="aclaracion2">Ingresa tu correo y te mandaremos un correo con el código de recuperación</p>
                                </div>
                                <div className="field">
                                    <ion-icon name="at-outline" className='iconoInputForm'></ion-icon>
                                    <input className="input-field" type="email" name="email" placeholder="Correo Electrónico" required="required" id="CorreoElectronico" onChange={this.handleChange} />
                                </div>
                                {/* Mensaje de error */}
                                {errors.email && <div className="error-message">{errors.email}</div>}
                                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                                <div className="ContainerBotonOlvideContrasena">
                                    <button id="btnSendCode" type="submit">Enviar código</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OlvidasteContraseña;