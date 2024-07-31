import React from "react";
import { useFetch } from "../../../logic/useFetch";
import { useParams } from "react-router-dom";
import { etiquetas } from "../../Pages/Categorias/Etiquetas/index";
import moment from "moment";
import "moment/locale/es";  // Importar el locale en español
import Datetime from 'react-datetime';
import useFetchImage from "../../../logic/useFetchImage";
import "../Categorias/SeccionesCategorias/Fundaciones/Styles/CardsFundaciones.css";

moment.locale("es");  // Configurar el locale a español

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

  const { data: image, error: imageError, isLoading: imageIsLoading } = useFetchImage(evento?.logo);

  let imageUrl;
  if (image) {
    imageUrl = URL.createObjectURL(image);
  }

  if (eventoLoading || fundacionLoading) {
    return <div>Cargando...</div>;
  }

  /*     if (eventoError || fundacionError) {
          return <div>Error al cargar los datos: {eventoError?.message || fundacionError?.message}</div>;
      } */

  /*     if (!evento) {
          return <div>No se encontró el evento</div>;
      } */

  const fundacionTitulo = fundacionData?.document?.titulo || fundacionData?.document?.userName || "Fundación desconocida";

  return (
    <section id="ContainerDineroPadre" className="ContainerEventoNuevo">
      <div className="DineroHijo CardNuevoEvento">
        <div className="ImagenContainer">
          {imageIsLoading ? (
            <p>Cargando logo...</p>
          ) : imageError ? (
            <p>Error cargando el logo</p>
          ) : (
            <img src={imageUrl} alt={`logo ${fundacionTitulo}`} />
          )}
        </div>
        <div className="TextoDinero">
          <div id="ContainerTituloBtn">
            <div id="Box1Texto">
              <h2 id="TituloDinero">{evento.titulo}</h2>
              <h3>Organizado por: {fundacionTitulo}</h3>

              <div id="etiquetasContainer">
                {evento.tituloEtiquetas?.map((etiqueta, index) => {
                  const etiquetaData = etiquetas[etiqueta];
                  return (
                    <div className="EtiquetaContainer" key={index}>
                      <img
                        src={etiquetaData?.imagen}
                        id="EtiquetaCard"
                        alt="categoria"
                      />
                      <p className="TituloEtiqueta">{etiquetaData?.titulo}</p>
                    </div>
                  );
                })}
              </div>
              <p>
                Del: {moment(evento.fechaInicio).format("dddd D [de] MMMM")}
              </p>
              <p>Al: {moment(evento.fechaFin).format("dddd D [de] MMMM")}</p>
            </div>
            <div className="Box2Btn"></div>
          </div>
          <p id="DecripcionEventos">{evento.descripcion}</p>
        </div>
      </div>
    </section>
  );
}

export default TemplateEventos;
