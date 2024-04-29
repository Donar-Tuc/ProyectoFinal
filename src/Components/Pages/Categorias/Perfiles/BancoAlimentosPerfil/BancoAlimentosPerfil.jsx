import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import LogoBancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";

const Link = [
  {
    name: ""
  }
]

class BancoAlimentosPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: LogoBancoAlimentos,
        titulo: "Banco de Alimentos",
        horario: "9am - 4pm de lunes a viernes",
        direccion: "Combate de Las Piedras 130, T4000 San Miguel de Tucumán, Tucumán",
        telefono: "03815392255",
        sitioWeb: "https://bancodealimentostuc.org.ar/",
        email: "info@bancodealimentostuc.org.ar",
        mapaBoton: "https://maps.app.goo.gl/meQ8ztMvNBucbdD28",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6675845687982!2d-65.19539192364253!3d-26.81871118928443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d2a5e3ab627%3A0x5d42cc9b9121844a!2sFundaci%C3%B3n%20Banco%20de%20Alimentos%20de%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1713978239671!5m2!1sen!2sar",  
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

export default BancoAlimentosPerfil;
