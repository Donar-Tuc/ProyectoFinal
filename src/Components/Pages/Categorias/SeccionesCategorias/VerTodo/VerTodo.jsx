import React, { useState, useEffect } from "react";
import CardVerTodo from "./CardTemplate.jsx";
// import { Link } from "react-router-dom";
import "../Style.css";

// Imagenes 
import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import fann from "./Imagenes/FannLogoGrande copy.png";
import bancoSangre from "./Imagenes/bancoSangre.png";
import Caritas from "./Imagenes/caritas.png";
import Casacuna from "./Imagenes/casaCuna.png";
import CocinaMariaGuadalupePerfil from "./Imagenes/cocinaGuada.png";
import CocinaNuevaAmanecer from "./Imagenes/CocinaNuevaAmanecer.png";
import cocinaUnidosTriunfar from "./Imagenes/CocinaUnidosTriunfar.png";
import comedorManosOlla from "./Imagenes/ComedorManosOlla.png";
import comedorReyes from "./Imagenes/comedorReyes.png";
import confluir from "./Imagenes/ConfluirPerfil.png";
import LeonPerfil from "./Imagenes/LeonLogoGrande.png";
import fundacionManosSolidarias from "./Imagenes/FundacionManosSolidarias.png";
import nodoAmbiental from "./Imagenes/NodoAmbiental.png";
import Onat from "./Imagenes/onatperfil.png";
import secretariaNinez from "./Imagenes/Subsecretaría.png";
import techo from "./Imagenes/techoPerfil.png";
import fundacionGuada from "./Imagenes/vallecitoGuada.png";
import centroMoritas from "./Imagenes/centroMoritas.png";


const VerTodo = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 5;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

    // Scroll to Top Function

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar hacia arriba al cambiar de página
    }, [currentPage]); // Se ejecuta cada vez que cambia la página actual

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="AsistenciaContainer">
            <h2 id="TituloAsistenciaContainer">Ver todo</h2>

            {currentCards.map((card, index) => (
                <CardVerTodo
                    key={index}
                    imagen={card.imagen}
                    titulo={card.titulo}
                    horario={card.horario}
                    etiquetas={card.etiquetas}
                    descripcion={card.descripcion}
                    url={card.url}
                />
            ))}

            <div id="PaginationButtons">
                <button
                    className="BtnNextAndPrevious"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <div className="OnBtnContainerAntes">
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                        Anterior
                    </div>
                </button>
                <button
                    className="BtnNextAndPrevious"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentCards.length < cardsPerPage}
                >
                    <div className="OnBtnContainerDespues">
                        Siguiente
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                    </div>
                </button>
            </div>
        </div>
    );
};

