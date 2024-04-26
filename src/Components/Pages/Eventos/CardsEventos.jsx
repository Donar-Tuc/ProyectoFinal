import React, { Component } from "react";
import "./css/eventos.css";

class Card extends Component {
    render() {
        const { imagen, titulo, horario, descripcion } = this.props;
        
        return (
            <>
                    <div className="CardEventos">
                        <div className="ImagenContainer">
                        <img src={imagen} alt="" id="ImagenCard"/>
                        </div>
                       
                        <div className="textoContainer">
                            <h3 id="TituloEventos">{titulo}</h3>
                            <p id="HorarioEventos">{horario}</p>
                            <p id="DecripcionEventos">{descripcion}</p>
                            <div id="ContainerEventosBotones">
                                <button className="BotonesEventos"> Saber mas</button>
                                <button className="BotonesEventos"> Llamar</button>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default Card;
