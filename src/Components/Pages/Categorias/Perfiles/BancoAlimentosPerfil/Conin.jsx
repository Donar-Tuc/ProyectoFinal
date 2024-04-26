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
        email: "info@conin.org.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.972985500553!2d-65.24260112439718!3d-26.80898878887824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cff0a67b301%3A0x9cd53b5b2dee2359!2sConin%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1714084489347!5m2!1sen!2sar",  
        descripcion: '¡Bienvenidos a FANN, la Fundación Ayuda al Niño Necesitado! Desde 1987, nos dedicamos a resolver problemas sociales en Tucumán, enfocándonos en niños, adolescentes y jóvenes en condiciones humildes y sus familias. Nuestro objetivo es brindarles atención integral y tratamiento. Algunos puntos importantes son: asistimos a niños y sus familias en situaciones difíciles, trabajamos con grupos vulnerables como los afectados por violencia o adicciones, ayudamos a organizar y fortalecer a las familias, y promovemos cambios positivos para que puedan participar activamente en la comunidad. En FANN, creemos en garantizar los derechos de los niños, proporcionando recursos materiales y humanos. Nuestro espacio es accesible y ofrece apoyo para el desarrollo físico, mental y social, así como necesidades básicas como alimentación y educación.',
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