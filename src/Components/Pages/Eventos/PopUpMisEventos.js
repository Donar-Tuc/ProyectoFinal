import React, { useState, useEffect } from "react";
import "./css/MisEventos.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import "moment/locale/es";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { etiquetas } from "../../Pages/Categorias/Etiquetas/index";
import { useAuth } from "../../../logic/authContext";
import { useNavigate } from "react-router-dom";

const PopUpMisEventos = ({ event, togglePopup, onSave }) => {
  const [titulo, setTitulo] = useState(event.titulo);
  const [fechaInicio, setFechaInicio] = useState(event.fechaInicio ? moment(event.fechaInicio) : moment());
  const [fechaFin, setFechaFin] = useState(event.fechaFin ? moment(event.fechaFin) : moment().add(1, 'days'));
  const [tituloEtiquetas, setTituloEtiquetas] = useState(event.tituloEtiquetas);
  const [descripcion, setDescripcion] = useState(event.descripcion);
  const [file, setFile] = useState("");
  const [error, setError] = useState("");

  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTitulo(event.titulo);
    setFechaInicio(event.fechaInicio ? moment(event.fechaInicio) : moment());
    setFechaFin(event.fechaFin ? moment(event.fechaFin) : moment().add(1, 'days'));
    setTituloEtiquetas(event.tituloEtiquetas);
    setDescripcion(event.descripcion);
  }, [event]);

  const handleSetImg = (e) => {
    const { files } = e.target;
    setFile(files[0]);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setTituloEtiquetas((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (descripcion.length < 50) {
      setError("La descripción debe tener al menos 50 caracteres.");
      return;
    } else if (descripcion.length > 150) {
      setError("La descripción no puede exceder los 150 caracteres.");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("fechaInicio", fechaInicio.toISOString());
    formData.append("fechaFin", fechaFin.toISOString());
    formData.append("descripcion", descripcion);
    formData.append("tituloEtiquetas", tituloEtiquetas);

    if (file) {
      formData.append("logo", file);
    }

    const opciones = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };



    try {
      const response = await fetch(
        `https://api-don-ar.vercel.app/eventos/${event._id}`,
        opciones
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Detalles del error del servidor:", errorData);
        toast.error("Error al actualizar el evento");
        return;
      }

      const data = await response.json();

      setTitulo(data.updated.titulo);
      setFechaInicio(data.updated.fechaInicio);
      setFechaFin(data.updated.fechaFin);
      setTituloEtiquetas(data.updated.tituloEtiquetas);
      // navigate(`/eventos/${data.updated._id}`);
      toast.success("Evento actualizado con éxito. Esta ventana se cerrará");
      setTimeout(() => {
        togglePopup();
        navigate("/eventos");
        navigate("/mis-eventos");
      }, 6000);
    } catch (error) {
      console.error("Error al actualizar el evento:", error);
      toast.error("Error al actualizar el evento");
    }
  };

  moment.locale("es");
  const fechaInicioFormateada = moment(fechaInicio).format(
    "D [de] MMMM [del] YYYY"
  );
  const fechaFinFormateada = moment(fechaFin).format("D [de] MMMM [del] YYYY");

  const cancelEdit = () => {
    togglePopup();
  };

  return (
    <div className="editPopup">
      <div className="editPopupContent">
        <h3 className="TituloEditarEvento">Editar Evento</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="titulo" className="TextoFormEventos">
              Título:
            </label>
            <input
              id="titulo"
              className="InputFormEventos form-control"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="horarios" className="TextoFormEventos">
              Fechas del Evento:
            </label>
            <div>
              <Datetime
                value={fechaInicio}
                onChange={(date) => setFechaInicio(date)}
                inputProps={{ placeholder: "Fecha de inicio" }}
                dateFormat="D [de] MMMM [del] YYYY"
                timeFormat={false}
              />
              &nbsp;&nbsp;
              <Datetime
                value={fechaFin}
                onChange={(date) => setFechaFin(date)}
                inputProps={{ placeholder: "Fecha de fin" }}
                dateFormat="D [de] MMMM [del] YYYY"
                timeFormat={false}
                isValidDate={(current) =>
                  !fechaInicio || current.isAfter(fechaInicio)
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="TextoFormEventos">Categorías de Donación:</label>
            <div className="row">
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Donaciones monetarias"
                    value="Donaciones monetarias"
                    checked={tituloEtiquetas.includes(
                      "Donaciones monetarias"
                    )}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="Donaciones monetarias"
                  >
                    Donaciones monetarias
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Alimentos no perecederos"
                    value="Alimentos no perecederos"
                    checked={tituloEtiquetas.includes(
                      "Alimentos no perecederos"
                    )}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="comida">
                    Alimentos no perecederos
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Asistencia y voluntariados"
                    value="Asistencia y voluntariados"
                    checked={tituloEtiquetas.includes(
                      "Asistencia y voluntariados"
                    )}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="Asistencia y voluntariados"
                  >
                    Asistencia y voluntariados
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Elementos del hogar"
                    value="Elementos del hogar"
                    checked={tituloEtiquetas.includes("Elementos del hogar")}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="Elementos del hogar"
                  >
                    Elementos del hogar
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Útiles escolares"
                    value="Útiles escolares"
                    checked={tituloEtiquetas.includes("Útiles escolares")}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="Útiles escolares"
                  >
                    Útiles escolares
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Vestimenta"
                    value="Vestimenta"
                    checked={tituloEtiquetas.includes("Vestimenta")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="Vestimenta">
                    Vestimenta
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Juguetes"
                    value="Juguetes"
                    checked={tituloEtiquetas.includes("Juguetes")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="Juguetes">
                    Juguetes
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Medicamentos"
                    value="Medicamentos"
                    checked={tituloEtiquetas.includes("Medicamentos")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="Medicamentos">
                    Medicamentos
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="TextoFormEventos">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              className="InputFormEventos form-control"
              rows="4"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
            {error && <p className="text-danger">{error}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="imagen" className="TextoFormEventos">
              Subir Imagen:
            </label>
            <input
              id="imagen"
              type="file"
              className="form-control-file"
              onChange={handleSetImg}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary BotonAceptarEvento"
            >
              Guardar Cambios
            </button>
            <button
              type="button"
              className="btn btn-secondary BotonCancelarEvento"
              onClick={cancelEdit}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PopUpMisEventos;
