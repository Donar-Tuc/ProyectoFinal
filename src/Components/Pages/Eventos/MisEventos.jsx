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
    const [error, setError] = useState(null);  // Definir estado para error
    const [success, setSuccess] = useState(null);  // Estado para el mensaje de éxito

    const navigate = useNavigate();
    const {isLoggedIn, token, userId} = useAuth();

    const { data, isLoading, error: fetchError, refetch } = useFetch(`https://api-don-ar.vercel.app/eventos/fundacion/${userId}`);

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


    const confirmDelete = async (e) => {
        e.preventDefault();
        
        try {
            
            const response = await fetch(`https://api-don-ar.vercel.app/eventos/${eventToDelete._id}/delete-event`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            
            if (response.ok) {
                refetch();
                setShowDeletePopup(false);
                setSuccess("Evento eliminado con éxito.");
                setTimeout(() => {
                    setSuccess(null); 
                    navigate(`/mis-eventos`);
                }, 1500);
            } else {
                const errorText = await response.text();
                setError(errorText || "Error al eliminar el evento.");
            }
        } catch (error) {
            setError("Error en la conexión con el servidor");
        }
    };


    const cancelDelete = () => {
        setShowDeletePopup(false);
    };

    const handleSaveEdit = (updatedEvent) => {
        refetch();
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
            {success && <p>{success}</p>}
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
