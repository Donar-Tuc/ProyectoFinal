import React, { useEffect, useRef } from "react";
import { useScroll } from '../../../../../ScrollContext';
import CardRopa from "./CardsTemplate.jsx";
import "../Style.css";

// Imagenes 
import Caritas from "./Imagenes/caritas.png";
import Casacuna from "./Imagenes/casaCuna.png";
import maternidad from "./Imagenes/LogoHospitalMaternidad.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
// import comidaEtiqueta from './Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';
import hogarEtiqueta from './Imagenes/home-outline.svg';
import escolarEtiqueta from './Imagenes/school-outline.svg';
import ropaEtiqueta from './Imagenes/shirt-outline.svg';
import juguetesEtiqueta from './Imagenes/extension-puzzle-outline.svg';
import medicamentosEtiqueta from './Imagenes/medkit-outline.svg'


const Ropa = () => {
    const { scrollPosition, setScrollPosition, page, setPage } = useScroll();
    const scrollRef = useRef();


    const data = [
        {
            imagen: Caritas,
            titulo: "Fundacion Caritas",
            etiquetas: [dineroEtiqueta, ropaEtiqueta, juguetesEtiqueta, medicamentosEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/caritas",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados", "Medicamentos"],

        },
        {
            imagen: Casacuna,
            titulo: "Casa Cuna",
            etiquetas: [asistenciaEtiqueta, hogarEtiqueta, escolarEtiqueta, ropaEtiqueta, juguetesEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/casa-cuna",
            tituloEtiquetas: ["Asistencia y voluntariados", "Elementos del hogar", "Útiles escolares", "Vestimenta", "Juguetes"]

        },

        {
            imagen: maternidad,
            titulo: "Instituto Señora de Las Mercedes",
            etiquetas: [asistenciaEtiqueta, ropaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/instituto-las-mercedes",
            tituloEtiquetas: ["Asistencia y voluntariados", "Vestimenta"]

        },

    ];

    const cardsPerPage = 6;
    const indexOfLastCard = page * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

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
            <h2 id="TituloAsistenciaContainer">Ropa</h2>
            <div className="containerCards">

                {currentCards.map((card, index) => (
                    <CardRopa
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
                    disabled={indexOfLastCard >= data.length}
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