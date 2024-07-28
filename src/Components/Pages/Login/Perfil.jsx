import React, { useState, useEffect, useMemo } from "react";
import "./Styles/Perfil.css";
import { etiquetas } from "../Categorias/Etiquetas/index";
import { useFetch } from "../../../logic/useFetch";
import useFetchImage from "../../../logic/useFetchImage";
import { useAuth } from "../../../logic/authContext"; // Asegúrate de ajustar la ruta de importación según tu estructura de carpetas

const Perfil = () => {
    const [modoEdicion, setModoEdicion] = useState(false);
    const [mostrarGestionCuenta, setMostrarGestionCuenta] = useState(false);
    const [perfil, setPerfil] = useState({});
    const [perfilInicial, setPerfilInicial] = useState({});
    const [mensaje, setMensaje] = useState("");
    const [errores, setErrores] = useState({});
    const [contrasenaActual, setContrasenaActual] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const [infoCuenta, setInfoCuenta] = useState({
        email: "",
        contrasena: "",
        nuevaContrasena: ""
    });

    const categorias = Object.entries(etiquetas);
    const { token, userId } = useAuth();

    const opciones = useMemo(() => ({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }), [token]);

    console.log('Opciones de fetch:', opciones);

    const { data, error, loading } = useFetch(`https://api-don-ar.vercel.app/fundaciones/${userId}`, opciones);

    console.log('Datos de fetch:', data);
    console.log('Error de fetch:', error);

    const logoUrl = data?.document?.logo || "";
    const { data: imageBlob, error: imageError, isLoading: isImageLoading } = useFetchImage(logoUrl);

    console.log('Datos de imagen:', imageBlob);
    console.log('Error de imagen:', imageError);

    const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : "";

    const datosFundacion = data?.document ? {
        logo: imageUrl,
        titulo: data.document.titulo || "No especificado",
        horario: data.document.horario || "No especificado",
        email: data.document.email || "No especificado",
        telefono: data.document.telefono || "No especificado",
        direccion: data.document.direccion || "No especificado",
        descripcion: data.document.descripcion || "No especificado",
        tituloEtiquetas: data.document.tituloEtiquetas || []
    } : {};

    useEffect(() => {
        if (data) {
            console.log('Actualizando perfil con datos:', datosFundacion);
            setPerfil(datosFundacion);
            setPerfilInicial(datosFundacion);
        }
    }, [data]);

    useEffect(() => {
        console.log('Perfil inicial actualizado:', perfilInicial);
        setPerfilInicial({ ...perfil });
    }, [perfil]);

    if (loading || isImageLoading) return <div>Cargando...</div>;
    if (error || imageError) return <div>Error: {error || imageError}</div>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Cambiando ${name} a ${value}`);
        setPerfil(prevPerfil => ({ ...prevPerfil, [name]: value }));
    };

    const handleCheckChange = (e) => {
        const { name, checked } = e.target;
        console.log(`Cambiando checkbox ${name} a ${checked}`);
        setPerfil(prevPerfil => ({
            ...prevPerfil,
            tituloEtiquetas: checked
                ? [...prevPerfil.tituloEtiquetas, name]
                : prevPerfil.tituloEtiquetas.filter(donacion => donacion !== name)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Enviando formulario de perfil:', perfil);

        const opciones = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(perfil)
        };

        console.log('Opciones de solicitud:', opciones);

        try {
            const response = await fetch(`https://api-don-ar.vercel.app/fundaciones/${userId}`, opciones);
            console.log('Respuesta del servidor:', response);

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Detalles del error del servidor:', errorData);
                throw new Error('Error al actualizar el perfil');
            }

            const data = await response.json();
            console.log('Respuesta de actualización:', data);
            setPerfil(data.updated);
            setPerfilInicial(data.updated);
            setModoEdicion(false);
            setMensaje('Perfil actualizado con éxito');
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            setErrores(prevErrores => ({ ...prevErrores, form: error.message }));
        }
    };

    const handleChangePasswordSubmit = async (e) => {
        e.preventDefault();
        console.log('Enviando cambio de contraseña:', infoCuenta);

        if (infoCuenta.nuevaContrasena !== confirmarContrasena) {
            setErrores(prevErrores => ({ ...prevErrores, confirmPassword: 'Las contraseñas no coinciden' }));
            return;
        }

        const opciones = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                password: infoCuenta.contrasena,
                newPassword: infoCuenta.nuevaContrasena
            })
        };

        try {
            const response = await fetch(`https://api-don-ar.vercel.app/fundaciones/${userId}/change-password`, opciones);
            if (!response.ok) throw new Error('Error al cambiar contraseña');
            setMensaje('Contraseña cambiada con éxito');
        } catch (error) {
            console.error('Error al cambiar la contraseña:', error);
            setErrores(prevErrores => ({ ...prevErrores, form: error.message }));
        }
    };

    const handleCancelEdit = () => {
        console.log('Cancelando edición, restaurando perfil inicial');
        setPerfil(datosFundacion);
        setModoEdicion(false);
    };

    const handleEditClick = () => setModoEdicion(true);

    const handleAccountChange = (e) => {
        const { name, value } = e.target;
        console.log(`Cambiando info de cuenta ${name} a ${value}`);
        setInfoCuenta(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    const handleConfirmPasswordChange = (e) => setConfirmarContrasena(e.target.value);

    return (
        <div className="PerfilContainer">
            <h2 className="TituloPerfil">Configuración de tu Perfil</h2>
            <div className="ProfileInformation">
                <div className="InfoGridContainer">
                    <div className="containerFoto">
                        {
                            isImageLoading ? <p>Cargando logo...</p> :
                                imageError ? <p>Error cargando el logo</p> :
                                    <img src={imageUrl} alt="Foto de perfil" className="ImagePerfil" />
                        }
                    </div>
                    <div className="containerTextoPerfil">
                        {modoEdicion ? (
                            <form onSubmit={handleSubmit} className="FormPerfil">
                                <div className="mb-3">
                                    <label className="form-label">Nombre de la Organización</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errores.titulo ? 'is-invalid' : ''}`}
                                        name="titulo"
                                        value={perfil.titulo}
                                        onChange={handleChange}
                                    />
                                    {errores.titulo && <div className="invalid-feedback">{errores.titulo}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Horarios de atención</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errores.horario ? 'is-invalid' : ''}`}
                                        name="horario"
                                        value={perfil.horario}
                                        onChange={handleChange}
                                    />
                                    {errores.horario && <div className="invalid-feedback">{errores.horario}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Dirección</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errores.direccion ? 'is-invalid' : ''}`}
                                        name="direccion"
                                        value={perfil.direccion}
                                        onChange={handleChange}
                                    />
                                    {errores.direccion && <div className="invalid-feedback">{errores.direccion}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errores.telefono ? 'is-invalid' : ''}`}
                                        name="telefono"
                                        value={perfil.telefono}
                                        onChange={handleChange}
                                    />
                                    {errores.telefono && <div className="invalid-feedback">{errores.telefono}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                                        name="email"
                                        value={perfil.email}
                                        onChange={handleChange}
                                    />
                                    {errores.email && <div className="invalid-feedback">{errores.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descripción</label>
                                    <textarea
                                        className={`form-control ${errores.descripcion ? 'is-invalid' : ''}`}
                                        name="descripcion"
                                        value={perfil.descripcion}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errores.descripcion && <div className="invalid-feedback">{errores.descripcion}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Etiquetas</label>
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
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                                <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>Cancelar</button>
                            </form>
                        ) : (
                            <div>
                                <p><strong>Nombre de la Organización:</strong> {perfil.titulo}</p>
                                <p><strong>Horarios de atención:</strong> {perfil.horario}</p>
                                <p><strong>Dirección:</strong> {perfil.direccion}</p>
                                <p><strong>Teléfono:</strong> {perfil.telefono}</p>
                                <p><strong>Correo Electrónico:</strong> {perfil.email}</p>
                                <p><strong>Descripción:</strong> {perfil.descripcion}</p>
                                <p><strong>Etiquetas:</strong> {perfil.tituloEtiquetas.join(", ")}</p>
                                <button className="btn btn-primary" onClick={handleEditClick}>Editar</button>
                            </div>
                        )}
                    </div>
                </div>
                <button className="btn btn-secondary" onClick={() => setMostrarGestionCuenta(!mostrarGestionCuenta)}>
                    {mostrarGestionCuenta ? "Ocultar" : "Gestionar Cuenta"}
                </button>
                {mostrarGestionCuenta && (
                    <div className="GestionCuentaContainer">
                        <form onSubmit={handleChangePasswordSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Contraseña Actual</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="contrasena"
                                    value={infoCuenta.contrasena}
                                    onChange={handleAccountChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nueva Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="nuevaContrasena"
                                    value={infoCuenta.nuevaContrasena}
                                    onChange={handleAccountChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirmar Nueva Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirmarContrasena"
                                    value={confirmarContrasena}
                                    onChange={handleConfirmPasswordChange}
                                />
                                {errores.confirmPassword && <div className="invalid-feedback">{errores.confirmPassword}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary">Cambiar Contraseña</button>
                        </form>
                    </div>
                )}
            </div>
            {mensaje && <div className="alert alert-success">{mensaje}</div>}
            {errores.form && <div className="alert alert-danger">{errores.form}</div>}
        </div>
    );
};

export default Perfil;
