import React, { useState, useEffect } from "react";
import "./css/formPopUp.css";
import moment from "moment";
import "moment/locale/es";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { getUserData } from "../../../logic/getUserData";
import { etiquetas } from "../Categorias/Etiquetas/index";
import { useFetch } from "../../../logic/useFetch";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

moment.locale("es");

const PopUp = ({ togglePopup }) => {
  const [nombreOrganizacion, setNombreOrganizacion] = useState("");
  const [titulo, setTitulo] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tituloEtiquetas, setTituloEtiquetas] = useState([]);
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { userId, token } = getUserData();

  const { data: user, loading, error: fetchError } = useFetch(
    `https://api-don-ar.vercel.app/fundaciones/${userId}`
  );

  const navigate = useNavigate();

  const handleSetImg = (e) => {
    const { files } = e.target;
    setFile(files[0]);
  };

  useEffect(() => {
    if (user) {
      setNombreOrganizacion(user?.document?.titulo || user?.document?.userName);
    }
  }, [user]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked && tituloEtiquetas.length >= 5) {
      return;
    }

    if (checked) {
      setTituloEtiquetas([...tituloEtiquetas, value]);
    } else {
      setTituloEtiquetas(tituloEtiquetas.filter((cat) => cat !== value));
    }
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
    formData.append("fechaInicio", fechaInicio);
    formData.append("fechaFin", fechaFin);
    formData.append("descripcion", descripcion);
    formData.append("tituloEtiquetas", tituloEtiquetas);
    
    if (file) {
        formData.append("logo", file); 
    }

    
    try {
      const response = await fetch("https://api-don-ar.vercel.app/eventos/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        setError("");
        setNombreOrganizacion("");
        setFechaInicio("");
        setFechaFin("");
        setDescripcion("");
        setTituloEtiquetas([]);
        setTimeout(() => {
          togglePopup();
          toast.success("Evento creado con éxito. Será redirigido.");
          navigate(`/eventos/${responseData.created._id}`);
        }, 6000);
      } else {
        const errorText = await response.text();
        setError(errorText || "Error al crear el evento.");
        setSuccess("");
      }
    } catch (error) {
      toast.error("Error al crear el evento");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div>Error: {fetchError.message}</div>;
  }

  if (!user) {
    return <div>No se encontraron datos del usuario.</div>;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <form onSubmit={handleSubmit} id="FormularioEventos">
          <div className="BoxTituloBotonEvento">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h2 className="TituloFormularioEvento">Crear Evento</h2>
          </div>

          <div className="mb-3">
            <label htmlFor="nombreOrganizacion" className="TextoFormEventos">
              Nombre de la Organización:
            </label>
            <input
              type="text"
              id="nombreOrganizacion"
              className="InputFormEventos form-control"
              placeholder="Nombre de la organizacion"
              value={nombreOrganizacion}
              disabled={!user?.document?.admin}
              onChange={(e) => setNombreOrganizacion(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="titulo" className="TextoFormEventos">
              Titulo:
            </label>
            <input
              type="text"
              id="titulo"
              className="InputFormEventos form-control"
              placeholder="Titulo del evento"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
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
                dateFormat="dddd D [de] MMMM"
                timeFormat={false}
              />
              &nbsp;&nbsp;
              <Datetime
                value={fechaFin}
                onChange={(date) => setFechaFin(date)}
                inputProps={{ placeholder: "Fecha de fin" }}
                dateFormat="dddd D [de] MMMM"
                timeFormat={false}
                isValidDate={(current) =>
                  !fechaInicio || current.isAfter(fechaInicio)
                }
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="TextoFormEventos">Tipos de Donación:</label>
            <br />
            <div className="row">
              {Object.keys(etiquetas)?.map((key) => (
                <div className="col-md-3" key={key}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={key}
                      value={key}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor={key}>
                      {etiquetas[key].titulo}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion" className="TextoFormEventos">
              Descripción del Evento:
            </label>
            <br />
            <textarea
              id="descripcion"
              className="InputFormEventos form-control"
              placeholder="Ingrese una breve descripcion del evento"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Cambiar imagen del evento</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleSetImg}
            />
          </div>

          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}

          <button
            type="submit"
            className="BtnCrearEventoPopUp"
            id="BotonCrearEvento"
          >
            Crear Evento
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PopUp;
