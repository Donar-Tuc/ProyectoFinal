import React, { useState, useEffect } from "react";
import CardJuguetes from "./CardsTemplate.jsx";
import "../Style.css";

// Imagenes 
import Caritas from "./Imagenes/caritas.png";
import Casacuna from "./Imagenes/casaCuna.png";
import secretariaNinez from "./Imagenes/Subsecretaría.png"

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';
import hogarEtiqueta from './Imagenes/home-outline.svg';
import escolarEtiqueta from './Imagenes/school-outline.svg';
import ropaEtiqueta from './Imagenes/shirt-outline.svg';
import juguetesEtiqueta from './Imagenes/extension-puzzle-outline.svg';
import medicamentosEtiqueta from './Imagenes/medkit-outline.svg'



const Juguetes = () => {
    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem("currentPage");
        return savedPage ? parseInt(savedPage, 10) : 1;
    });


    const data = [
        {
            imagen: Caritas,
            titulo: "Fundacion Caritas",
            etiquetas: [dineroEtiqueta, ropaEtiqueta, juguetesEtiqueta, medicamentosEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/caritas",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos","Asistencia y voluntariados", "Medicamentos" ],

        },
        {
            imagen: Casacuna,
            titulo: "Casa Cuna",
            etiquetas: [asistenciaEtiqueta, hogarEtiqueta, escolarEtiqueta, ropaEtiqueta, juguetesEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/casa-cuna",
            tituloEtiquetas: ["Asistencia y voluntariados", "Elementos del hogar","Útiles escolares","Vestimenta", "Juguetes" ]

        },

        {
            imagen: secretariaNinez,
            titulo: "Subsecretaría de Niñez",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta, juguetesEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/secretaria-ninez",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados","Juguetes"]

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


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="AsistenciaContainer">
            <h2 id="TituloAsistenciaContainer">Juguetes</h2>

            {currentCards.map((card, index) => (
                <CardJuguetes
                    key={index}
                    imagen={card.imagen}
                    titulo={card.titulo}
                    horario={card.horario}
                    etiquetas={card.etiquetas}
                    descripcion={card.descripcion}
                    url={card.url}
                    tituloEtiquetas={card.tituloEtiquetas}
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



export default Juguetes;