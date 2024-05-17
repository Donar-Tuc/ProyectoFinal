import React, { useState, useEffect } from "react";
import CardComida from "./CardsTemplate.jsx";

import "../Style.css";

// Imagenes 
import conin from "./Imagenes/ConinLogoGrande.png";
import bancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import fann from "./Imagenes/FannLogoGrande copy.png";
import confluir from "./Imagenes/ConfluirPerfil.png";
import CocinaMariaGuadalupePerfil from "./Imagenes/cocinaGuada.png";
import fundacionManosSolidarias from "./Imagenes/FundacionManosSolidarias.png";
import CocinaNuevaAmanecer from "./Imagenes/CocinaNuevaAmanecer.png";
import cocinaUnidosTriunfar from "./Imagenes/CocinaUnidosTriunfar.png";
import comedorManosOlla from "./Imagenes/ComedorManosOlla.png";
import secretariaNinez from "./Imagenes/Subsecretaría.png";
import comedorReyes from "./Imagenes/comedorReyes.png";



const Comida = () => {

    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem("currentPage");
        return savedPage ? parseInt(savedPage, 10) : 1;
    });

    // No necesitas esta variable si no la estás utilizando
    // const [currentSection, setCurrentSection] = useState('');

    // Define los datos en el componente directamente, ya que solo los utilizas aquí
    const data = [
        {
            imagen: bancoAlimentos,
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
            imagen: fundacionManosSolidarias,
            titulo: "Fundación Manos Solidarias",
            etiquetas: ["Dinero", "Comida", "Asistencia"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/fundacion-manos-solidarias"
        },

        {
            imagen: secretariaNinez,
            titulo: "Subsecretaría de Niñez",
            etiquetas: ["Dinero", "Comida", "Asistencia"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/secretaria-ninez"
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
            <h2 id="TituloAsistenciaContainer">Comida</h2>

            {currentCards.map((card, index) => (
                <CardComida
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
                    onClick={() => {
                        paginate(currentPage - 1);
                        window.scrollTo(0, 0);
                    }}
                    disabled={currentPage === 1}
                >
                    <div className="OnBtnContainerAntes">
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                        Anterior
                    </div>
                </button>
                <button
                    className="BtnNextAndPrevious"
                    onClick={() => {
                        paginate(currentPage + 1);
                        window.scrollTo(0, 0);
                    }}
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


export default Comida;