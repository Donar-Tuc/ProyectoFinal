import React, { useState, useEffect } from "react";
import CardDinero from "./CardsTemplate.jsx";
// import { Link } from "react-router-dom";
import "../Style.css";

// Imagenes 

import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import fann from "./Imagenes/FannLogoGrande copy.png";
import conin from "./Imagenes/ConinLogoGrande.png";
import Caritas from "./Imagenes/caritas.png";
import centroMoritas from "./Imagenes/centroMoritas.png";
import CocinaMariaGuadalupePerfil from "./Imagenes/cocinaGuada.png";
import fundacionGuada from "./Imagenes/vallecitoGuada.png";
import CocinaNuevaAmanecer from "./Imagenes/CocinaNuevaAmanecer.png";
import comedorManosOlla from "./Imagenes/ComedorManosOlla.png";
import comedorReyes from "./Imagenes/comedorReyes.png";
import LeonPerfil from "./Imagenes/LeonLogoGrande.png";
import fundacionManosSolidarias from "./Imagenes/FundacionManosSolidarias.png";
import nodoAmbiental from "./Imagenes/NodoAmbiental.png";
import secretariaNinez from "./Imagenes/Subsecretaría.png";
import techo from "./Imagenes/techoPerfil.png";



const Dinero = () => {
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
            <h2 id="TituloAsistenciaContainer">Dinero</h2>

            {currentCards.map((card, index) => (
                <CardDinero
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
            url: "/fann" 
            },

            { 
                imagen: conin, 
                titulo: "Fundacion Conin", 
                etiquetas: ["Dinero", "Comida", "Asistencia"], 
                horario: "9am - 4pm de lunes a viernes", 
                descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                url: "/conin" 
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
                        imagen: centroMoritas, 
                        titulo: "Centro de Rehabilitación Las Moritas", 
                        etiquetas: ["Dinero", "Asistencia"], 
                        horario: "9am - 4pm de lunes a viernes", 
                        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                        url: "/Centro-las-moritas" 
                    },

                    { 
                        imagen: CocinaMariaGuadalupePerfil, 
                        titulo: "Cocina Comunitaria María de Guadalupe", 
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
                                        imagen: LeonPerfil, 
                                        titulo: "Fundación Leon", 
                                        etiquetas: ["Dinero", "Asistencia"], 
                                        horario: "9am - 4pm de lunes a viernes", 
                                        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                        url: "/leon" 
                                        },

                                        { 
                                            imagen: fundacionManosSolidarias, 
                                            titulo: "Fundación Manos Solidarias", 
                                            etiquetas: ["Dinero", "Comida", "Asistencia"], 
                                            horario: "9am - 4pm de lunes a viernes", 
                                            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                            url: "/fundacion-manos-solidarias" 
                                        },

                                        { 
                                            imagen: nodoAmbiental, 
                                            titulo: "Nodo Ambiental", 
                                            etiquetas: ["Dinero", "Asistencia"], 
                                            horario: "9am - 4pm de lunes a viernes", 
                                            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                            url: "/nodo-ambiental" 
                                        },
                                        
                                        { 
                                            imagen: secretariaNinez, 
                                            titulo: "Subsecretaría de Niñez, Adolescencia y Familia", 
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
                                            url: "/techo" 
                                        },
                                        
                                        { 
                                            imagen: fundacionGuada, 
                                            titulo: "El vallecito de la Guadalupe", 
                                            etiquetas: ["Dinero", "Asistencia"], 
                                            horario: "9am - 4pm de lunes a viernes", 
                                            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", 
                                            url: "/fundacion-vallecito-de-la-guadalupe" 
                                        },
                                        
                                        
                                        
                                    
];


export default Dinero;