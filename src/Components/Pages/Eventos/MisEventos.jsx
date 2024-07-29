import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardEvento from './CardsEventos.jsx';
import './css/MisEventos.css';
import PopUpMisEventos from './PopUpMisEventos.js';

// Imágenes
import BancoAlimentos from "./imagenes/BancoAlimentos.png";

// Icons para etiquetas
import dineroEtiqueta from './imagenes/card-outline.svg';
import comidaEtiqueta from './imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './imagenes/alarm-outline.svg';
import hogarEtiqueta from './imagenes/home-outline.svg';

// Datos de eventos con id único
// Datos de eventos con id único
const data = [
    {
        id: 1,
        imagen: BancoAlimentos,
        titulo: "Banco de Alimentos",
        etiquetas: [dineroEtiqueta, comidaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/banco-alimentos",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        id: 2,
        imagen: BancoAlimentos,
        titulo: "Banco de Alimentos",
        etiquetas: [dineroEtiqueta, comidaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/banco-alimentos",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        id: 3,
        imagen: BancoAlimentos,
        titulo: "Banco de Alimentos",
        etiquetas: [dineroEtiqueta, comidaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/banco-alimentos",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
    {
        id: 4,
        imagen: BancoAlimentos,
        titulo: "Banco de Alimentos",
        etiquetas: [dineroEtiqueta, comidaEtiqueta],
        horario: "9am - 4pm de lunes a viernes",
        descripcion: "El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.",
        url: "/banco-alimentos",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos", "Asistencia y voluntariados"]
    },
];

const MisEventos = ({ isLoggedIn }) => {
    const [userEvents, setUserEvents] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [eventToEdit, setEventToEdit] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            setUserEvents(data); // Usa los datos de `data` directamente
        }
    }, [isLoggedIn]);

    const handleEditEvent = (event) => {
        setEventToEdit(event);
        setIsEditing(true);
    };

    const handleDeleteEvent = (event) => {
        setEventToDelete(event);
        setShowDeletePopup(true);
    };

    const confirmDelete = () => {
        setUserEvents(userEvents.filter(event => event.id !== eventToDelete.id));
        setShowDeletePopup(false);
    };

    const cancelDelete = () => {
        setShowDeletePopup(false);
    };

    const handleSaveEdit = (updatedEvent) => {
        setUserEvents(userEvents.map(event => event.id === updatedEvent.id ? updatedEvent : event));
        setIsEditing(false);
    };

    if (!isLoggedIn) {
        return <p>Debes iniciar sesión para ver tus eventos.</p>;
    }

    return (
        <div className="MisEventosContainer">
            <h2 id="TituloMisEventosContainer">Mis Eventos</h2>
            <div className="containerCardsEventos">
                {userEvents.map((event) => (
                    <div key={event.id} className="eventCard">
                        <CardEvento
                            imagen={event.imagen}
                            titulo={event.titulo}
                            horario={event.horario}
                            etiquetas={event.etiquetas}
                            descripcion={event.descripcion}
                            url={event.url}
                            tituloEtiquetas={event.tituloEtiquetas}
                        />
                        <div className="eventActions">
                            <button onClick={() => handleEditEvent(event)} className="editButton">Editar</button>
                            <button onClick={() => handleDeleteEvent(event)} className="deleteButton">Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>

            {isEditing && <PopUpMisEventos event={eventToEdit} togglePopup={() => setIsEditing(false)} onSave={handleSaveEdit} />}
            {showDeletePopup && (
                <div className="deletePopup">
                    <div className="deletePopupContent">
                        <h3>¿Estás seguro que quieres eliminar este evento?</h3>
                        <button onClick={confirmDelete} className="confirmDeleteButton">Sí, eliminar</button>
                        <button onClick={cancelDelete} className="cancelDeleteButton">Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MisEventos;