import React from "react";
import { Link } from "react-router-dom";
import "./css/eventos.css";

const CardEvento = ({ imagen, titulo, horario, etiquetas, url, descripcion, tituloEtiquetas }) => {
    return (
        <div className="CardEventos CardMiEventos">
            <div className="ImagenContainer">
                <img src={imagen} alt="Imagen del evento" id="ImagenCard" />
            </div>

            <div className="textoContainer">
                <h3 id="TituloEventos">{titulo}</h3>
                <p id="HorarioEventos">{horario}</p>
                <div id="etiquetasContainer">
                    {etiquetas.map((etiqueta, index) => (
                        <div className="EtiquetaContainer" key={index}>
                            <img src={etiqueta} id="EtiquetaCard" alt="categoria" />
                            <p className="TituloEtiqueta">{tituloEtiquetas[index]}</p>
                        </div>
                    ))}
                </div>
                <p id="DecripcionEventos">{descripcion}</p>
                <div className="containerBotonEvento">
                    <Link to={url}>
                        <button id="BotonLink">Saber Más</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardEvento;

