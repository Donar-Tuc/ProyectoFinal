import React from "react";
import { Link } from "react-router-dom";
import "./css/cardEventosPrueba.css";
import "./css/eventos.css"
import { etiquetas } from "../../../Components/Pages/Categorias/Etiquetas/index";
import useFetchImage from "../../../logic/useFetchImage";
import moment from 'moment';
import 'moment/locale/es';

const CardEvento = ({ id, imagen, titulo, fechaInicio, fechaFin, descripcion, tituloEtiquetas }) => {

    moment.locale('es');
    const { data, error, isLoading } = useFetchImage(imagen);

    let imageUrl;
    if (data) {
        imageUrl = URL.createObjectURL(data);
    }
    const fechaInicioFormateada = moment(fechaInicio).format('D [de] MMMM ');
    const fechaFinFormateada = moment(fechaFin).format('D [de] MMMM [del] YYYY');

    return (
        <div className="CardEventos CardMiEventos">
            <div className="ImagenContainer">
                {
                    isLoading ? <p>Cargando logo...</p> :
                    error ? <p>Error cargando el logo</p> :
                    <img src={imageUrl} alt="Imagen del evento" id="ImagenCard" />
                }
            </div>

            <div className="textoContainer">
                <h3 id="TituloEventos">{titulo}</h3>
                <p id="HorarioEventos">Desde el {fechaInicioFormateada} hasta el {fechaFinFormateada}</p>
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
            </div>
            <div className="containerDescripcion">
                <p id="Decripcion">{descripcion}</p>
            </div>
            <div className="containerBotonEvento">
                <Link to={`/eventos/${id}`}>
                    <button id="BotonLink">Saber Más</button>
                </Link>
            </div>
        </div>
    );
};

export default CardEvento;

