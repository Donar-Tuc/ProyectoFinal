import React, { Component } from "react";
import "./css/eventos.css";

class Card extends Component {
    render() {
        const { imagen, titulo, horario, descripcion } = this.props;
        
        return (
            <>
                    <div className="CardEventos">
                        <img src={imagen} alt="" />
                        <div className="textoContainer">
                            <h3 id="TituloEventos">{titulo}</h3>
                            <p id="HorarioEventos">{horario}</p>
                            <p id="DecripcionEventos">{descripcion}</p>
                            <div id="ContainerBotones">
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
