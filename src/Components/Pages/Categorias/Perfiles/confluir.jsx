import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import confluir from "./Imagenes/ConfluirPerfil.png";

// icons etiquetas
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';



class Confluir extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: confluir,
        titulo: "Confluir",
        horario: "8am a 5pm",
        direccion: "",
        telefono: "",
        sitioWeb: "https://www.facebook.com/maternidad.tucuman/",
        mapaBoton: "https://maps.app.goo.gl/k7AbVudneZyqq21X9",
        email: "mailto:confluir@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.37578306995!2d-65.37849216857155!3d-26.832620262890135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%20Province!5e0!3m2!1sen!2sar!4v1715725930525!5m2!1sen!2sar",
        descripcion: "somos un grupo de jovenes estudiantes y profesionales que formamos parte de una asociacion en tramite de creacion, nuestra idea es realizar proyectos de incidencia social y de investigacion, por el momento estamos trabajando con un clinica juridica gratuita en un barrio de escasos recursos y con proyectos desde el area de psicologia destinado a niños y adolescentes de hogares comedores.",
        tituloEtiquetas: ["Asistencia y voluntariados", "Alimentos no perecederos"],
        etiquetas: [asistenciaEtiqueta, comidaEtiqueta]       
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

export default Confluir;