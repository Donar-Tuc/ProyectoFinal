import React, { useState, useEffect } from 'react';
import './css/MisEventos.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/es';

import { etiquetas } from '../../Pages/Categorias/Etiquetas/index';
import { useAuth } from '../../../logic/authContext';

const PopUpMisEventos = ({ event, togglePopup, onSave }) => {
    
    const [titulo, setTitulo] = useState(event.titulo);
    const [fechaInicio, setFechaInicio] = useState(event.fechaInicio);
    const [fechaFin, setFechaFin] = useState(event.fechaFin);
    const [categoriasDonacion, setCategoriasDonacion] = useState(event.tituloEtiquetas);
    const [descripcion, setDescripcion] = useState(event.descripcion);
    const { token } = useAuth();

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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (typeof onSave === 'function') {
    //         const updatedEvent = { ...event, titulo, horario, descripcion, tituloEtiquetas: categoriasDonacion };
    //         onSave(updatedEvent); // Pasa el evento editado a MisEventos
    //     } else {
    //         console.error('onSave no es una función');
    //     }
    //     togglePopup(); // Cierra el popup
    // };

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
            alert('Perfil actualizado con éxito');
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            
        }
    };
    moment.locale('es');
    const fechaInicioFormateada = moment(fechaInicio).format('D [de] MMMM [del] YYYY');
    const fechaFinFormateada = moment(fechaFin).format('D [de] MMMM [del] YYYY');

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
                                    <input className="form-check-input" type="checkbox" id="dinero" value="Dinero" checked={categoriasDonacion.includes('Dinero')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="dinero">Dinero</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="comida" value="Comida" checked={categoriasDonacion.includes('Comida')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="comida">Comida</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="asistencia" value="Asistencia" checked={categoriasDonacion.includes('Asistencia')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="asistencia">Asistencia</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="hogar" value="Hogar" checked={categoriasDonacion.includes('Hogar')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="hogar">Hogar</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="escolar" value="Escolar" checked={categoriasDonacion.includes('Escolar')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="escolar">Escolar</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="ropa" value="Ropa" checked={categoriasDonacion.includes('Ropa')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="ropa">Ropa</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="medicamentos" value="Medicamentos" checked={categoriasDonacion.includes('Medicamentos')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="medicamentos">Medicamentos</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="juguetes" value="Juguetes" checked={categoriasDonacion.includes('Juguetes')} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="juguetes">Juguetes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className='TextoFormEventos'>Descripción:</label>
                        <textarea id="descripcion" className='InputFormEventos form-control' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary BtnGuardarMisEventos">Guardar Cambios</button>
                    {/* <button onClick={cancelEdit} className="btn btn-delete BtnGuardarMisEventos">Guardar Cambios</button> */}

                </form>
            </div>
        </div>
    );
};

export default PopUpMisEventos;