import React, { useState, useEffect } from 'react';
import './css/MisEventos.css';

// Importar íconos correspondientes a cada categoría
import { etiquetas } from '../../Pages/Categorias/Etiquetas/index';

const PopUpMisEventos = ({ event, togglePopup, onSave }) => {
    const [titulo, setTitulo] = useState(event.titulo);
    const [horario, setHorario] = useState(event.horario);
    const [descripcion, setDescripcion] = useState(event.descripcion);
    const [categoriasDonacion, setCategoriasDonacion] = useState(event.tituloEtiquetas);

    useEffect(() => {
        setTitulo(event.titulo);
        setHorario(event.horario);
        setDescripcion(event.descripcion);
        setCategoriasDonacion(event.tituloEtiquetas);
    }, [event]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setCategoriasDonacion(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof onSave === 'function') {
            const updatedEvent = { ...event, titulo, horario, descripcion, tituloEtiquetas: categoriasDonacion };
            onSave(updatedEvent); // Pasa el evento editado a MisEventos
        } else {
            console.error('onSave no es una función');
        }
        togglePopup(); // Cierra el popup
    };

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
                        <label htmlFor="horario" className='TextoFormEventos'>Horario:</label>
                        <input id="horario" className='InputFormEventos form-control' type="text" value={horario} onChange={(e) => setHorario(e.target.value)} required />
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
                </form>
            </div>
        </div>
    );
};

export default PopUpMisEventos;