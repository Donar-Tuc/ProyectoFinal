// Estructura de el contenedor Perfiles 

/* 
- crear template 
- hacerlo responsive
-poner bien los estilos de las clases

*/


import React, { Component } from "react";
import "./styles/Template.css";
// import "./css/eventos.css"; css

class TemplatePerfiles extends Component {
    render() {
        const { imagen, titulo, descripcion } = this.props;
        
        return (
            <>
                    <div className="CardPerfil">
                        <div className="ImagenContainer">
                        <img src={imagen} alt="" id="ImagenCard"/>
                        </div>
                       
                        <div className="textoContainer">
                            <h3 id="TituloEventos">{titulo}</h3>
                            <p id="DecripcionEventos">{descripcion}</p>
                            <div id="ContainerBotones">
                                <button className="BotonesEventos"> Ver perfil</button>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default TemplatePerfiles;