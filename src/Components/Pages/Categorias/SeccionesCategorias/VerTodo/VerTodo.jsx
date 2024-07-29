import React, { useState, useEffect, useRef } from "react";
import { useScroll } from '../../../../../ScrollContext.js';
import CardVerTodo from "./CardTemplate.jsx";
import "../Style.css";

// Imagenes 
import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import fann from "./Imagenes/FannLogoGrande copy.png";
import bancoSangre from "./Imagenes/bancoSangre.png";
import Caritas from "./Imagenes/caritas.png";
import Casacuna from "./Imagenes/casaCuna.png";
import CocinaMariaGuadalupePerfil from "./Imagenes/cocinaGuada.png";
import CocinaNuevaAmanecer from "./Imagenes/CocinaNuevaAmanecer.png";
import cocinaUnidosTriunfar from "./Imagenes/CocinaUnidosTriunfar.png";
import comedorManosOlla from "./Imagenes/ComedorManosOlla.png";
import comedorReyes from "./Imagenes/comedorReyes.png";
import confluir from "./Imagenes/ConfluirPerfil.png";
import LeonPerfil from "./Imagenes/LeonLogoGrande.png";
import fundacionManosSolidarias from "./Imagenes/FundacionManosSolidarias.png";
import nodoAmbiental from "./Imagenes/NodoAmbiental.png";
import Onat from "./Imagenes/onatperfil.png";
import secretariaNinez from "./Imagenes/Subsecretaría.png";
import techo from "./Imagenes/techoPerfil.png";
import fundacionGuada from "./Imagenes/vallecitoGuada.png";
import centroMoritas from "./Imagenes/centroMoritas.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';
import escolarEtiqueta from './Imagenes/school-outline.svg';
import ropaEtiqueta from './Imagenes/shirt-outline.svg';
import medicamentosEtiqueta from './Imagenes/medkit-outline.svg';
import juguetesEtiqueta from './Imagenes/extension-puzzle-outline.svg';

const VerTodo = () => {
    const { scrollPosition, setScrollPosition, page, setPage } = useScroll();
    const scrollRef = useRef();
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setUserLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }, error => {
                console.error("Error obteniendo la ubicación del usuario:", error);
            });
        }
    }, []);

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radio de la Tierra en km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distancia en km
    };

    const data = [
        {
            imagen: BancoAlimentos,
            titulo: "Banco de Alimentos",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/banco-alimentos",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"],
            latitude: -30.829869,
            longitude: -70.212976
        },
        {
            imagen: fann,
            titulo: "Fundacion Fann",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/fann",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"],
            latitude: -26.800000,
            longitude: -65.287000
        },
        {
            imagen: bancoSangre,
            titulo: "Banco de Sangre",
            etiquetas: [asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/banco-de-sangre",
            tituloEtiquetas: ["Asistencia y voluntariados"],
            latitude: -34.6083,
            longitude: -58.3712
        },
        {
            imagen: Caritas,
            titulo: "Fundacion Caritas",
            etiquetas: [dineroEtiqueta, ropaEtiqueta, juguetesEtiqueta, medicamentosEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/caritas",
            tituloEtiquetas: ["Donaciones monetarias", "Vestimenta", "Juguetes", "Medicamentos"],
            latitude: -34.6118,
            longitude: -58.4173
        },
        {
            imagen: Casacuna,
            titulo: "Casa Cuna",
            etiquetas: [escolarEtiqueta, ropaEtiqueta, juguetesEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/casa-cuna",
            tituloEtiquetas: ["Útiles escolares", "Vestimenta", "Juguetes"],
            latitude: -34.6159,
            longitude: -58.4046
        },
        {
            imagen: centroMoritas,
            titulo: "C.R Las Moritas",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/Centro-las-moritas",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"],
            latitude: -31.4173,
            longitude: -64.183
        },
        {
            imagen: CocinaMariaGuadalupePerfil,
            titulo: "C. Maria de Guadalupe",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/cocina-comunitaria-maria-guadalupe",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"],
            latitude: -34.5948,
            longitude: -58.375
        },
        {
            imagen: CocinaNuevaAmanecer,
            titulo: "C.C Nueva Amanecer",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/cocina-nueva-amanecer",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"],
            latitude: -34.6062,
            longitude: -58.3775
        },
        {
            imagen: cocinaUnidosTriunfar,
            titulo: "C. Unidos para Triunfar",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/cocina-comunitaria-unidos",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"],
            latitude: -34.6022,
            longitude: -58.3847
        },
        {
            imagen: comedorManosOlla,
            titulo: "C. Manos a la Olla",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/comedor-manos-olla",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"],
            latitude: -34.6123,
            longitude: -58.4174
        },
        {
            imagen: comedorReyes,
            titulo: "Comedor Reyes",
            etiquetas: [dineroEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/comedor-reyes",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"],
            latitude: -34.6162,
            longitude: -58.4175
        },
        {
            imagen: confluir,
            titulo: "Confluir",
            etiquetas: [asistenciaEtiqueta, comidaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/confluir",
            tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"],
            latitude: -34.5994,
            longitude: -58.386
        },
        {
            imagen: LeonPerfil,
            titulo: "Fundación Leon",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/leon",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"],
            latitude: -34.6105,
            longitude: -58.379
        },
        {
            imagen: fundacionManosSolidarias,
            titulo: "Fundación Manos Solidarias",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/manos-solidarias",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"],
            latitude: -34.619,
            longitude: -58.4245
        },
        {
            imagen: nodoAmbiental,
            titulo: "Nodo Ambiental",
            etiquetas: [asistenciaEtiqueta, escolarEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/nodo-ambiental",
            tituloEtiquetas: ["Asistencia y voluntariados", "Útiles escolares"],
            latitude: -34.622,
            longitude: -58.4247
        },
        {
            imagen: Onat,
            titulo: "O.N.A.T",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/onat",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"],
            latitude: -34.6111,
            longitude: -58.4183
        },
        {
            imagen: secretariaNinez,
            titulo: "Subsecretaría de niñez",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta, ropaEtiqueta, juguetesEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/secretaria-ninez",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados", "Vestimenta", "Juguetes"],
            latitude: -34.6143,
            longitude: -58.4062
        },
        {
            imagen: techo,
            titulo: "Techo",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/techo",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"],
            latitude: -34.615,
            longitude: -58.416
        },
        {
            imagen: fundacionGuada,
            titulo: "Vallecito Guadalupano",
            etiquetas: [dineroEtiqueta, asistenciaEtiqueta],
            horario: "9am - 4pm de lunes a viernes",
            url: "/vallecito-guadalupano",
            tituloEtiquetas: ["Donaciones monetarias", "Asistencia y voluntariados"],
            latitude: -34.6187,
            longitude: -58.417
        }
    ];

    const sortedData = userLocation ?
        data.slice().sort((a, b) => {
            const distanceA = calculateDistance(userLocation.latitude, userLocation.longitude, a.latitude, a.longitude);
            const distanceB = calculateDistance(userLocation.latitude, userLocation.longitude, b.latitude, b.longitude);
            return distanceA - distanceB;
        }) : data;

    const cardsPerPage = 6;
    const indexOfLastCard = page * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = sortedData.slice(indexOfFirstCard, indexOfLastCard);

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
            <h2 id="TituloAsistenciaContainer">Ver todo</h2>
            <div className="containerCards">
                {currentCards.map((card, index) => (
                    <CardVerTodo
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
                    disabled={indexOfLastCard >= sortedData.length}
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

export default VerTodo;
