import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import CaritasPerfil from "./Imagenes/caritas.png";

class CaritasPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: CaritasPerfil,
        titulo: "Caritas",
        horario: "9am a 5pm",
        direccion: "San Lorenzo 441. S. M. de Tucumán",
        telefono: "+54 381 4217586",
        sitioWeb: "https://caritastucuman.org.ar/",
        mapaBoton: "https://maps.app.goo.gl/sZcE5g4fkXBpEfBh8",
        email: "mailto:tucuman@caritas.org.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.7946010416472!2d-65.20493488682094!3d-26.833837569928995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0fc6c9bb15%3A0xfc80a0dcdc085434!2sCAM%2C%20Combate%20de%20San%20Lorenzo%20441%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Provincia%20de%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1715717744845!5m2!1sen!2sar",
        descripcion: "Somos Cáritas Argentina, una organización de la Iglesia Católica dedicada a abordar las problemáticas sociales derivadas de la pobreza. Con más de 40,000 voluntarios distribuidos en 3,500 equipos de trabajo, estamos presentes en todos los rincones del país. Nuestra labor se enfoca en acompañar a personas, familias y comunidades que se encuentran en situaciones de exclusión y vulnerabilidad. Ofrecemos tanto contención espiritual como herramientas prácticas, con el objetivo de capacitarlos para que, por sus propios medios, puedan transformar su realidad."      
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

export default CaritasPerfil;