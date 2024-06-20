import React from "react";
import "./Styles/Dinero.css";
import { useFetch } from "../../../../logic/useFetch";
import { useParams } from "react-router-dom";
import { etiquetas } from "../Etiquetas/index";

const TemplatePerfil = (/* { id } */) => {
    const { id } = useParams(); // Obtener el parámetro de la URL 
    const { data, loading, error } = useFetch(`https://api-don-ar.vercel.app/fundaciones/${id}`) // Obtener los datos usando el id de la URL
    const fundacion = data ? data.document : "no se encontro la fundacion";
    console.log(fundacion);

    /*    if (loading) return <div>Loading...</div>; // Manejar la carga
       if (error) return <div>Error: {error}</div>; // Manejar errores */

    const { logo, titulo, horario, direccion, telefono, sitioWeb, email, mapaBoton, mapa, descripcion, tituloEtiquetas } = fundacion; // Desestructurar los datos obtenidos
    console.log(tituloEtiquetas); 

    // tituloEtiquetas = ["Donaciones Monetarias", "..."] ===> etiquetas.etiqueta.titulo

    return (
        <section id="ContainerDineroPadre">
            <div className="DineroHijo">
                <img src={logo} alt="Logo" id="LogoDinero" />

                <div className="TextoDinero">
                    <div id="ContainerTituloBtn">
                        <div id="Box1Texto">
                            <h2 id="TituloDinero">{titulo}</h2>

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
                            <p>{horario}</p>
                            <a href={mapaBoton}>{direccion}</a>
                        </div>

                        <div className="Box2Btn">

                            <a href={`tel:${telefono}`}>
                                <ion-icon name="call-outline" size='large' id='icon'></ion-icon>
                            </a>
                            <a href={sitioWeb}>
                                <ion-icon name="globe-outline" size='large' id='icon'></ion-icon>
                            </a>
                            <a href={mapaBoton}>
                                <ion-icon name="navigate-circle-outline" size='large' id='icon'></ion-icon>
                            </a>
                            <a href={`mailto:${email}`}>
                                <ion-icon name="at-outline" size='large' id='icon'></ion-icon>
                            </a>

                        </div>
                    </div>

                    <p>{descripcion}</p>
                </div>

                <div className="Mapa">
                    <iframe id="MapaGoogle" src={mapa} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de Google con ubicaciones"></iframe>
                </div>
            </div>
        </section>
    );
}
export default TemplatePerfil;
