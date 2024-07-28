import React from "react";
import { Link } from "react-router-dom";
import "./css/eventos.css";
import { etiquetas } from "../../../Components/Pages/Categorias/Etiquetas/index";
import useFetchImage from "../../../logic/useFetchImage";

const CardEvento = ({ id, imagen, titulo, horario, descripcion, tituloEtiquetas }) => {

    const { data, error, isLoading } = useFetchImage(imagen);

    let imageUrl;
    if (data) {
        imageUrl = URL.createObjectURL(data);
    }


    return (
        <div className="CardEventos">
            <div className="ImagenContainer">
                {
                    isLoading ? <p>Cargando logo...</p> :
                    error ? <p>Error cargando el logo</p> :
                    <img src={imageUrl} alt="Imagen del evento" id="ImagenCard" />
                }
            </div>

            <div className="textoContainer">
                <h3 id="TituloEventos">{titulo}</h3>
                <p id="HorarioEventos">{horario}</p>
                <div id="etiquetasContainer">
                    {tituloEtiquetas?.map((etiqueta, index) => {
                        const etiquetaData = etiquetas[etiqueta];
                        return (
                            <div className="EtiquetaContainer" key={index}>
                                <img src={etiquetaData?.imagen} id="EtiquetaCard" alt="categoria" />
                                <p className="TituloEtiqueta">{etiquetaData?.titulo}</p>
                            </div>
                        );
                    })}
                </div>
                <p id="DecripcionEventos">{descripcion}</p>
                <div className="containerBotonEvento">
                    <Link to={`/eventos/${id}`}>
                        <button id="BotonLink">Saber Más</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardEvento;

