import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import cocinaUnidosTriunfar from "./Imagenes/CocinaUnidosTriunfar.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import comidaEtiqueta from './Imagenes/fast-food-outline.svg';



class CocinaUnidosTriunfar extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: cocinaUnidosTriunfar,
        titulo: "Cocina Comunitaria “Unidos para Triunfar",
        horario: "9am a 5pm",
        direccion: "C. Inca Garcilaso de la Vega, San Miguel de Tucumán, Tucumán",
        telefono: "3813459877",
        sitioWeb: "https://www.google.com/",
        mapaBoton: "https://maps.app.goo.gl/SdFL1J92N8ru9GV26",
        email: "mailto:cocinaUnidosTriunfar@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5911395910543!2d-65.23269592395297!3d-26.85295369071066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225b8691c432a9%3A0x69dae18d0c9bb928!2scocina%20comunitaria!5e0!3m2!1sen!2sar!4v1715720328306!5m2!1sen!2sar",
        descripcion: "En la Cocina Comunitaria Unidos para Triunfar, nuestra historia se teje con hilos de esperanza y superación. Surgimos en el corazón de Tucumán, en una comunidad vibrante y diversa donde la solidaridad es una fuerza poderosa. Nuestra cocina nació del deseo de un grupo de vecinos de hacer frente juntos a los desafíos de la vida cotidiana. Unidos por un propósito común, comenzamos a compartir no solo alimentos, sino también risas, historias y sueños. Hoy, somos un faro de esperanza y apoyo para nuestra comunidad, ofreciendo no solo comidas nutritivas, sino también un lugar donde los lazos se fortalecen y los corazones se llenan de amor y amistad. ",
        tituloEtiquetas: ["Donaciones monetarias", "Alimentos no perecederos" ],
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

export default CocinaUnidosTriunfar;