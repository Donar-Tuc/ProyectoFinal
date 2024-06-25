import React, { Component } from "react";
import "./Styles/Signup.css";
import Fondo from './images/fondo.png';
// import { Link } from "react-router-dom";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            contact: '',
            institution: '',
            cuit: '',
            address: '',
            description: '',
            errors: []
        };
    }

    validateForm = () => {
        const { email, contact, institution, cuit, description } = this.state;
        let errors = [];
        let formIsValid = true;

        // Validar email
        if (!email) {
            formIsValid = false;
            errors.push("El correo electrónico es requerido.");
        }

        // Validar contacto
        const phoneRegex = /^[0-9]+$/;
        if (!contact) {
            formIsValid = false;
            errors.push("El número de contacto es requerido.");
        } else if (!phoneRegex.test(contact)) {
            formIsValid = false;
            errors.push("El número de contacto debe contener solo números.");
        }

        // Validar institución
        if (!institution) {
            formIsValid = false;
            errors.push("El nombre de la institución es requerido.");
        } else if (institution.length > 50) {
            formIsValid = false;
            errors.push("El nombre de la institución no puede exceder los 50 caracteres.");
        }

        // Validar CUIT
        if (!cuit) {
            formIsValid = false;
            errors.push("El CUIT es requerido.");
        } else if (!phoneRegex.test(cuit)) {
            formIsValid = false;
            errors.push("El CUIT debe contener solo números.");
        }

        // Validar descripción
        if (!description) {
            formIsValid = false;
            errors.push("La descripción es requerida.");
        } else if (description.length > 100) {
            formIsValid = false;
            errors.push("La descripción no puede exceder los 100 caracteres.");
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
        return (
            <>
                <section className="LoginContainer">
                    <div id="FormularioLoginContainer">
                        <div className="bloque1">
                            <img src={Fondo} alt="" id="FondoLogin" />
                        </div>
                        <div className="bloque3">
                            <form className="form2" action="https://api.web3forms.com/submit" method="POST" onSubmit={this.handleSubmit}>
                                <input type="hidden" name="access_key" value="50e21fd4-36fa-4bfd-85c8-cb279489ba9b" />
                                <div className="TitulosContainer">
                                    <p id="heading">Registro</p>
                                    <p id="aclaracion">Este formulario se enviará a nosotros, evaluamos los datos y te otorgamos el usuario y contraseña.</p>
                                </div>
                                
                                {/* Contenedor de mensajes de error */}
                                {this.state.errors.length > 0 && (
                                    <div className="error-container">
                                        <ul>
                                            {this.state.errors.map((error, index) => (
                                                <li key={index} className="error-message">{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="field">
                                    <ion-icon className='iconoInputForm' name="at-outline"></ion-icon>
                                    <input className="input-field" type="email" name="email" placeholder="Correo electrónico" required="required" id="email" onChange={this.handleChange} />
                                </div>
                                <div className="field">
                                    <ion-icon className='iconoInputForm' name="call-outline"></ion-icon>
                                    <input className="input-field" type="tel" name="contact" placeholder="Número de contacto" required="required" id="contact" onChange={this.handleChange} />
                                </div>
                                <div className="field">
                                    <ion-icon className='iconoInputForm' name="business-outline"></ion-icon>
                                    <input className="input-field" type="text" name="institution" placeholder="Nombre de institución" required="required" id="institution" onChange={this.handleChange} />
                                </div>
                                <div className="field">
                                    <ion-icon className='iconoInputForm' name="id-card-outline"></ion-icon>
                                    <input className="input-field" type="text" name="cuit" placeholder="CUIT" required="required" id="cuit" onChange={this.handleChange} />
                                </div>
                                <div className="field">
                                    <ion-icon className='iconoInputForm' name="navigate-circle-outline"></ion-icon>
                                    <input className="input-field" type="text" name="address" placeholder="Dirección física" required="required" id="address" onChange={this.handleChange} />
                                </div>
                                <div className="field" id="descripcion">
                                    <ion-icon className='iconoInputForm' name="help-outline"></ion-icon>
                                    <input className="input-field" type="text" name="description" placeholder="¿Por qué necesitan la visibilidad?" required="required" id="description" onChange={this.handleChange} />
                                </div>
                                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                                <div className="btnRegistrarse">
                                    <button type="submit" className="buttonSendRequestRegister">Registrarme</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Signup;