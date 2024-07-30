import React, { useState, useEffect } from 'react';
import './css/MisEventos.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/es';

import { etiquetas } from '../../Pages/Categorias/Etiquetas/index';
import { useAuth } from '../../../logic/authContext';
import { useNavigate } from 'react-router-dom';

const PopUpMisEventos = ({ event, togglePopup, onSave }) => {
    
    const [titulo, setTitulo] = useState(event.titulo);
    const [fechaInicio, setFechaInicio] = useState(event.fechaInicio);
    const [fechaFin, setFechaFin] = useState(event.fechaFin);
    const [categoriasDonacion, setCategoriasDonacion] = useState(event.tituloEtiquetas);
    const [descripcion, setDescripcion] = useState(event.descripcion);
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setTitulo(event.titulo);
        setFechaInicio(event.fechaInicio);
        setFechaFin(event.fechaFin);
        setCategoriasDonacion(event.tituloEtiquetas);
        setDescripcion(event.descripcion);
    }, [event]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setCategoriasDonacion(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedEvent = { ...event, titulo, fechaInicio, fechaFin, descripcion, tituloEtiquetas: categoriasDonacion };
        console.log('Enviando PUT de evento:', updatedEvent);

        const opciones = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updatedEvent)
        };

        console.log('Opciones de solicitud:', opciones);

        try {
            const response = await fetch(`https://api-don-ar.vercel.app/eventos/${event._id}`, opciones);
            console.log('Respuesta del servidor:', response);

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Detalles del error del servidor:', errorData);
                throw new Error('Error al actualizar el evento');
            }

            const data = await response.json();

            console.log('Respuesta de actualización:', data);
            setTitulo(data.updated.titulo);
            setFechaInicio(data.updated.fechaInicio);
            setFechaFin(data.updated.fechaFin)
            setCategoriasDonacion(data.updated.tituloEtiquetas)
            togglePopup();
            navigate(`/eventos/${data.updated._id}`);
            alert('Evento actualizado con éxito');
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
            
        }
    };
    moment.locale('es');
    const fechaInicioFormateada = moment(fechaInicio).format('D [de] MMMM [del] YYYY');
    const fechaFinFormateada = moment(fechaFin).format('D [de] MMMM [del] YYYY');

    const cancelEdit = () => {
        togglePopup();
    }

    return (
        <div className="editPopup">
            <div className="editPopupContent">
                <h3 className='TituloEditarEvento'>Editar Evento</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="titulo" className='TextoFormEventos'>Título:</label>
                        <input id="titulo" className='InputFormEventos form-control' type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="horarios" className='TextoFormEventos'>Fechas del Evento:</label>
                        <div>
                            <Datetime
                                value={fechaInicioFormateada}
                                onChange={date => setFechaInicio(date)}
                                inputProps={{ placeholder: 'Fecha de inicio' }}
                                dateFormat="D [de] MMMM [del] YYYY"
                                timeFormat={false}
                            />
                            &nbsp;&nbsp;
                            <Datetime
                                value={fechaFinFormateada}
                                onChange={date => setFechaFin(date)}
                                inputProps={{ placeholder: 'Fecha de fin' }}
                                dateFormat="D [de] MMMM [del] YYYY"
                                timeFormat={false}
                                isValidDate={(current) => !fechaInicio || current.isAfter(fechaInicio)}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className='TextoFormEventos'>Categorías de Donación:</label>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Donaciones monetarias" value="Donaciones monetarias" checked={categoriasDonacion.includes('Donaciones monetarias')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="Donaciones monetarias">Donaciones monetarias</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Alimentos no perecederos" value="Alimentos no perecederos" checked={categoriasDonacion.includes('Alimentos no perecederos')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="comida">Alimentos no perecederos</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Asistencia y voluntariados" value="Asistencia y voluntariados" checked={categoriasDonacion.includes('Asistencia y voluntariados')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="Asistencia y voluntariados">Asistencia y voluntariados</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Elementos del hogar" value="Elementos del hogar" checked={categoriasDonacion.includes('Elementos del hogar')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="Elementos del hogar">Elementos del hogar</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Útiles escolares" value="Útiles escolares" checked={categoriasDonacion.includes('Útiles escolares')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="Útiles escolares">Útiles escolares</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Vestimenta" value="Vestimenta" checked={categoriasDonacion.includes('Vestimenta')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="Vestimenta">Vestimenta</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Medicamentos" value="Medicamentos" checked={categoriasDonacion.includes('Medicamentos')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="Medicamentos">Medicamentos</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Juguetes" value="Juguetes" checked={categoriasDonacion.includes('Juguetes')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="Juguetes">Juguetes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className='TextoFormEventos'>Descripción:</label>
                        <textarea id="descripcion" className='InputFormEventos form-control' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="4" required></textarea>
                    </div>
                    <button onClick={cancelEdit} className="cancelDeleteButton BtnGuardarMisEventos">Descartar Cambios</button>
                    <button type="submit" className="btn btn-primary BtnGuardarMisEventos">Guardar Cambios</button>

                </form>
            </div>
        </div>
    );
};

export default PopUpMisEventos;