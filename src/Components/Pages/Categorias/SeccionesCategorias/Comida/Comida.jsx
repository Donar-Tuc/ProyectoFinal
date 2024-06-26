import React, { useEffect, useRef } from "react";
import { useScroll } from '../../../../../ScrollContext';
import CardComida from "./CardsTemplate.jsx";

import "../Style.css";

// Imagenes 
import conin from "./Imagenes/ConinLogoGrande.png";
import bancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import fann from "./Imagenes/FannLogoGrande copy.png";
import confluir from "./Imagenes/ConfluirPerfil.png";
import CocinaMariaGuadalupePerfil from "./Imagenes/cocinaGuada.png";
import fundacionManosSolidarias from "./Imagenes/FundacionManosSolidarias.png";
import CocinaNuevaAmanecer from "./Imagenes/CocinaNuevaAmanecer.png";
import cocinaUnidosTriunfar from "./Imagenes/CocinaUnidosTriunfar.png";
import comedorManosOlla from "./Imagenes/ComedorManosOlla.png";
import secretariaNinez from "./Imagenes/Subsecretaría.png";
import comedorReyes from "./Imagenes/comedorReyes.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';
import juguetesEtiqueta from './Imagenes/extension-puzzle-outline.svg';

// import hogarEtiqueta from './Imagenes/home-outline.svg';
// import escolarEtiqueta from './Imagenes/school-outline.svg';
// import ropaEtiqueta from './Imagenes/shirt-outline.svg'

const Comida = () => {

    const { scrollPosition, setScrollPosition, page, setPage } = useScroll();
    const scrollRef = useRef();

    const data = [
        {
            imagen: bancoAlimentos,
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
            imagen: CocinaMariaGuadalupePerfil,
            titulo: "C. Maria de Guadalupe",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/cocina-comunitaria-maria-guadalupe",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]

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
            imagen: cocinaUnidosTriunfar,
            titulo: "C. Unidos para Triunfar",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/cocina-comunitaria-unidos",
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
            imagen: confluir,
            titulo: "Confluir",
            etiquetas: [comidaEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/confluir",
            tituloEtiquetas: ["Alimentos no perecederos", "Asistencia y voluntariados"]

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
            imagen: secretariaNinez,
            titulo: "Subsecretaría de Niñez",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta, juguetesEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/secretaria-ninez",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados", "Juguetes"]

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
            <h2 id="TituloAsistenciaContainer">Comida</h2>
            <div className="containerCards">
                {currentCards.map((card, index) => (
                    <CardComida
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


export default Comida;