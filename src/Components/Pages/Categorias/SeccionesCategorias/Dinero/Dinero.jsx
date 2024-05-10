import React, { useState, useEffect } from "react";
import CardDinero from "./CardsTemplate.jsx";
import { Link } from "react-router-dom";
import "../Style.css";

// Imagenes 
import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import ConinLogo from "./Imagenes/ConinLogoGrande.png";
import Fann from "./Imagenes/FannLogoGrande.png";
import FundacionLeon from "./Imagenes/LeonLogoGrande.png";

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
    { imagen: BancoAlimentos, titulo: "Banco de Alimentos", etiquetas: ["Dinero", "Comida"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/banco-alimentos" },
    { imagen: ConinLogo, titulo: "FundacionConin", etiquetas: ["Dinero"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/conin" },
    { imagen: Fann, titulo: "Fundacion Fann", etiquetas: ["Dinero", "Hogar", "Asistencia"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/fann" },
    { imagen: FundacionLeon, titulo: "Fundacion Leon", etiquetas: ["Dinero", "Hogar"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: BancoAlimentos, titulo: "Banco de Alimentos", etiquetas: ["Dinero", "Comida"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/banco-alimentos" },
    { imagen: ConinLogo, titulo: "Fundacion Conin", etiquetas: ["Dinero"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/conin" },
    { imagen: Fann, titulo: "Fundacion Fann", etiquetas: ["Dinero", "Comida"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/fann" },
    { imagen: FundacionLeon, titulo: "Fundacion Leon", etiquetas: ["Dinero"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: BancoAlimentos, titulo: "Fundacion Banco de Alimentos", etiquetas: ["Dinero", "Comida"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/banco-alimentos" },
    { imagen: ConinLogo, titulo: "Fundacion Conin", etiquetas: ["Dinero"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/conin" },
    { imagen: Fann, titulo: "Fundacion Fann", etiquetas: ["Dinero", "Hogar", "Asistencia"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/fann" },
    { imagen: FundacionLeon, titulo: "Fundacion Leon", etiquetas: ["Dinero", "Hogar"], horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },

];


export default Dinero;