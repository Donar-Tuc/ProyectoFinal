import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import Leon from "./Imagenes/LeonLogoGrande.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';



class LeonPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: Leon,
        titulo: "Fundación Leon",
        horario: "9am - 4pm de lunes a viernes",
        direccion: "Maipú 452, T4000 San Miguel de Tucumán, Tucumán",
        telefono: "+5493816205847",
        sitioWeb: "https://www.fundacionleon.org.ar/",
        mapaBoton: "https://maps.app.goo.gl/UPU82k5zWBwcWaCx7",
        email: "comunicacion@fundacionleon.org.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56961.79822698435!2d-65.2412951900117!3d-26.836377411336898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1656c750e7%3A0xcb9cd4c5049750!2zRnVuZGFjacOzbiBMZcOzbg!5e0!3m2!1sen!2sar!4v1714084968403!5m2!1sen!2sar",  
        descripcion: 'Fundación León es una organización laica, no gubernamental y sin ánimo de lucro. Nace en San Miguel de Tucumán en 2003, como homenaje al empresario León Feler, hijo de inmigrantes nacido en 1913 en la Colonia Mauricio, la primera colonia agrícola establecida en Argentina por la Asociación de Colonización Judía. La Fundación trabaja con personas, hogares y comunidades en situación de vulnerabilidad. Con la visión de una sociedad más justa y equitativa, sus programas y proyectos se orientan a reducir la desigualdad social en el Noroeste Argentino, mediante la educación, el desarrollo territorial, el fortalecimiento del cuidado y la promoción del envejecimiento activo.',
        tituloEtiquetas: ["Donaciones monetarias","Asistencia y voluntariados" ],
        etiquetas: [dineroEtiqueta, asistenciaEtiqueta]  
      },
      
    ];

    return (
      <div>
        {opcionesDePerfiles.map((opcion, index) => (
          <TemplatePerfil key={index} opciones={opcion} />
        ))}
      </div>
    );
  }
}

export default LeonPerfil;