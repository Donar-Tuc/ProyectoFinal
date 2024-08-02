import React, { useState, useEffect, useMemo } from "react";
import "./Styles/Perfil.css";
import { etiquetas } from "../Categorias/Etiquetas/index";
import { useFetch } from "../../../logic/useFetch";
import useFetchImage from "../../../logic/useFetchImage";
import { useAuth } from "../../../logic/authContext"; // Asegúrate de ajustar la ruta de importación según tu estructura de carpetas
import { useGeoCode } from "../../../logic/useGeoCode";

/* 9b278a0a4aa142a5be0464d52bf05dbd */

const Perfil = () => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [mostrarGestionCuenta, setMostrarGestionCuenta] = useState(false);
  const [perfil, setPerfil] = useState({});
  const [perfilInicial, setPerfilInicial] = useState({});
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [infoCuenta, setInfoCuenta] = useState({
    email: "",
    contrasena: "",
    nuevaContrasena: ""
  });
  const [file, setFile] = useState(null); // Estado para manejar el archivo seleccionado

  const categorias = Object.entries(etiquetas);
  const { token, userId } = useAuth();
  const { getGeocode } = useGeoCode();

  const opciones = useMemo(() => ({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }), [token]);

  const { data, error, loading } = useFetch(`https://api-don-ar.vercel.app/fundaciones/${userId}`, opciones);

  const logoUrl = data?.document?.logo || "";
  const { data: imageBlob, error: imageError, isLoading: isImageLoading } = useFetchImage(logoUrl);

  const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : "";

  const datosFundacion = data?.document ? {
    logo: imageUrl,
    titulo: data.document.titulo || "No especificado",
    horario: data.document.horario || "No especificado",
    email: data.document.email || "No especificado",
    telefono: data.document.telefono || "No especificado",
    linkMercadoPago: data.document.linkMercadoPago || "",
    direccion: data.document.direccion || "No especificado",
    descripcion: data.document.descripcion || "No especificado",
    tituloEtiquetas: data.document.tituloEtiquetas || []
  } : {};

  useEffect(() => {
    if (data) {
      setPerfil(datosFundacion);
      setPerfilInicial(datosFundacion);
    }
  }, [data]);

  useEffect(() => {
    setPerfilInicial({ ...perfil });
  }, [perfil]);

  useEffect(() => {
    return () => {
      if (imageBlob) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageBlob, imageUrl]);

  if (loading || isImageLoading) return <div>Cargando...</div>;
  if (error || imageError) return <div>Error: {error || imageError}</div>;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFile(files[0]);
    } else {
      setPerfil(prevPerfil => ({ ...prevPerfil, [name]: value }));
    }
  };

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    setPerfil(prevPerfil => ({
      ...prevPerfil,
      tituloEtiquetas: checked
        ? [...prevPerfil.tituloEtiquetas, name]
        : prevPerfil.tituloEtiquetas.filter(donacion => donacion !== name)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const location = await getGeocode(perfil.direccion);
    const { latitud, longitud } = location;


    const formData = new FormData();
    formData.append('titulo', perfil.titulo);
    formData.append('horario', perfil.horario);
    formData.append('direccion', perfil.direccion);
    formData.append('telefono', perfil.telefono);
    formData.append("linkMercadoPago", perfil.linkMercadoPago)
    formData.append('descripcion', perfil.descripcion);
    formData.append('tituloEtiquetas', perfil.tituloEtiquetas);
    formData.append("latitud", latitud);
    formData.append("longitud", longitud);
    if (file) {
      formData.append('logo', file); // 'logo' debe coincidir con el campo de archivo esperado por tu servidor
    }

    const opciones = {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    };

    try {
      const response = await fetch(`https://api-don-ar.vercel.app/fundaciones/${userId}`, opciones);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar el perfil');
      }

      const data = await response.json();
      setPerfil(data.updated);
      setPerfilInicial(data.updated);
      setModoEdicion(false);
      setMensaje('Perfil actualizado con éxito');
    } catch (error) {
      setErrores(prevErrores => ({ ...prevErrores, form: error.message }));
    }
  };

  const handleCancelEdit = () => {
    setPerfil(datosFundacion);
    setModoEdicion(false);
  };

  const handleEditClick = () => setModoEdicion(true);

  const handleConfirmPasswordChange = (e) => setConfirmarContrasena(e.target.value);

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setInfoCuenta(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleUpdateAccountSubmit = async (e) => {
    e.preventDefault();

    if (infoCuenta.nuevaContrasena !== confirmarContrasena) {
      setErrores(prevErrores => ({ ...prevErrores, confirmPassword: 'Las contraseñas no coinciden' }));
      return;
    }

    const body = {};
    if (infoCuenta.contrasena) body.password = infoCuenta.contrasena;
    if (infoCuenta.nuevaContrasena) body.newPassword = infoCuenta.nuevaContrasena;
    if (infoCuenta.email) body.email = infoCuenta.email;

    const opciones = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    };

    try {
      const response = await fetch(`https://api-don-ar.vercel.app/fundaciones/${userId}/update-account`, opciones);
      if (!response.ok) throw new Error('Error al cambiar contraseña');
      setMensaje('Cuenta actualizada con éxito');
    } catch (error) {
      setErrores(prevErrores => ({ ...prevErrores, form: error.message }));
    }
  };


  return (
    <div className="PerfilContainer">
      <h2 className="TituloPerfil">Configuración de tu Perfil</h2>
      <div className="ProfileInformation">
        <div className="InfoGridContainer">
          <div className="containerFoto">
            {isImageLoading ? (
              <p>Cargando logo...</p>
            ) : imageError ? (
              <p>Error cargando el logo</p>
            ) : (
              <img
                src={imageUrl}
                alt="Foto de perfil"
                className="ImagePerfil"
              />
            )}
          </div>
          <div className="containerTextoPerfil">
            {modoEdicion ? (
              <form onSubmit={handleSubmit} className="FormPerfil">

                <div className="mb-3">
                  <label className="form-label">
                    Nombre de la Organización
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errores.titulo ? "is-invalid" : ""
                      }`}
                    name="titulo"
                    value={perfil.titulo}
                    onChange={handleChange}
                  />
                  {errores.titulo && (
                    <div className="invalid-feedback">{errores.titulo}</div>
                  )}
                </div>


                <div className="mb-3">
                  <label className="form-label">Horarios de atención</label>
                  <input
                    type="text"
                    className={`form-control ${errores.horario ? "is-invalid" : ""
                      }`}
                    name="horario"
                    value={perfil.horario}
                    onChange={handleChange}
                  />
                  {errores.horario && (
                    <div className="invalid-feedback">{errores.horario}</div>
                  )}
                </div>


                <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input
                    type="text"
                    placeholder="Calle y número, departamento, provincia"
                    className={`form-control ${errores.direccion ? "is-invalid" : ""
                      }`}
                    name="direccion"
                    value={perfil.direccion}
                    onChange={handleChange}
                  />
                  {errores.direccion && (
                    <div className="invalid-feedback">
                      {errores.direccion}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="text"
                    className={`form-control ${errores.telefono ? "is-invalid" : ""
                      }`}
                    name="telefono"
                    value={perfil.telefono}
                    onChange={handleChange}
                  />
                  {errores.telefono && (
                    <div className="invalid-feedback">{errores.telefono}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Link Mercado Pago</label>
                  <input
                    type="text"
                    className={`form-control ${errores.linkMercadoPago ? "is-invalid" : ""
                      }`}
                    name="linkMercadoPago"
                    value={perfil.linkMercadoPago}
                    onChange={handleChange}
                    placeholder="link.mercadopago.com.ar/tu-link"
                    pattern="link\.mercadopago\.com\.ar\/.*"
                    title="El enlace debe comenzar con link.mercadopago.com.ar/"
                  />
                  {errores.linkMercadoPago && (
                    <div className="invalid-feedback">{errores.linkMercadoPago}
                      El enlace debe comenzar con "link.mercadopago.com.ar/"
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea
                    className={`form-control ${errores.descripcion ? "is-invalid" : ""
                      }`}
                    name="descripcion"
                    value={perfil.descripcion}
                    onChange={handleChange}
                  ></textarea>
                  {errores.descripcion && (
                    <div className="invalid-feedback">
                      {errores.descripcion}
                    </div>
                  )}
                  <div className="mb-3">
                    <label className="form-label">Cambiar Imagen de Perfil</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Categoria</label>
                  <div className="form-check">
                    {categorias.map(([key, categoria]) => (
                      <div key={key}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={key}
                          name={key}
                          checked={perfil.tituloEtiquetas.includes(key)}
                          onChange={handleCheckChange}
                        />
                        <label className="form-check-label" htmlFor={key}>
                          {categoria.titulo}
                        </label>
                      </div>
                    ))}
                    <br />
                  </div>
                  <div className="containerBtnGuardarCancelar">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="BotonGuardarPerfil"
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="btn btn-secondary"
                      id="btnCancelarEdicion"
                    >
                      Cancelar
                    </button>
                  </div>

                </div>
              </form>
            ) : (
              <div className="ContainerDataSave">
                <h2>{perfil.titulo}</h2>
                {/* <p>
                  <strong>Nombre de la Organización:</strong> {perfil.titulo}
                </p> */}
                <p>
                  <strong>Horarios de atención:</strong> {perfil.horario}
                </p>
                <p>
                  <strong>Dirección:</strong> {perfil.direccion}
                </p>
                <p>
                  <strong>Teléfono:</strong> {perfil.telefono}
                </p>
                <p>
                  <strong>Link de mercado pago:</strong> <a href={`https://${perfil.linkMercadoPago}`} target="_blank" rel="noopener noreferrer">{perfil.linkMercadoPago}</a>
                </p>
                <p>
                  <strong>Descripción:</strong> {perfil.descripcion}
                </p>
                <p>
                  <strong>Etiquetas:</strong>{" "}
                  {perfil.tituloEtiquetas.join(", ")}
                </p>
                <div className="containerEditarInformacion">
                  <button id="BtnEditarInfo" onClick={handleEditClick}>
                    Editar
                  </button>
                </div>

              </div>
            )}

            <div className="ContainerBotonGestionCuenta">
              <button
                className="BtnGestionOcultar"
                onClick={() => setMostrarGestionCuenta(!mostrarGestionCuenta)}
              >
                {mostrarGestionCuenta ? "Ocultar" : "Gestionar Cuenta"}
              </button>
              {mostrarGestionCuenta && (
                <div className="AccountManagement">
                  <h3 className="ManejoDeCuentaTitulo">Gestión de cuenta</h3>
                  <form onSubmit={handleUpdateAccountSubmit}>
                    <div className="mb-3">
                      <p>
                        <strong>Correo electronico actual:</strong> {perfil.email}
                      </p>
                      <label className="form-label">Nuevo Correo</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Introduzca un nuevo correo si desea cambiarlo"
                        value={infoCuenta.email}
                        onChange={handleAccountChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Introduzca su contraseña actual</label>
                      <input
                        type="password"
                        className="form-control"
                        name="contrasena"
                        value={infoCuenta.contrasena}
                        onChange={handleAccountChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Nueva Contraseña:</label>
                      <input
                        type="password"
                        className="form-control"
                        name="nuevaContrasena"
                        value={infoCuenta.nuevaContrasena}
                        onChange={handleAccountChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Confirmar Nueva Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmarContrasena"
                        value={confirmarContrasena}
                        onChange={handleConfirmPasswordChange}
                      />
                      {errores.confirmPassword && (
                        <div className="invalid-feedback">
                          {errores.confirmPassword}
                        </div>
                      )}
                    </div>
                    <div className="containerGuardarContrasena">
                      <button type="submit" id="BtnEditarInfo">
                        Actualizar cuenta
                      </button>
                    </div>

                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
      {mensaje && <div className="alert alert-success">{mensaje}</div>}
      {errores.form && (
        <div className="alert alert-danger">{errores.form}</div>
      )}
    </div>
  );
};

export default Perfil;
