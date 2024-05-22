import React, { useState, useEffect } from "react";
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
import hogarEtiqueta from './Imagenes/home-outline.svg';
import escolarEtiqueta from './Imagenes/school-outline.svg';
import ropaEtiqueta from './Imagenes/shirt-outline.svg'

const Comida = () => {

    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem("currentPage");
        return savedPage ? parseInt(savedPage, 10) : 1;
    });


    const data = [
        {
            imagen: bancoAlimentos,
            titulo: "Banco de Alimentos",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/banco-alimentos",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },

        {
            imagen: fann,
            titulo: "Fundacion Fann",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/fann",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },

        {
            imagen: conin,
            titulo: "Fundacion Conin",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/conin",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]

        },

        {
            imagen: CocinaMariaGuadalupePerfil,
            titulo: "Comunitaria María de Guadalupe",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/cocina-comunitaria-maria-guadalupe",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]

        },

        {
            imagen: CocinaNuevaAmanecer,
            titulo: "Cocina Comunitaria Nueva",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/cocina-nueva-amanecer",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },


        {
            imagen: cocinaUnidosTriunfar,
            titulo: "Comunitaria Unidos para Triunfar",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/cocina-comunitaria-unidos",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },

        {
            imagen: comedorManosOlla,
            titulo: "Comedor Manos a la Olla",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/comedor-manos-olla",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },

        {
            imagen: comedorReyes,
            titulo: "Comedor Reyes",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/comedor-reyes",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"]

        },


        {
            imagen: confluir,
            titulo: "Confluir",
            etiquetas: [comidaEtiqueta , asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/confluir",
            tituloEtiquetas: ["Alimentos no perecederos", "Asistencia y voluntariados"]

        },



        {
            imagen: fundacionManosSolidarias,
            titulo: "Fundación Manos Solidarias",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/fundacion-manos-solidarias",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]

        },

        {
            imagen: secretariaNinez,
            titulo: "Subsecretaría de Niñez",
            etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
            url: "/secretaria-ninez",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]

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


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className="AsistenciaContainer">
            <h2 id="TituloAsistenciaContainer">Comida</h2>

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
            <div id="PaginationButtons">
                <button
                    className="BtnNextAndPrevious"
                    onClick={() => {
                        paginate(currentPage - 1);
                        window.scrollTo(0, 0);
                    }}
                    disabled={currentPage === 1}
                >
                    <div className="OnBtnContainerAntes">
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                        Anterior
                    </div>
                </button>
                <button
                    className="BtnNextAndPrevious"
                    onClick={() => {
                        paginate(currentPage + 1);
                        window.scrollTo(0, 0);
                    }}
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


export default Comida;