import React, { Component } from "react";
import { Link } from "react-router-dom"; // Importa Link
import "../Style.css";

class CardHogar extends Component {
    render() {
        const { imagen, titulo, horario, etiquetas, descripcion, tituloEtiquetas } = this.props;

        return (
            <div className="CardAsistencia">
                <div className="ImagenContainer">
                    <img src={imagen} alt="" id="ImagenCategoriaCard" />
                </div>
                <div className="textoAsistenciaContainer">
                    <h3 id="TituloAsistencia">{titulo}</h3>
                    <p id="HorarioAsistencia">{horario}</p>
                    <div id="etiquetasContainer">
                        {etiquetas.map((etiqueta, index) => (
                            <div className="EtiquetaContainer " key={index}>
                                <img src={etiqueta} id="EtiquetaCard" alt="categoria" />
                                <p className="TituloEtiqueta">{tituloEtiquetas[index]}</p>
                            </div>
                        ))}
                    </div>
                    <p id="DecripcionAsistencia">{descripcion}</p>
                    <div id="ContainerBotones">
                        <Link to={this.props.url}>
                            <button id="BotonLink">Ver perfil</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardHogar;