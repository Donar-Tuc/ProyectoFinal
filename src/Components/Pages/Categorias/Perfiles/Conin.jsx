import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import Conin from "./Imagenes/ConinLogo.png";

class ConinPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: Conin,
        titulo: "Conin",
        horario: "9am - 4pm de lunes a viernes",
        direccion: "25 de Mayo 859, Ciudad de Mendoza",
        telefono: "03813336338",
        sitioWeb: "https://www.conin.org.ar/",
        mapaBoton: "https://maps.app.goo.gl/h17JQ8o4JwF2jvHi7",
        email: "info@conin.org.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.972985500553!2d-65.24260112439718!3d-26.80898878887824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cff0a67b301%3A0x9cd53b5b2dee2359!2sConin%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1714084489347!5m2!1sen!2sar",  
        descripcion: ' Somos el centro CONIN S.M Tucumán. Existimos para quebrar la desnutrición infantil en nuestra provincia. Formamos parte de la FAMILIA CONIN, fundada por el Dr. Abel Albino en 1993. Hoy en día existen 110 centros franquiciados. Juntos atendemos a más de 4000 niños por semana y hemos recuperado a más de 30500  de la desnutrici',
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

export default ConinPerfil;