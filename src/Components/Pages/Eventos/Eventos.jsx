import React, { useState, useEffect } from "react";
import { useFetch } from "../../../logic/useFetch.js";
import Card from "./CardsEventos.jsx";
import PopUp from "./PopUp.js";
import "./css/eventos.css";
import { useAuth } from "../../../logic/authContext.js";

// Importar etiquetas
import { etiquetas } from '../Categorias/Etiquetas/index';
import { useNavigate } from "react-router-dom";


const Eventos = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showCreateForm, setShowCreateForm] = useState(false); // Estado para mostrar el formulario de creación
    const [events, setEvents] = useState([]);
    const { isLoggedIn, userId, logout } = useAuth();

    const url = "https://api-don-ar.vercel.app/eventos";
    const { data, loading, error } = useFetch(url);
    const eventos = data ? data.list : [];

    const cardsPerPage = 6;
    const allCards = [...events, ...eventos]; // Combinar eventos creados con datos iniciales

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazarse hacia arriba al cambiar de página
    }, [currentPage]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const navigate = useNavigate();

    const togglePopup = () => {
        setShowCreateForm(!showCreateForm); // Cambiar el estado para mostrar/ocultar el formulario
    };

    const addEvent = (eventData) => {
        setEvents([eventData, ...events]);
        setShowCreateForm(false); // Cerrar el formulario después de agregar el evento
    };

    const handleMisEventosClick = () => {
        navigate("/mis-eventos");
    } 

    const totalPages = Math.ceil(allCards.length / cardsPerPage);

    return (
        <div className="EventosContainer">
            <h2 id="TituloEventosContainer">Eventos</h2>

            {isLoggedIn && !showCreateForm && ( // Mostrar el botón solo si el usuario está autenticado y no se muestra el formulario
                <div className="ContainerBoton">  
                    <button onClick={togglePopup} className="BtnEventosPrincipal">Crear Evento</button>
                    <button onClick={ handleMisEventosClick } className="BtnEventosPrincipal">Mis Eventos</button>
                </div>
            
            )}

            {showCreateForm && <PopUp addEvent={addEvent} togglePopup={togglePopup} />} {/* Mostrar el formulario si showCreateForm es verdadero */}

            <div className="containerCardsEventos">
                {currentCards?.map((card) => (
                    <Card
                        key={card._id}
                        id={card._id}
                        imagen={card.logo}
                        titulo={card.titulo}
                        fechaInicio={card.fechaInicio}
                        fechaFin={card.fechaFin}
                        descripcion={card.descripcion}
                        tituloEtiquetas={card.tituloEtiquetas}
                    />
                ))}
            </div>

            <div id="PaginationButtonsEventos">
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
}

export default Eventos;
