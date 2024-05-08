import React, { useState } from "react";
import CardComida from "./CardsTemplate.jsx";
import { Link } from "react-router-dom"; 
import "../Style.css";

// Imagenes 
import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import ConinLogo from "./Imagenes/ConinLogoGrande.png";
import Fann from "./Imagenes/FannLogoGrande.png";
import FundacionLeon from "./Imagenes/LeonLogoGrande.png";

const Comida = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 5;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="AsistenciaContainer">
            <h2 id="TituloAsistenciaContainer">Comida</h2>

            {currentCards.map((card, index) => (
                <CardComida
                    key={index}
                    imagen={card.imagen}
                    titulo={card.titulo}
                    horario={card.horario}
                    descripcion={card.descripcion}
                    url={card.url}
                />
            ))}

            <div id="PaginationButtons">
                    <button className={`BtnNextAndPrevious ${currentPage === 1 && 'BtnPreviousDisabled'}`} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                        <div className="OnBtnContainerAntes">
                            <ion-icon name="arrow-back-circle-outline"></ion-icon>
                            Anterior
                        </div>
                    </button>
                    <button className={`BtnNextAndPrevious ${currentCards.length < cardsPerPage && 'BtnNextDisabled'}`} onClick={() => paginate(currentPage + 1)} disabled={currentCards.length < cardsPerPage}>                        <div className="OnBtnContainerDespues">
                            Siguiente
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                    </div>
               </button>
            </div>
        </div>
    );
};

const data = [
    { imagen: BancoAlimentos, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/banco-alimentos" },
    { imagen: ConinLogo, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/conin" },
    { imagen: Fann, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/fann" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },
    { imagen: FundacionLeon, titulo: "Banco de Alimentos", horario: "9am - 4pm de lunes a viernes", descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.", url: "/leon" },

];

export default Comida;