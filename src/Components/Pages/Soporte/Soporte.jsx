import React, { Component } from "react";
import "../Soporte/css/Soporte.css";

class Soporte extends Component {
  render() {
    return (
      <div className="ContainerForm">
        <form className="form" action="https://api.web3forms.com/submit" method="POST">

          <input type="hidden" name="access_key" value="50e21fd4-36fa-4bfd-85c8-cb279489ba9b" />

          <p className="title">Contactate con Soporte</p>
          <p className="message">Te ayudamos con cualquier duda que tengas</p>

        
            <label>
              <input className="input" type="text" name="Nombre" placeholder="" required="required" id="firstname" />
              <span>Nombre</span>
            </label>

          
          <label>
            <input className="input" type="text" name="Numero" placeholder="" required="required" id="Numero" />
            <span>Numero</span>
          </label>
  
          <label>
            <input className="input" type="email" name="Email" placeholder="" required="required" id="email" />
            <span>Email</span>
          </label>

         
          <label>
            <input className="input" name="Consulta" type="text" placeholder="" required="required" />
            <span>Describi tu consulta</span>
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
