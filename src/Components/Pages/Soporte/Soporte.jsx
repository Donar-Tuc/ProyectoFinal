import React, { Component } from "react";
import "./css/Soporte.css";

class Soporte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            numero: "",
            email: "",
            consulta: "",
            errors: {}
        };
    }

    validateForm = () => {
        const { nombre, numero, email, consulta } = this.state;
        let errors = {};
        let formIsValid = true;

        // Validar Nombre
        if (!nombre.trim()) {
            formIsValid = false;
            errors["nombre"] = "El nombre es requerido.";
        }

        // Validar Número
        if (!numero.trim()) {
            formIsValid = false;
            errors["numero"] = "El número es requerido.";
        } else if (!/^\d+$/.test(numero)) {
            formIsValid = false;
            errors["numero"] = "Ingrese solo números.";
        }

        // Validar Email
        if (!email.trim()) {
            formIsValid = false;
            errors["email"] = "El correo electrónico es requerido.";
        } else {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(email)) {
                formIsValid = false;
                errors["email"] = "Ingrese un correo electrónico válido.";
            }
        }

        // Validar Consulta
        if (consulta.trim().length < 20) {
            formIsValid = false;
            errors["consulta"] = "La consulta debe tener al menos 20 caracteres.";
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
        const hasErrors = Object.keys(errors).length > 0;

        return (
            <div className="ContainerForm">
               
                <form className="formSoporte" action="https://api.web3forms.com/submit" method="POST" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="access_key" value="50e21fd4-36fa-4bfd-85c8-cb279489ba9b" />

                    <p className="title">Soporte</p>
                    <p className="message">Te ayudamos con cualquier duda que tengas</p>

                    {hasErrors && (
                    <div className="error-containerSoporte">
                        <div className="error-messageSoporte">
                            {Object.values(errors).map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}
                        </div>
                    </div>
                )}

                    <label>
                        <input className="input" type="text" name="nombre" placeholder="" required="required" id="firstname" onChange={this.handleChange} />
                        <span>Nombre</span>
                    </label>

                    <label>
                        <input className="input" type="text" name="numero" placeholder="" required="required" id="Numero" onChange={this.handleChange} />
                        <span>Número</span>
                    </label>

                    <label>
                        <input className="input" type="email" name="email" placeholder="" required="required" id="email" onChange={this.handleChange} />
                        <span>Email</span>
                    </label>

                    <label>
                        <textarea className="input" id="consulta" name="consulta" type="text" placeholder="" required="required" maxLength="200" onChange={this.handleChange}></textarea>
                        <span>Describe tu consulta</span>
                    </label>

                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                    <button className="btnForm" type="submit">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Enviar</span>
                    </button>
                </form>

            </div>
        );
    }
}

export default Soporte;