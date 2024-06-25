import React, { useState, useEffect } from "react";
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
  const [showCreateForm, setShowCreateForm] = useState(false); // Estado para mostrar el formulario de creación
  const [events, setEvents] = useState([]);

  const cardsPerPage = 6;
  const allCards = [...events, ...data]; // Combinar eventos creados con datos iniciales

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

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

  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  return (
    <div className="EventosContainer">
      <h2 id="TituloEventosContainer">Eventos</h2>

      {isLoggedIn && !showCreateForm && ( // Mostrar el botón solo si el usuario está autenticado y no se muestra el formulario
        <div className="ContainerBoton">  
          <button onClick={togglePopup} id="BotonLink">Crear Evento</button>
        </div>
      )}

      {showCreateForm && <PopUp addEvent={addEvent} togglePopup={togglePopup} />} {/* Mostrar el formulario si showCreateForm es verdadero */}

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
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: Conin,
        titulo: "Fundacion Conin",
        etiquetas: [dineroEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/conin",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: Fann,
        titulo: "Fundacion Fann",
        etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/fann",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: FundacionLeon,
        titulo: "Fundacion Leon",
        etiquetas: [dineroEtiqueta, hogarEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/leon",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: BancoAlimentos,
        titulo: "Banco de Alimentos",
        etiquetas: [dineroEtiqueta, comidaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/banco-alimentos",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: Conin,
        titulo: "Fundacion Conin",
        etiquetas: [dineroEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/conin",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: Fann,
        titulo: "Fundacion Fann",
        etiquetas: [dineroEtiqueta, comidaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/fann",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: FundacionLeon,
        titulo: "Fundacion Leon",
        etiquetas: [dineroEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/leon",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: BancoAlimentos,
        titulo: "Fundacion Banco de Alimentos",
        etiquetas: [dineroEtiqueta, comidaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/banco-alimentos",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: Conin,
        titulo: "Fundacion Conin",
        etiquetas: [dineroEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/conin",
        tituloEtiquetas: ["Donaciones monetarias"]
    },
    {
        imagen: Fann,
        titulo: "Fundacion Fann",
        etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/fann",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        imagen: FundacionLeon,
        titulo: "Fundacion Leon",
        etiquetas: [dineroEtiqueta, hogarEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/leon",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    }
];

export default Eventos;
