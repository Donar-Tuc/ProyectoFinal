import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { etiquetas } from "../../Etiquetas/index";
import { useFetchImg } from "../../../../../logic/useFetch";

const CardVerTodo = ({ id, imagen, titulo, horario, tituloEtiquetas }) =>  {
        /* const { id, imagen, titulo, horario, tituloEtiquetas } = this.props; */
        console.log(id);

        const { data, loading, error } = useFetchImg(`https://api-don-ar.vercel.app${imagen}`);

        

        return (
            <div className="CardAsistencia">
                <div className="ImagenContainer">
                    {   
                        loading ? <p>Cargando logo...</p> : 
                        error ? <p>Error cargando el logo</p> : 
                        <img src={data} alt={`logo ${titulo}`} id="ImagenCategoriaCard" />
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
                    {/* <p id="DecripcionAsistencia">{descripcion}</p> */}
                    <div id="ContainerBotones">
                        <Link to={`/fundaciones/${id}`}>
                            {console.log("Esto envia el cardTemplate como id: " + id)}
                            <button id="BotonLink">Ver perfil</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
}

export default CardVerTodo;