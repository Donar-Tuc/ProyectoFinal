import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import CocinaNuevaAmanecer from "./Imagenes/CocinaNuevaAmanecer.png";


// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';



class CocinaComNuevAmanecer extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: CocinaNuevaAmanecer,
        titulo: "C.C Nueva Amanecer",
        horario: "9am a 5pm",
        direccion: "Avenida Aconquija, Yerba Buena, Tucuman",
        telefono: "+54 3815648909",
        sitioWeb: "https://google.com/",
        mapaBoton: "https://maps.app.goo.gl/sZcE5g4fkXBpEfBh8",
        email: "mailto:CocinaNuevaAmanecer@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.7946010416472!2d-65.20493488682094!3d-26.833837569928995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0fc6c9bb15%3A0xfc80a0dcdc085434!2sCAM%2C%20Combate%20de%20San%20Lorenzo%20441%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Provincia%20de%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1715717744845!5m2!1sen!2sar",
        descripcion: "En nuestra cocina, cada día es una oportunidad para renovar la esperanza y el espíritu de nuestra comunidad en Tucumán. Nuestro nombre refleja nuestra visión de un futuro lleno de luz y posibilidades, donde todos puedan disfrutar de una comida caliente y nutritiva en compañía de amigos y vecinos. En nuestro espacio acogedor, nos esforzamos por ofrecer algo más que solo alimentos; brindamos amor, solidaridad y un sentido de pertenencia a quienes nos visitan. Con cada comida que compartimos, estamos construyendo un nuevo amanecer para todos, lleno de oportunidades y esperanza.",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos"],
        etiquetas: [dineroEtiqueta, comidaEtiqueta]
      }
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

export default CocinaComNuevAmanecer;