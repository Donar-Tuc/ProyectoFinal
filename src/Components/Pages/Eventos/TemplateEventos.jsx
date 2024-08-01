import React from "react";
import { useFetch } from "../../../logic/useFetch";
import { useParams } from "react-router-dom";
import { etiquetas } from "../../Pages/Categorias/Etiquetas/index";
import moment from "moment";
import "moment/locale/es";  // Importar el locale en español
import useFetchImage from "../../../logic/useFetchImage";
import '../Eventos/css/MisEventos.css'

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
    <section id="ContainerMievento" >
      <div className="CardNuevoEvento">
        <div id="ContainerImagenNuevoEvento">
          {imageIsLoading ? (
            <p>Cargando logo...</p>
          ) : imageError ? (
            <p>Error cargando el logo</p>
          ) : (
            <img src={imageUrl} alt={`logo ${fundacionTitulo}`} id="imagenNuevoEvento"/>
          )}
        </div>
        <div className="ContainertextoNuevoevento">
              <h2 id="TituloDeMiEventoPrincipal">{evento.titulo}</h2>
              {/* Etiquetas - Se muestran las categorias */}
              <div id="etiquetasContainerMisEventosID">
                {evento.tituloEtiquetas?.map((etiqueta, index) => {
                  const etiquetaData = etiquetas[etiqueta];
                  return (
                    <div className="EtiquetaContainerMisEventosImg" key={index}>
                      <img
                        src={etiquetaData?.imagen}
                        id="EtiquetaCardMisEventos"
                        alt="categoria"
                      />
                      <p className="TituloEtiquetaMisEventos">{etiquetaData?.titulo}</p>
                    </div>
                  );
                })}
              </div>
              <div className="ContainerInfoMievento">
              <h3 className="TituloMieventoInfo">Informacion Sobre el evento</h3>
              <p className="TextoMiEventoInfo"><strong>Organizado por:</strong>  {fundacionTitulo}</p>
              <p className="TextoMiEventoInfo">
               <strong>Fecha de Inicio: </strong>{moment(evento.fechaInicio).format("dddd D [de] MMMM")}
              </p>
              <p className="TextoMiEventoInfo"><strong>Fecha de Finalizacion:</strong> {moment(evento.fechaFin).format("dddd D [de] MMMM")}</p>
              <p id="DecripcionMisEventos">{evento.descripcion}</p>
              </div>
            </div>
          </div>
         
    </section>
  );
}

export default TemplateEventos;
