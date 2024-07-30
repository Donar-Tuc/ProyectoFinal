import React, { useEffect, useRef } from "react";
import { useScroll } from '../../../../../ScrollContext.js';
import CardVerTodo from "./CardTemplate.jsx";
import "./Styles/CardsFundaciones.css";
import { useFetch } from "../../../../../logic/useFetch.js";
import { useParams } from "react-router-dom";

const Fundaciones = () => {
    const { scrollPosition, setScrollPosition, page, setPage } = useScroll();
    const scrollRef = useRef();

    const categoria = useParams().categoria;
    let url = "";

    if (!categoria) {
        url = "https://api-don-ar.vercel.app/fundaciones";
    }
    else {
        url = `https://api-don-ar.vercel.app/fundaciones/etiqueta?etiqueta=${categoria}`;
    }

    const { data, loading, error } = useFetch(url);
    const fundaciones = data ? data.list : [];


    /* Paginado */
    const cardsPerPage = 6;
    const indexOfLastCard = page * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = fundaciones ? fundaciones.slice(indexOfFirstCard, indexOfLastCard) : [];

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

    const paginate = (pageNumber) => {
        setPage(pageNumber);
    };


    return (
        <div className="AsistenciaContainer" ref={scrollRef} style={{ height: '100%', overflowY: 'scroll' }}>
            <h2 className="TituloDeCategoria" id="TituloAsistenciaContainer">{categoria ? categoria : "Ver todo"}</h2>
            <div className="containerCards">

                {currentCards.map((card, /* index */) => (
                    <CardVerTodo
                        id={card._id}
                        key={card._id}
                        imagen={card.logo}
                        titulo={card.titulo}
                        horario={card.horario}
                        /* etiquetas={card.etiquetas} */
                        descripcion={card.descripcion}
                        url={card.url}
                        tituloEtiquetas={card.tituloEtiquetas}
                    />
                ))}
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