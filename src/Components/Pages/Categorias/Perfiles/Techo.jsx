import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import techoPerfil from "./Imagenes/techoPerfil.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';



class TechoPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: techoPerfil,
        titulo: "Techo",
        horario: "10am a 8pm",
        direccion: "Catamarca 375, T4000 San Miguel de Tucumán, Tucumán",
        telefono: "0381347977",
        sitioWeb: "https://www.facebook.com/maternidad.tucuman/",
        mapaBoton: "https://maps.app.goo.gl/mGakW6kYu3pNypZ66",
        email: "mailto:voluntariado.tucuman@techo.org",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4921806268753!2d-65.21367332456364!3d-26.824293676699938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d883ca6e5ed%3A0x82a6c8afc7224287!2sTECHO%20-%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1715717247936!5m2!1sen!2sar",
        descripcion: "Somos una organización integrada por jóvenes voluntarios y voluntarias, en colaboración con residentes de asentamientos populares en América Latina. Nuestro objetivo primordial es superar la situación de pobreza en la que millones de personas se encuentran inmersas en estos asentamientos. Para lograrlo, trabajamos de manera conjunta, formando vínculos estrechos y colaborando activamente con la comunidad local. Además, nos dedicamos a la formación de jóvenes voluntarios y voluntarias, brindándoles la oportunidad de involucrarse directamente en nuestro trabajo y aprender mediante la acción y el contacto directo con la realidad de estos lugares.",
        tituloEtiquetas: ["Donaciones monetarias","Asistencia y voluntariados" ],
        etiquetas: [dineroEtiqueta,asistenciaEtiqueta]        
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

export default TechoPerfil;