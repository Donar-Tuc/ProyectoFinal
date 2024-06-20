import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import fundacionManosSolidarias from "./Imagenes/FundacionManosSolidarias.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';



class FundacionManosSolidarias extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: fundacionManosSolidarias,
        titulo: "Fundación Manos Solidarias",
        horario: "9am a 4pm",
        direccion: "Av. Sarmiento 1234, Tucumán",
        telefono: "3815737595",
        sitioWeb: "https://www.google.com/",
        mapaBoton: "https://maps.app.goo.gl/T6DkzTHvyYPMQiaZ7",
        email: "mailto:fundacionManosSolidarias@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.31383965959!2d-65.30499545955571!3d-26.8326818466841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%20Province!5e0!3m2!1sen!2sar!4v1715725096970!5m2!1sen!2sar",
        descripcion: "Nuestra fundación es un faro de solidaridad y compasión en nuestra comunidad, donde cada acción está impregnada de amor y dedicación. Desde programas de asistencia alimentaria hasta proyectos de desarrollo comunitario, trabajamos incansablemente para construir un futuro más justo y equitativo para todos. Invitamos a todos aquellos que deseen contribuir a esta noble causa a unirse a nosotros y ser parte de nuestra familia solidaria. ",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos","Asistencia y voluntariados" ],
        etiquetas: [dineroEtiqueta, comidaEtiqueta, asistenciaEtiqueta]
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

export default FundacionManosSolidarias;