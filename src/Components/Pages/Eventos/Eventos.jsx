// eventos.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CardEvento from "./CardsEventos.jsx";
import "./css/eventos.css";
import PopUp from "./PopUp.js";

// Imágenes
import BancoAlimentos from "./imagenes/BancoAlimentos.png";
import Conin from "./imagenes/Conin.png";
import Fann from "./imagenes/Fann.png";
import FundacionLeon from "./imagenes/Leon.png";

// Icons para etiquetas
import dineroEtiqueta from './imagenes/card-outline.svg';
import comidaEtiqueta from './imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './imagenes/alarm-outline.svg';
import hogarEtiqueta from './imagenes/home-outline.svg';

const Eventos = ({ isLoggedIn }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate(); // Hook para redireccionar

  const cardsPerPage = 6;

  // Obtener la ubicación del usuario al cargar el componente
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

  // Función para calcular la distancia entre dos puntos geográficos
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

  // Ordenar eventos según la distancia a la ubicación del usuario
  const sortedEvents = userLocation ?
    data.slice().sort((a, b) => {
      const distanceA = calculateDistance(userLocation.latitude, userLocation.longitude, a.latitude, a.longitude);
      const distanceB = calculateDistance(userLocation.latitude, userLocation.longitude, b.latitude, b.longitude);
      return distanceA - distanceB;
    }) : data;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedEvents.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia arriba al cambiar de página
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const togglePopup = () => {
    setShowCreateForm(!showCreateForm); // Cambiar el estado para mostrar/ocultar el formulario
  };

  const addEvent = (eventData) => {
    setEvents([eventData, ...events]);
    setShowCreateForm(false); // Cerrar el formulario después de agregar el evento
  };

  const totalPages = Math.ceil(sortedEvents.length / cardsPerPage);

  const handleMisEventosClick = () => {
    navigate('/mis-eventos'); // Redireccionar a la página de "Mis Eventos"
  };

  return (
    <div className="EventosContainer">
      <h2 id="TituloEventosContainer">Eventos</h2>

      {isLoggedIn && (
        <div className="ContainerBoton">
          <button onClick={togglePopup} className="BtnEventosPrincipal">Crear Evento</button>
          <button onClick={handleMisEventosClick} className="BtnEventosPrincipal">Mis Eventos</button>
        </div>
      )}

      {showCreateForm && <PopUp addEvent={addEvent} togglePopup={togglePopup} />}

      <div className="containerCardsEventos">
        {currentCards.map((card, index) => (
          <CardEvento
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
          disabled={currentPage === totalPages}
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

const data = [
  {
    imagen: BancoAlimentos,
    titulo: "Banco de Alimentos",
    etiquetas: [dineroEtiqueta, comidaEtiqueta],
    horario: "9am - 4pm de lunes a viernes",
    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
    url: "/banco-alimentos",
    tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"],
    latitude: -30.829869,
    longitude: -70.212976
  },
  {
    imagen: Conin,
    titulo: "Fundacion Conin",
    etiquetas: [dineroEtiqueta],
    horario: "9am - 4pm de lunes a viernes",
    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
    url: "/conin",
    tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"],
    latitude: -26.800000,
    longitude: -65.287000
  },
  {
    imagen: Fann,
    titulo: "Fundacion Fann",
    etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
    horario: "9am - 4pm de lunes a viernes",
    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
    url: "/fann",
    tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"],
    latitude: -26.000000,
    longitude: -65.300000
  },
  {
    imagen: FundacionLeon,
    titulo: "Fundacion Leon",
    etiquetas: [dineroEtiqueta, hogarEtiqueta],
    horario: "9am - 4pm de lunes a viernes",
    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
    url: "/leon",
    tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"],
    latitude: -28.000000,
    longitude: -66.000000
  },
  {
    imagen: BancoAlimentos,
    titulo: "Banco de Alimentos",
    etiquetas: [dineroEtiqueta, comidaEtiqueta],
    horario: "9am - 4pm de lunes a viernes",
    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
    url: "/banco-alimentos",
    tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"],
    latitude: -31.000000,
    longitude: -70.000000
  },
  {
    imagen: Conin,
    titulo: "Fundacion Conin",
    etiquetas: [dineroEtiqueta],
    horario: "9am - 4pm de lunes a viernes",
    descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
    url: "/conin",
    tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"],
    latitude: -26.500000,
    longitude: -65.500000
  }
];

export default Eventos;
