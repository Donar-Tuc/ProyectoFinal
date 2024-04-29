import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import Leon from "./Imagenes/LeonLogoGrande.png";

class LeonPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: Leon,
        titulo: "Fundación Leon",
        horario: "9am - 4pm de lunes a viernes",
        direccion: "Maipú 452, T4000 San Miguel de Tucumán, Tucumán",
        telefono: "03813172792",
        sitioWeb: "https://www.fundacionleon.org.ar/",
        mapaBoton: "https://maps.app.goo.gl/UPU82k5zWBwcWaCx7",
        email: "comunicacion@fundacionleon.org.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56961.79822698435!2d-65.2412951900117!3d-26.836377411336898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1656c750e7%3A0xcb9cd4c5049750!2zRnVuZGFjacOzbiBMZcOzbg!5e0!3m2!1sen!2sar!4v1714084968403!5m2!1sen!2sar",  
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

export default LeonPerfil;