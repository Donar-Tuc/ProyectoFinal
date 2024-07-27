import React, { Component } from "react";
import "./Styles/Comunidad.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import fotoComunidad from './Images/Community image.png';


class Comunidad extends Component {

  render() {
    AOS.init();
    return (
      <>
         <section id="ComunidadContainer">
        
            <h2 className="TituloComunidad" >Unite a la Comunidad</h2>
                <p className="DescripcionComunidad" >Suscríbete a nuestra lista de correos y mantente informado sobre las últimas iniciativas, eventos de caridad, y oportunidades para hacer la diferencia. Recibe actualizaciones exclusivas directamente en tu bandeja de entrada.</p>
              
                <form className="formEmail" action="https://api.web3forms.com/submit" method="POST" onSubmit={this.handleSubmit}>
                                <input type="hidden" name="access_key" value="50e21fd4-36fa-4bfd-85c8-cb279489ba9b" />
                                <div className="field">
                                    <ion-icon name="at-outline" className='iconoInputForm'></ion-icon>
                                    <input className="input-field" type="email" name="email" placeholder="Correo Electrónico" required="required" id="CorreoElectronico" onChange={this.handleChange} />
                                </div>
                                {/* Mensaje de error */}
                                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                                <div className="ContainerBotonOlvideContrasena">
                                    <button id="btnSendCode" type="submit">Subscribirme</button>
                                </div>
                            </form>



                  <img src={fotoComunidad} alt="comunidad" className="FotoComunidad"/>
        </section>
            
      </>
    );
  }
}

export default Comunidad;