import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import Fann from "./Imagenes/FannLogoGrande.png";

class FannPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: Fann,
        titulo: "Fann",
        horario: "8am - 6pm de lunes a viernes",
        direccion: "Combate de Las Piedras 130",
        telefono: "03814312783",
        sitioWeb: "http://fann-tucuman.com.ar/",
        email: "direccion_fann@outlook.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.109642719243!2d-65.20267042456308!3d-26.836464776692747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c05ce600e41%3A0x6caddbaa598df022!2sFann!5e0!3m2!1sen!2sar!4v1714084705402!5m2!1sen!2sar",  
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

export default FannPerfil;