import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import comedorReyes from "./Imagenes/comedorReyes.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';


class ComedorReyes extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: comedorReyes,
        titulo: "Comedor Reyes",
        horario: "9am a 4pm",
        direccion: "Barrio San Cayetano",
        telefono: "3814568890",
        sitioWeb: "https://www.facebook.com/maternidad.tucuman/",
        mapaBoton: "https://maps.app.goo.gl/CQGFobtzzvt49UFw7",
        email: "mailto:comedorreyes@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.714573970801!2d-65.15204125000007!3d-26.817215499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225edc7f95f733%3A0x1c9e054a0c913a85!2sSan%20Cayetano%2C%20Tucum%C3%A1n%20Province!5e0!3m2!1sen!2sar!4v1715718377389!5m2!1sen!2sar",
        descripcion: "En nuestro comedor, extendemos una cálida bienvenida a todos aquellos que buscan apoyo y solidaridad en Tucumán. Nuestro espacio es más que un lugar para satisfacer el hambre; es un refugio de esperanza y comunidad donde cada persona es recibida con dignidad y respeto. Desde hace años, hemos sido un faro de luz en medio de la adversidad, brindando alimentos nutritivos y un ambiente acogedor a quienes más lo necesitan. Con el apoyo de nuestra comunidad, seguimos comprometidos en nuestra misión de alimentar cuerpos y espíritus, construyendo un futuro más esperanzador para todos.",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"],
        etiquetas: [dineroEtiqueta, comidaEtiqueta]       
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

export default ComedorReyes;