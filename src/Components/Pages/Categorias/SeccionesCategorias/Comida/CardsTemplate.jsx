import React, { Component } from "react";
import "./Styles/Comida.css";

class CardComida extends Component {
    render() {
        const { imagen, titulo,horario, descripcion } = this.props;
        
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
                                <button className="BotonesAsistencia"> Saber mas</button>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default CardComida;