const data = [
    { 
        imagen: BancoAlimentos, 
        titulo: "Banco de Alimentos", 
        etiquetas: ["Dinero", "Comida"], 
        horario: "9am - 4pm de lunes a viernes", 
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
        url: "/banco-alimentos" 
        },

        { 
            imagen: fann, 
            titulo: "Fundacion Fann", 
            etiquetas: ["Dinero", "Comida"], 
            horario: "9am - 4pm de lunes a viernes", 
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
            url: "/banco-alimentos" 
            },
        
            
                { 
                    imagen: bancoSangre, 
                    titulo: "Banco de Sangre", 
                    etiquetas: ["Asistencia"], 
                    horario: "9am - 4pm de lunes a viernes", 
                    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                    url: "/banco-sangre" 
                    },
                
                    { 
                        imagen: Caritas, 
                        titulo: "Fundacion Caritas", 
                        etiquetas: ["Dinero", "Hogar", "Ropa"], 
                        horario: "9am - 4pm de lunes a viernes", 
                        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                        url: "/caritas" 
                        },
                    
                        { 
                            imagen: Casacuna , 
                            titulo: "Casa Cuna", 
                            etiquetas: ["Asistencia", "Hogar", "Escolar", "Ropa"], 
                            horario: "9am - 4pm de lunes a viernes", 
                            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                            url: "/casa-cuna" 
                            },
                        
                            { 
                                imagen: centroMoritas, 
                                titulo: "Centro de Rehabilitación Las Moritas", 
                                etiquetas: ["Dinero", "Asistencia"], 
                                horario: "9am - 4pm de lunes a viernes", 
                                descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                url: "/Centro-las-moritas" 
                            },
                            
                            { 
                                imagen: CocinaMariaGuadalupePerfil, 
                                titulo: "Comunitaria María de Guadalupe", 
                                etiquetas: ["Dinero", "Comida"], 
                                horario: "9am - 4pm de lunes a viernes", 
                                descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                url: "/cocina-comunitaria-maria-guadalupe" 
                                },
                            
                                { 
                                    imagen: CocinaNuevaAmanecer, 
                                    titulo: "Cocina Comunitaria Nueva", 
                                    etiquetas: ["Dinero", "Comida"], 
                                    horario: "9am - 4pm de lunes a viernes", 
                                    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                    url: "/cocina-nueva-amanecer" 
                                    },
                                

                                    { 
                                        imagen: cocinaUnidosTriunfar, 
                                        titulo: "Comunitaria Unidos para Triunfar", 
                                        etiquetas: ["Dinero", "Comida"], 
                                        horario: "9am - 4pm de lunes a viernes", 
                                        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                        url: "/cocina-comunitaria-unidos"
                                        },

                                        { 
                                            imagen: comedorManosOlla, 
                                            titulo: "Comedor Manos a la Olla", 
                                            etiquetas: ["Dinero", "Comida"], 
                                            horario: "9am - 4pm de lunes a viernes", 
                                            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                            url: "/comedor-manos-olla" 
                                            },
                                        
                                            { 
                                                imagen: comedorReyes, 
                                                titulo: "Comedor Reyes", 
                                                etiquetas: ["Dinero", "Comida"], 
                                                horario: "9am - 4pm de lunes a viernes", 
                                                descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                url: "/comedor-reyes" 
                                                },
                                            
                                                { 
                                                    imagen: confluir, 
                                                    titulo: "Confluir", 
                                                    etiquetas: ["Asistencia", "Comida"], 
                                                    horario: "9am - 4pm de lunes a viernes", 
                                                    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                    url: "/confluir" 
                                                    },

                                                    { 
                                                        imagen: LeonPerfil, 
                                                        titulo: "Fundación Leon", 
                                                        etiquetas: ["Dinero", "Asistencia"], 
                                                        horario: "9am - 4pm de lunes a viernes", 
                                                        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                        url: "/fundacion-leon" 
                                                        },
                                                    

                                                        { 
                                                            imagen: fundacionManosSolidarias, 
                                                            titulo: "Fundación Manos Solidarias", 
                                                            etiquetas: ["Dinero", "Comida", "Asistencia"], 
                                                            horario: "9am - 4pm de lunes a viernes", 
                                                            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                            url: "/fundacion-manos-solidarias" },
                                                        
                                                

                                                            { 
                                                                imagen: nodoAmbiental, 
                                                                titulo: "Nodo Ambiental", 
                                                                etiquetas: ["Dinero", "Asistencia"], 
                                                                horario: "9am - 4pm de lunes a viernes", 
                                                                descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                                url: "/nodo-ambiental" 
                                                            },
                                                            
                                                            { 
                                                                imagen: Onat, 
                                                                titulo: "Onat", 
                                                                etiquetas: ["Asistencia"], 
                                                                horario: "9am - 4pm de lunes a viernes", 
                                                                descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                                url: "/onat" },

                                                                { 
                                                                    imagen: secretariaNinez, 
                                                                    titulo: "Subsecretaría de Niñez", 
                                                                    etiquetas: ["Dinero", "Comida", "Asistencia"], 
                                                                    horario: "9am - 4pm de lunes a viernes", 
                                                                    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                                    url: "/secretaria-ninez" 
                                                                },

                                                                { 
                                                                    imagen: techo, 
                                                                    titulo: "Techo", 
                                                                    etiquetas: ["Dinero", "Asistencia"], 
                                                                    horario: "9am - 4pm de lunes a viernes", 
                                                                    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                                    url: "/techo" },

                                                                    { 
                                                                        imagen: fundacionGuada, 
                                                                        titulo: "El vallecito de la Guadalupe", 
                                                                        etiquetas: ["Dinero", "Asistencia"], 
                                                                        horario: "9am - 4pm de lunes a viernes", 
                                                                        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                                                        url: "/banco-alimentos" },
                                                                    
                                                                
                                                                
                                                            
                                                            
                                    
];


export default VerTodo;