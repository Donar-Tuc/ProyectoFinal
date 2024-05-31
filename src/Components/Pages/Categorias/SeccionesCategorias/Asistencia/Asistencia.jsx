import React, { useEffect, useRef } from "react";
import { useScroll } from '../../../../../ScrollContext';
import CardAsistencia from "./CardsTemplate";
import "../Style.css";

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

import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';
import hogarEtiqueta from './Imagenes/home-outline.svg';
import escolarEtiqueta from './Imagenes/school-outline.svg';
import ropaEtiqueta from './Imagenes/shirt-outline.svg';
import juguetesEtiqueta from './Imagenes/extension-puzzle-outline.svg';

const Asistencia = () => {
    const { scrollPosition, setScrollPosition, page, setPage } = useScroll();
    const scrollRef = useRef();

    const data = [
        {
            imagen: conin,
            titulo: "Fundacion Conin",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/conin",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
        },

        {
            imagen: bancoSangre,
            titulo: "Banco de Sangre",
            etiquetas: [asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/banco-de-sangre",
            tituloEtiquetas: ["Asistencia y voluntariados"]

        },

        {
            imagen: casaCuna,
            titulo: "Casa Cuna",
            etiquetas: [asistenciaEtiqueta, hogarEtiqueta, escolarEtiqueta, ropaEtiqueta, juguetesEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/casa-cuna",
            tituloEtiquetas: ["Asistencia y voluntariados", "Elementos del hogar", "Útiles escolares", "Vestimenta", "Juguetes"]

        },

        {
            imagen: centroMoritas,
            titulo: "C.R Las Moritas",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/Centro-las-moritas",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"]

        },

        {
            imagen: confluir,
            titulo: "Confluir",
            etiquetas: [asistenciaEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/confluir",
            tituloEtiquetas: ["Asistencia y voluntariados", "Alimentos no perecederos"]

        },

        {
            imagen: leonPerfil,
            titulo: "Fundación Leon",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/leon",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"]

        },


        {
            imagen: fundacionManosSolidarias,
            titulo: "Fundación Manos Solidarias",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/fundacion-manos-solidarias",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]

        },

        {
            imagen: maternidadMercedes,
            titulo: "Instituto de Maternidad",
            etiquetas: [asistenciaEtiqueta, ropaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/instituto-las-mercedes",
            tituloEtiquetas: ["Asistencia y voluntariados", "Vestimenta"]

        },

        {
            imagen: nodoAmbiental,
            titulo: "Nodo Ambiental",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/nodo-ambiental",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"]

        },

        {
            imagen: onat,
            titulo: "Onat",
            etiquetas: [asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/onat",
            tituloEtiquetas: ["Asistencia y voluntariados"]

        },

        {
            imagen: secretariaNinez,
            titulo: "Subsecretaría de Niñez",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta, juguetesEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/secretaria-ninez",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados", "Juguetes"]

        },

        {
            imagen: techo,
            titulo: "Techo",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/techo",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"]

        },


        {
            imagen: fundacionGuada,
            titulo: "El vallecito de la Guadalupe",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/fundacion-vallecito-de-la-guadalupe",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"]

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

            <h2 id="TituloAsistenciaContainer">Asistencia</h2>
            <div className="containerCards">
                {currentCards.map((card, index) => (
                    <CardAsistencia
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

export default Asistencia;
