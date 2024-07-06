import React, { useState, useEffect } from "react";
import { useFetch } from "../../../logic/useFetch.js";
import Card from "./CardsEventos.jsx";
import "./css/eventos.css";

const Eventos = () => {
    let url = "https://api-don-ar.vercel.app/eventos";
    const { data, loading, error } = useFetch(url);
    const eventos = data ? data.list : [];

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = eventos.slice(indexOfFirstCard, indexOfLastCard);
    
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar hacia arriba al cambiar de página
    }, [currentPage]); // Se ejecuta cada vez que cambia la página actual

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const isLastPage = currentCards.length < cardsPerPage || indexOfLastCard >= eventos.length;



    return (
        <div className="EventosContainer">
            <h2 id="TituloEventosContainer">Eventos</h2>
            <div className="containerCardsEventos">


                {currentCards.map((card, index) => (
                    <Card
                        key={index}
                        imagen={card.imagen}
                        titulo={card.titulo}
                        etiquetas={card.etiquetas}
                        descripcion={card.descripcion}
                        url={card.url}
                        tituloEtiquetas={card.tituloEtiquetas}

                    />
                ))}
            </div>

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
                    disabled={isLastPage}
                >
                    <div className="OnBtnContainerDespues">
                        Siguiente
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                    </div>
                </button>
            </div>
        </div>
    );
}



export default Eventos;
