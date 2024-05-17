import React, { useState, useEffect } from "react";
import CardAsistencia from "./CardsTemplate.jsx";
// import { Link } from "react-router-dom";
import "../Style.css";

// Imagenes 
import conin from "./Imagenes/ConinLogoGrande.png";
import bancoSangre from "./Imagenes/bancoSangre.png";
import casaCuna from "./Imagenes/casaCuna.png";
import centroMoritas from "./Imagenes/centroMoritas.png";
import confluir from "./Imagenes/ConfluirPerfil.png";
import leonPerfil from "./Imagenes/LeonLogoGrande.png";
import fundacionManosSolidarias from "./Imagenes/FundacionManosSolidarias.png";
import maternidadMercedes from "./Imagenes/LogoHospitalMaternidad.png";
import nodoAmbiental from "./Imagenes/NodoAmbiental.png";
import onat from "./Imagenes/onatperfil.png";
import secretariaNinez from "./Imagenes/Subsecretaría.png";
import techo from "./Imagenes/techoPerfil.png";
import fundacionGuada from "./Imagenes/vallecitoGuada.png";



const Asistencia = () => {
    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem("currentPage");
        return savedPage ? parseInt(savedPage, 10) : 1;
    });

    // No necesitas esta variable si no la estás utilizando
    // const [currentSection, setCurrentSection] = useState('');

    // Define los datos en el componente directamente, ya que solo los utilizas aquí
    const data = [
        {
            imagen: conin,
            titulo: "Fundacion Conin",
            etiquetas: ["Dinero", "Comida", "Asistencia"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/conin"
        },

        {
            imagen: bancoSangre,
            titulo: "Banco de Sangre",
            etiquetas: ["Asistencia"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/banco-de-sangre"
        },

        {
            imagen: casaCuna,
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
            imagen: confluir,
            titulo: "Confluir",
            etiquetas: ["Asistencia", "Comida"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/confluir"
        },

        {
            imagen: leonPerfil,
            titulo: "Fundación Leon",
            etiquetas: ["Dinero", "Asistencia", "Dinero"],
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
            imagen: maternidadMercedes,
            titulo: "Instituto de Maternidad y Ginecología Nuestra Señora de Las Mercedes",
            etiquetas: ["Asistencia", "Ropa"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/instituto-las-mercedes"
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
            imagen: onat,
            titulo: "Onat",
            etiquetas: ["Asistencia"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/onat"
        },

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

    const cardsPerPage = 5;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

    useEffect(() => {
        localStorage.setItem("currentPage", currentPage);
        window.scrollTo(0, 0);
    }, [currentPage]);

    // No necesitas esta useEffect si no estás utilizando currentSection
    // useEffect(() => {
    //     // Al cambiar de sección, reiniciar la ubicación
    //     window.scrollTo(0, 0);
    // }, [currentSection]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className="AsistenciaContainer">
            <h2 id="TituloAsistenciaContainer">Asistencia</h2>

            {currentCards.map((card, index) => (
                <CardAsistencia
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


export default Asistencia;

