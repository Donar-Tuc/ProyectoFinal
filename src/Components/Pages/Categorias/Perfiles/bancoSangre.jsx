import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import bancoSangrePerfil from "./Imagenes/bancoSangre.png";

// icons etiquetas
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';


class bancoSangre extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: bancoSangrePerfil,
        titulo: "Banco de Sangre",
        horario: "7:30am a 12:30pm",
        direccion: "Avenida Mitre 236 4000 San Miguel De Tucumán, Tucuman, Argentina Tucumán",
        telefono: "0381 4311841",
        sitioWeb: "https://msptucuman.gov.ar/donacion-de-sangre/",
        mapaBoton: "https://maps.app.goo.gl/3xnHvBJpHn91cn4G7",
        email: "mailto:matertuc@msptucuman.gov.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4764809478716!2d-65.22046122395385!3d-26.82479328953717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c6a63a04cbb%3A0xd721ac3c5611f7ea!2sBanco%20Central%20de%20Sangre!5e0!3m2!1sen!2sar!4v1715718032702!5m2!1sen!2sar",
        descripcion: "En el Banco de Sangre de Tucumán, creemos en el increíble poder de la donación de sangre para salvar vidas y construir esperanzas. Somos una institución vital en la red de salud de nuestra provincia, dedicada a garantizar un suministro constante de sangre segura y de alta calidad para satisfacer las necesidades de los pacientes en momentos críticos. Cada donación es un acto de generosidad y solidaridad que puede marcar la diferencia entre la vida y la muerte para alguien en nuestra comunidad. Con tu colaboración, podemos seguir siendo un pilar de esperanza y apoyo, salvando vidas y brindando aliento a aquellos que más lo necesitan en Tucumán y más allá.",
        tituloEtiquetas: ["Asistencia y voluntariados" ],
        etiquetas: [ asistenciaEtiqueta]        
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

export default bancoSangre;