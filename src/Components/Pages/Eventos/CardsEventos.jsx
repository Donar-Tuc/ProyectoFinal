import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/eventos.css";

class Card extends Component {
    render() {
        const { imagen, titulo, horario, descripcion,url } = this.props;
        
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
                            <Link to={url}>
                                    <button id="BotonLink">Saber Mas</button> 
                                </Link>
                        </div>
                    </div>
            </>
        );
    }
}

export default Card;
