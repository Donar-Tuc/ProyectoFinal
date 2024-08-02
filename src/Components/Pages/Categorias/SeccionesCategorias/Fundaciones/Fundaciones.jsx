import React, { useState, useEffect, useRef } from "react";
import { useScroll } from '../../../../../ScrollContext.js';
import CardVerTodo from "./CardTemplate.jsx";
import "./Styles/CardsFundaciones.css";
import { useFetch } from "../../../../../logic/useFetch.js";
import { useParams } from "react-router-dom";
import { useGeoCode } from "../../../../../logic/useGeoCode.js";

const Fundaciones = () => {
    const { scrollPosition, setScrollPosition, page, setPage } = useScroll();
    const scrollRef = useRef();
    const [showSortedFundaciones, setShowSortedFundaciones] = useState(() => {
        const saved = localStorage.getItem('showSortedFundaciones');
        return saved !== null ? JSON.parse(saved) : false;
    });
    const categoria = useParams().categoria;
    let url = categoria
        ? `https://api-don-ar.vercel.app/fundaciones/etiqueta?etiqueta=${categoria}`
        : "https://api-don-ar.vercel.app/fundaciones";

    const { data, loading, error } = useFetch(url);
    const fundaciones = data ? data.list : [];
    const { getUserLocation, sortedData } = useGeoCode();

    useEffect(() => {
        getUserLocation();
    }, []);


    const sortedFundaciones = sortedData(fundaciones);

    /* Paginado */
    const cardsPerPage = 6;
    const indexOfLastCard = page * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const unsortedCards = fundaciones ? fundaciones.slice(indexOfFirstCard, indexOfLastCard) : [];
    const sortedCards = sortedFundaciones ? sortedFundaciones.slice(indexOfFirstCard, indexOfLastCard) : [];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollPosition;
        }
    }, [scrollPosition]);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setScrollPosition(scrollRef.current.scrollTop);
            }
        };

        const element = scrollRef.current;
        element.addEventListener('scroll', handleScroll);

        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, [setScrollPosition]);

    useEffect(() => {
        localStorage.setItem("currentPage", page);
        window.scrollTo(0, 0);
    }, [page]);

    useEffect(() => {
        localStorage.setItem('showSortedFundaciones', JSON.stringify(showSortedFundaciones));
    }, [showSortedFundaciones]);

    const paginate = (pageNumber) => {
        setPage(pageNumber);
    };

    const handleShowFundacionesSorted = () => {
        setShowSortedFundaciones(!showSortedFundaciones);
    };

    return (
        <div className="AsistenciaContainer" ref={scrollRef} style={{ height: '100%', overflowY: 'scroll' }}>
            <h2 className="TituloDeCategoria" id="TituloAsistenciaContainer">{categoria ? categoria : "Ver todo"}</h2>
            <button
                className="BtnOrdenarGeolocalizacion"
                onClick={handleShowFundacionesSorted}
            >
                {showSortedFundaciones ? "No ordenar por más cercanos" : "Ordenar por más cercanos"}
            </button>
            <div className="containerCards">
                {
                    !showSortedFundaciones
                        ? unsortedCards.map((card) => (
                            <CardVerTodo
                                id={card._id}
                                key={card._id}
                                imagen={card.logo}
                                titulo={card.titulo}
                                horario={card.horario}
                                descripcion={card.descripcion}
                                url={card.url}
                                tituloEtiquetas={card.tituloEtiquetas}
                            />
                        ))
                        : sortedCards.map((card) => (
                            <CardVerTodo
                                id={card._id}
                                key={card._id}
                                imagen={card.logo}
                                titulo={card.titulo}
                                horario={card.horario}
                                descripcion={card.descripcion}
                                url={card.url}
                                tituloEtiquetas={card.tituloEtiquetas}
                            />
                        ))
                }
            </div>

            <div id="PaginationButtons">
                <button
                    className="BtnNextAndPrevious"
                    onClick={() => paginate(page - 1)}
                    disabled={page === 1}
                >
                    <div className="OnBtnContainerAntes">
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                        Anterior
                    </div>
                </button>
                <button
                    className="BtnNextAndPrevious"
                    onClick={() => paginate(page + 1)}
                    disabled={fundaciones && indexOfLastCard >= fundaciones.length}
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

export default Fundaciones;
