import React, { useEffect, useRef } from "react";
import { useScroll } from '../../../../../ScrollContext';
import CardDinero from "./CardsTemplate.jsx";
import "../Style.css";

// Imagenes 
import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import fann from "./Imagenes/FannLogoGrande copy.png";
import conin from "./Imagenes/ConinLogoGrande.png";
import Caritas from "./Imagenes/caritas.png";
import centroMoritas from "./Imagenes/centroMoritas.png";
import CocinaMariaGuadalupePerfil from "./Imagenes/cocinaGuada.png";
import fundacionGuada from "./Imagenes/vallecitoGuada.png";
import CocinaNuevaAmanecer from "./Imagenes/CocinaNuevaAmanecer.png";
import comedorManosOlla from "./Imagenes/ComedorManosOlla.png";
import comedorReyes from "./Imagenes/comedorReyes.png";
import LeonPerfil from "./Imagenes/LeonLogoGrande.png";
import fundacionManosSolidarias from "./Imagenes/FundacionManosSolidarias.png";
import nodoAmbiental from "./Imagenes/NodoAmbiental.png";
import secretariaNinez from "./Imagenes/Subsecretaría.png";
import techo from "./Imagenes/techoPerfil.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';
import ropaEtiqueta from './Imagenes/shirt-outline.svg';
import medicamentosEtiqueta from './Imagenes/medkit-outline.svg';
import juguetesEtiqueta from './Imagenes/extension-puzzle-outline.svg';

const Dinero = () => {
    const { scrollPosition, setScrollPosition, page, setPage } = useScroll();
    const scrollRef = useRef();

    const data = [
        {
            imagen: BancoAlimentos,
            titulo: "Banco de Alimentos",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/banco-alimentos",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },

        {
            imagen: fann,
            titulo: "Fundacion Fann",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/fann",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },

        {
            imagen: conin,
            titulo: "Fundacion Conin",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/conin",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]

        },

        {
            imagen: Caritas,
            titulo: "Fundacion Caritas",
            etiquetas: [dineroEtiqueta, ropaEtiqueta, juguetesEtiqueta, medicamentosEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/caritas",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados", "Medicamentos"],

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
            imagen: CocinaMariaGuadalupePerfil,
            titulo: "Cocina C. Maria de Guadalupe",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/cocina-comunitaria-maria-guadalupe",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },

        {
            imagen: CocinaNuevaAmanecer,
            titulo: "C.C Nueva Amanecer",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/cocina-nueva-amanecer",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },


        {
            imagen: comedorManosOlla,
            titulo: "C. Manos a la Olla",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/comedor-manos-olla",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },


        {
            imagen: comedorReyes,
            titulo: "Comedor Reyes",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/comedor-reyes",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },


        {
            imagen: LeonPerfil,
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
            imagen: nodoAmbiental,
            titulo: "Nodo Ambiental",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/nodo-ambiental",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"]

        },

        {
            imagen: secretariaNinez,
            titulo: "Subsecretaría de Niñez",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/secretaria-ninez",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]

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
        <div className="AsistenciaContainer" ref={scrollRef}>
            <h2 id="TituloAsistenciaContainer">Dinero</h2>
            <div className="containerCards">
                {currentCards.map((card, index) => (
                    <CardDinero
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

export default Dinero;
