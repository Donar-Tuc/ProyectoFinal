import React, { Component } from "react";
import "./Styles/Dinerotemplate.css";

class CardDinero extends Component {
    render() {
        const { imagen, titulo, horario, descripcion, opcion } = this.props;
        
        return (
            <>
                <div className="CardAsistencia">
                    <div className="ImagenContainer">
                        <img src={imagen} alt="" id="ImagenCard"/>
                    </div>
                    <div className="textoAsistenciaContainer">
                        <h3 id="TituloAsistencia">{titulo}</h3>
                        <p id="HorarioAsistencia">{horario}</p>
                        <p id="DecripcionAsistencia">{descripcion}</p>
                        <div id="ContainerBotones">
                            <button className="BotonesAsistencia" onClick={() => window.location.href = opcion.url}> Saber más</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CardDinero;
