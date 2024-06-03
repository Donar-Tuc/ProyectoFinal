import React, { useState } from "react";
import "./Styles/Perfil.css";

// Import de fotos
import BancoAlimentos from "../Categorias/SeccionesCategorias/VerTodo/Imagenes/BancoAlimentosLogo.png";

// Importar íconos
import dineroEtiqueta from '../Categorias/SeccionesCategorias/VerTodo/Imagenes/card-outline.svg';
import comidaEtiqueta from '../Categorias/SeccionesCategorias/VerTodo/Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from '../Categorias/SeccionesCategorias/VerTodo/Imagenes/alarm-outline.svg';
import hogarEtiqueta from '../Categorias/SeccionesCategorias/VerTodo/Imagenes/home-outline.svg';
import escolarEtiqueta from '../Categorias/SeccionesCategorias/VerTodo/Imagenes/school-outline.svg';
import ropaEtiqueta from '../Categorias/SeccionesCategorias/VerTodo/Imagenes/shirt-outline.svg';
import medicamentosEtiqueta from '../Categorias/SeccionesCategorias/VerTodo/Imagenes/medkit-outline.svg';
import juguetesEtiqueta from '../Categorias/SeccionesCategorias/VerTodo/Imagenes/extension-puzzle-outline.svg';

const categorias = [
    { name: "dinero", label: "Dinero", icon: dineroEtiqueta },
    { name: "comida", label: "Comida", icon: comidaEtiqueta },
    { name: "asistencia", label: "Asistencia", icon: asistenciaEtiqueta },
    { name: "hogar", label: "Hogar", icon: hogarEtiqueta },
    { name: "escolar", label: "Escolar", icon: escolarEtiqueta },
    { name: "ropa", label: "Ropa", icon: ropaEtiqueta },
    { name: "medicamentos", label: "Salud", icon: medicamentosEtiqueta },
    { name: "juguetes", label: "Juguetes", icon: juguetesEtiqueta }
];

const Perfil = () => {
    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState({
        logo: BancoAlimentos,
        name: "Nombre de la organización",
        hours: "Horarios de atención",
        email: "correo@example.com",
        phone: "123456789",
        address: "Dirección de la organización",
        descripcion: "Cambiar descripción",
        donaciones: []
    });

    const handleProfileUpdate = (formData) => {
        setProfile(formData);
        setEditMode(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile({
                ...profile,
                logo: reader.result
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleCheckChange = (e) => {
        const { name, checked } = e.target;
        setProfile((prevProfile) => {
            const updatedDonaciones = checked
                ? [...prevProfile.donaciones, name]
                : prevProfile.donaciones.filter((donacion) => donacion !== name);
            return { ...prevProfile, donaciones: updatedDonaciones };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleProfileUpdate(profile);
    };

    return (
        <div className="PerfilContainer">
            <h2 className="TituloPerfil">Configuracion de tu Perfil</h2>
            <div className="ProfileInformation">
                <div className="InfoGridContainer">
                    <div className="containerFoto">
                        <img src={profile.logo} alt="Foto de perfil" className="ImagePerfil" />
                    </div>
                    <div className="containerTextoPerfil">
                        {editMode ? (
                            <form onSubmit={handleSubmit} className="FormPerfil">
                                <div className="mb-3">
                                    <label className="form-label" id="tituloOrganizacion">Nombre de la Organización</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Horarios de atención</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="hours"
                                        value={profile.hours}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Dirección</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        value={profile.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={profile.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descripción</label>
                                    <textarea
                                        className="form-control"
                                        name="descripcion"
                                        value={profile.descripcion}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Cambiar Imagen de Perfil</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <h3 className="TituloDropdown">Seleccione que donaciones recibe</h3>
                                    {categorias.map((categoria) => (
                                        <div className="form-check" key={categoria.name}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name={categoria.name}
                                                checked={profile.donaciones.includes(categoria.name)}
                                                onChange={handleCheckChange}
                                            />
                                            <label className="form-check-label" htmlFor={categoria.name}>
                                                {categoria.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </form>
                        ) : (
                            <div className="ContainerDataSave">
                                <h2>{profile.name}</h2>
                                <div id="etiquetasContainer">
                                    {profile.donaciones.map((donacion, index) => {
                                        const categoria = categorias.find(cat => cat.name === donacion);
                                        return (
                                            <div className="EtiquetaContainer" key={index}>
                                                <img src={categoria.icon} id="EtiquetaCard" alt={categoria.label} />
                                                <p className="TituloEtiqueta">{categoria.label}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="DataPefil"><span className="DatoSave">Horarios: </span>{profile.hours}</p>
                                <p className="DataPefil"><span className="DatoSave">Email: </span> {profile.email}</p>
                                <p className="DataPefil"><span className="DatoSave">Teléfono: </span> {profile.phone}</p>
                                <p className="DataPefil"><span className="DatoSave">Dirección: </span> {profile.address}</p>
                                <p className="DataPefil descripcion"><span className="DatoSave">Descripción: </span> {profile.descripcion}</p>
                                <button onClick={() => setEditMode(true)} className="btn btn-primary" id="btnEditarPerfil">Editar Perfil</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
