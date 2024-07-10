import React, { useState } from 'react';
import './css/formPopUp.css'; // Estilos personalizados (si los tienes)

// Importar íconos correspondientes a cada categoría
import dineroEtiqueta from './imagenes/card-outline.svg';
import comidaEtiqueta from './imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './imagenes/alarm-outline.svg';
import hogarEtiqueta from './imagenes/home-outline.svg';
import escolarEtiqueta from './imagenes/school-outline.svg';
import ropaEtiqueta from './imagenes/shirt-outline.svg';
import medicamentosEtiqueta from './imagenes/medkit-outline.svg';
import juguetesEtiqueta from './imagenes/football-outline.svg';

// Configurar moment para español y evitar GMT
moment.locale('es');

const PopUp = ({ addEvent, togglePopup }) => {
    const [nombreOrganizacion, setNombreOrganizacion] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoriasDonacion, setCategoriasDonacion] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        // Verificar cuántos checkboxes están marcados actualmente
        if (checked && categoriasDonacion.length >= 5) {
            // Si se intenta marcar más de 5, no se permite
            return;
        }

        // Actualizar el estado de las categorías de donación
        if (checked) {
            setCategoriasDonacion([...categoriasDonacion, value]);
        } else {
            setCategoriasDonacion(categoriasDonacion.filter(cat => cat !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar la longitud de la descripción
        if (descripcion.length < 100) {
            alert('La descripción debe tener al menos 100 caracteres.');
            return;
        }

        // Crear objeto con los datos del evento
        const eventData = {
            imagen: '', // Aquí deberías establecer la imagen adecuada
            titulo: nombreOrganizacion, // Usar el nombre de la organización como título
            horario: `${formatoHorario(fechaInicio)} a ${formatoHorario(fechaFin)}`, // Formatear inicio y fin de horario
            etiquetas: categoriasDonacion.map(cat => getIconoByCategoria(cat)), // Obtener los íconos según las categorías seleccionadas
            descripcion: descripcion,
            url: '', // Establecer la URL adecuada si es necesario
            tituloEtiquetas: categoriasDonacion // Usar las categorías seleccionadas como título de etiquetas
        };

        // Llamar a la función para agregar el evento al estado de Eventos.jsx
        addEvent(eventData);

        // Limpiar el formulario y categorías seleccionadas
        setNombreOrganizacion('');
        setFechaInicio('');
        setFechaFin('');
        setHoraInicio('');
        setHoraFin('');
        setDescripcion('');
        setCategoriasDonacion([]);

        // Cerrar el popup
        togglePopup();
    };

    // Función para formatear la fecha sin hora
    const formatoHorario = (fecha) => {
        return moment(fecha).format('dddd D [de] MMMM');
    };

    // Función auxiliar para obtener el ícono según la categoría seleccionada
    const getIconoByCategoria = (categoria) => {
        switch (categoria) {
            case 'dinero':
                return dineroEtiqueta;
            case 'comida':
                return comidaEtiqueta;
            case 'asistencia':
                return asistenciaEtiqueta;
            case 'hogar':
                return hogarEtiqueta;
            case 'escolar':
                return escolarEtiqueta;
            case 'ropa':
                return ropaEtiqueta;
            case 'medicamentos':
                return medicamentosEtiqueta;
            case 'juguetes':
                return juguetesEtiqueta;
            default:
                return ''; // Manejo de caso por defecto si no se encuentra la categoría
        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                {/* Formulario para crear evento */}
                <form onSubmit={handleSubmit} id='FormularioEventos'>
                    <div className='BoxTituloBotonEvento'>
                        <span className="close" onClick={togglePopup}>&times;</span>
                        <h2 className="TituloFormularioEvento">Crear Evento</h2>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nombreOrganizacion" className='TextoFormEventos'>Nombre de la Organización:</label>
                        <input type="text" id="nombreOrganizacion" className='InputFormEventos form-control' placeholder='Ingresar el nombre de la organizacion' value={nombreOrganizacion} onChange={(e) => setNombreOrganizacion(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="horarios" className='TextoFormEventos'>Fechas del Evento:</label>
                        <div>
                            {/* Selector de fecha y hora para inicio */}
                            <Datetime
                                value={fechaInicio}
                                onChange={date => setFechaInicio(date)}
                                inputProps={{ placeholder: 'Fecha de inicio' }}
                                dateFormat="dddd D [de] MMMM"
                                timeFormat={false} // Deshabilitar el formato de hora
                            />
                            &nbsp;a&nbsp;
                            {/* Selector de fecha y hora para fin */}
                            <Datetime
                                value={fechaFin}
                                onChange={date => setFechaFin(date)}
                                inputProps={{ placeholder: 'Fecha de fin' }}
                                dateFormat="dddd D [de] MMMM"
                                timeFormat={false} // Deshabilitar el formato de hora
                            />
                        </div>
                    </div>

                    {/* Checkboxes para seleccionar tipos de donación */}
                    <div className="mb-3">
                        <label className='TextoFormEventos'>Tipos de Donación:</label><br />
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="dinero" value="dinero" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="dinero">Dinero</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="comida" value="comida" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="comida">Comida</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="asistencia" value="asistencia" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="asistencia">Asistencia</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="hogar" value="hogar" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="hogar">Hogar</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="escolar" value="escolar" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="escolar">Escolar</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="ropa" value="ropa" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="ropa">Ropa</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="medicamentos" value="medicamentos" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="medicamentos">Medicamentos</label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="juguetes" value="juguetes" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="juguetes">Juguetes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="descripcion" className='TextoFormEventos'>Descripción del Evento:</label><br />
                    <textarea id="descripcion" className='InputFormEventos form-control' placeholder='Ingrese una breve descripcion del evento' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="4" required></textarea>
                </div>

                {/* Botón para crear evento */}
                <button type="submit" className="btn btn-primary" id='BotonCrearEvento'>Crear Evento</button>
            </form>
        </div>
    </div>
);

};

export default PopUp;