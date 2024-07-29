import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './CardsEventos.jsx';
import './css/MisEventos.css';
import PopUpMisEventos from './PopUpMisEventos.js';
import { useAuth } from '../../../logic/authContext.js';
import { getUserData } from '../../../logic/getUserData.js';

// Importar etiquetas
import { etiquetas } from '../Categorias/Etiquetas/index';

// Icons para etiquetas
import { useFetch } from '../../../logic/useFetch.js';

const MisEventos = () => {
    const [eventos, setEventos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [eventToEdit, setEventToEdit] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);
    
    const navigate = useNavigate();
    const isLoggedIn = useAuth();
    const { userId } = getUserData(); 

    const url = `https://api-don-ar.vercel.app/eventos/fundacion/${userId}`;
    const { data, isLoading, error } = useFetch(url);

    useEffect(() => {
        if (data) {
            setEventos(data.list);
        }
    }, [data]);

    const handleEditEvent = (evento) => {
        setEventToEdit(evento);
        setIsEditing(true);
    };

    const handleDeleteEvent = (evento) => {
        setEventToDelete(evento);
        setShowDeletePopup(true);
    };

    const confirmDelete = () => {
        setEventos(eventos.filter(evento => evento.id !== eventToDelete.id));
        setShowDeletePopup(false);
    };

    const cancelDelete = () => {
        setShowDeletePopup(false);
    };

    const handleSaveEdit = (updatedEvent) => {
        setEventos(eventos.map(evento => evento.id === updatedEvent.id ? updatedEvent : evento));
        setIsEditing(false);
    };

    if (!isLoggedIn) {
        return <p>Debes iniciar sesión para ver tus eventos.</p>;
    }

    return (
        <div className="MisEventosContainer">
            <h2 id="TituloMisEventosContainer">Mis Eventos</h2>
            {isLoading && <p>Cargando...</p>}
            {error && <p>Error al cargar los eventos.</p>}
            <div className="containerCardsEventos">
                {eventos.map((evento) => (
                    <div key={evento._id} className="eventCard">
                        <Card
                            key={evento._id}
                            id={evento._id}
                            imagen={evento.logo}
                            titulo={evento.titulo}
                            fechaInicio={evento.fechaInicio}
                            fechaFin={evento.fechaFin}
                            descripcion={evento.descripcion}
                            tituloEtiquetas={evento.tituloEtiquetas}
                        />
                        <div className="eventActions">
                            <button onClick={() => handleEditEvent(evento)} className="editButton">Editar</button>
                            <button onClick={() => handleDeleteEvent(evento)} className="deleteButton">Eliminar</button>
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
