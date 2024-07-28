import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import "./Style.css";
import { etiquetas } from "../../Etiquetas/index";
import useFetchImage from "../../../../../logic/useFetchImage";

const CardTemplate = ({ id, imagen, titulo, horario, tituloEtiquetas }) => {
    const { data, error, isLoading } = useFetchImage(imagen);

    let imageUrl;
    if (data) {
        imageUrl = URL.createObjectURL(data);
    }

    return (
        <div className="CardAsistencia">
            <div className="ImagenContainer">
                {
                    isLoading ? <p>Cargando logo...</p> :
                    error ? <p>Error cargando el logo</p> :
                    <img src={imageUrl} alt="Imagen del evento" id="ImagenCard" />
                }
            </div>
            <div className="textoAsistenciaContainer">
                <h3 id="TituloAsistencia">{titulo}</h3>
                <p id="HorarioAsistencia">{horario}</p>
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
                <div id="ContainerBotones">
                    <Link to={`/fundaciones/${id}`}>
                        <button id="BotonLink">Ver perfil</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardTemplate;
