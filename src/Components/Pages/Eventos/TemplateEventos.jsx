import React from "react";
import { useFetch } from "../../../logic/useFetch";
import { useParams } from "react-router-dom";
import { etiquetas } from "../../Pages/Categorias/Etiquetas/index";
import moment from "moment";
import "moment/locale/es";  // Import the Spanish locale
import Datetime from 'react-datetime';

moment.locale("es");  // Set the locale to Spanish

const TemplateEventos = () => {
    const { id } = useParams(); // Obtener el parámetro de la URL
    console.log("Evento ID:", id);

    const { data: eventoData, loading: eventoLoading, error: eventoError } = useFetch(`https://api-don-ar.vercel.app/eventos/${id}`);
    const evento = eventoData ? eventoData.document : null;
    console.log("Evento Data:", evento);

    const fundacionId = evento ? evento.fundacionOrganizadora : null;
    console.log("Fundacion ID:", fundacionId);

    const { data: fundacionData, loading: fundacionLoading, error: fundacionError } = useFetch(
        fundacionId ? `https://api-don-ar.vercel.app/fundaciones/${fundacionId}` : null
    );
    console.log("Fundacion Data:", fundacionData);


    const fundacionTitulo = fundacionData?.document?.titulo || fundacionData?.document?.userName || "Fundación desconocida";

    return (
        <section id="ContainerDineroPadre">
            <div className="DineroHijo">
                <div className="TextoDinero">
                    <div id="ContainerTituloBtn">
                        <div id="Box1Texto">
                            <h2 id="TituloDinero">{evento.titulo}</h2>
                            <h3 id="TituloDinero">Organizado por: {fundacionTitulo}</h3>

                            <div id="etiquetasContainer">
                                {evento.tituloEtiquetas?.map((etiqueta, index) => {
                                    const etiquetaData = etiquetas[etiqueta];
                                    return (
                                        <div className="EtiquetaContainer" key={index}>
                                            <img src={etiquetaData?.imagen} id="EtiquetaCard" alt="categoria" />
                                            <p className="TituloEtiqueta">{etiquetaData?.titulo}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <p>Del: {moment(evento.fechaInicio).format("dddd D [de] MMMM")}</p>
                            <p>Al: {moment(evento.fechaFin).format("dddd D [de] MMMM")}</p>
                        </div>
                        <div className="Box2Btn"></div>
                    </div>
                    <p>{evento.descripcion}</p>
                </div>
            </div>
        </section>
    );
}

export default TemplateEventos;
