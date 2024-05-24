import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import casaCuna from "./Imagenes/casaCuna.png";



// icons etiquetas
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';
import hogarEtiqueta from './Imagenes/home-outline.svg';
import escolarEtiqueta from './Imagenes/school-outline.svg';
import ropaEtiqueta from './Imagenes/shirt-outline.svg'
import juguetesEtiqueta from './Imagenes/extension-puzzle-outline.svg';

class CasaCuna extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: casaCuna,
        titulo: "Casa Cuna",
        horario: "Abierto 24hrs",
        direccion: "San Martín al 100",
        telefono: "03814325567",
        sitioWeb: "https://www.facebook.com/maternidad.tucuman/",
        mapaBoton: "https://maps.app.goo.gl/BaUC6QnX92LQuGNK6",
        email: "mailto:matertuc@msptucuman.gov.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4054725936526!2d-65.22340312439648!3d-26.82705288963058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c6983e50575%3A0xa25a83143967b733!2sInstituto%20de%20Maternidad%20y%20Ginecolog%C3%ADa%20Nuestra%20Se%C3%B1ora%20de%20las%20Mercedes!5e0!3m2!1sen!2sar!4v1715715343011!5m2!1sen!2sar",
        descripcion: 'En Casa Cuna, cada niño es recibido con amor y cuidado en un ambiente familiar y acogedor. Nuestro hogar es un refugio seguro donde los pequeños encuentran calor, alimentación y educación. Nos esforzamos por ser más que un hogar temporal; somos un trampolín hacia un futuro lleno de oportunidades. Con el apoyo de nuestra comunidad, brindamos atención integral a los niños más vulnerables de Tucumán, sembrando semillas de esperanza y transformación en cada uno de ellos.',
        tituloEtiquetas: ["Asistencia y voluntariados", "Elementos del hogar","Útiles escolares","Vestimenta", "Juguetes" ],
        etiquetas: [asistenciaEtiqueta, hogarEtiqueta, escolarEtiqueta, ropaEtiqueta, juguetesEtiqueta],
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

export default CasaCuna;