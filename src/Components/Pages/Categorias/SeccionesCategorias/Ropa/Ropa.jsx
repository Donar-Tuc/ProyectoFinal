import React, { useState, useEffect } from "react";
import CardRopa from "./CardsTemplate.jsx";
import "../Style.css";

// Imagenes 
import Caritas from "./Imagenes/caritas.png";
import Casacuna from "./Imagenes/casaCuna.png";
import maternidad from "./Imagenes/LogoHospitalMaternidad.png";

const Ropa = () => {
    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem("currentPage");
        return savedPage ? parseInt(savedPage, 10) : 1;
    });

    // No necesitas esta variable si no la estás utilizando
    // const [currentSection, setCurrentSection] = useState('');

    // Define los datos en el componente directamente, ya que solo los utilizas aquí
    const data = [
        {
            imagen: Caritas,
            titulo: "Fundacion Caritas",
            etiquetas: ["Dinero", "Hogar", "Ropa"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/caritas"
        },
        {
            imagen: Casacuna,
            titulo: "Casa Cuna",
            etiquetas: ["Asistencia", "Hogar", "Escolar", "Ropa"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/casa-cuna"
        },

        {
            imagen: maternidad,
            titulo: "Instituto Señora de Las Mercedes",
            etiquetas: ["Asistencia", "Ropa"],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/instituto-las-mercedes"
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
            <h2 id="TituloAsistenciaContainer">Ropa</h2>

            {currentCards.map((card, index) => (
                <CardRopa
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

export default Ropa;