import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import comedorManosOlla from "./Imagenes/ComedorManosOlla.png";

class ComedorManosOlla extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: comedorManosOlla,
        titulo: "Comedor “Manos a la Olla”",
        horario: "8am a 6pm",
        direccion: "Avenida Aconquija, Yerba buena",
        telefono: "3819872230",
        sitioWeb: "https://google.com",
        mapaBoton: "https://maps.app.goo.gl/T6DkzTHvyYPMQiaZ7",
        email: "mailto:CocinaManosOlla@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.31383965974!2d-65.30499545955568!3d-26.8326818466841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%20Province!5e0!3m2!1sen!2sar!4v1715723157795!5m2!1sen!2sar",
        descripcion: "¡Bienvenidos a Manos a la Olla, donde cada olla está llena de amor y solidaridad! En nuestro comedor, no solo cocinamos alimentos, sino que también cocinamos esperanza para aquellos que más lo necesitan en las calles de Tucumán. Nuestro equipo de voluntarios está comprometido en brindar una comida caliente y reconfortante a personas en situación de calle, pero también en ofrecerles una mano amiga y un oído atento. Queremos que cada donante sepa que su contribución va más allá de llenar estómagos; es una oportunidad para ser parte de algo más grande, para ser parte de una red de apoyo y compasión. ¡Únete a nosotros y deja tu huella en esta hermosa labor de amor! ¡Juntos, podemos marcar la diferencia y alimentar no solo cuerpos, sino también corazones!"      
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

export default ComedorManosOlla;