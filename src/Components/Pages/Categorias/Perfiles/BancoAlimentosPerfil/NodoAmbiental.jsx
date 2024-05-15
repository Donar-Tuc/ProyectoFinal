import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import nodoAmbiental from "./Imagenes/NodoAmbiental.png";

class NodoAmbiental extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: nodoAmbiental,
        titulo: "Nodo Ambiental",
        horario: "7am a 12pm",
        direccion: "Yerba Buena, Tucumán",
        telefono: "3184329875",
        sitioWeb: "https://nodoambiental.org/",
        mapaBoton: "https://maps.app.goo.gl/BvCJQtqyF2TobAVx8",
        email: "mailto:voluntariaso@nodoambiental.org",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5861762193113!2d-65.31916523736413!3d-26.80443403705181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242ec3307ead1%3A0x6d8b9211304f9a30!2sLas%20Guayabas%2C%20Yerba%20Buena%2C%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1715735421542!5m2!1sen!2sar",
        descripcion: "Somos una ONG sin fines de lucro comprometida con la difusión, desarrollo y ejecución de proyectos de desarrollo sustentable y bienestar social. En este sentido, hemos establecido tres ejes de vinculación con los Objetivos de Desarrollo Sostenible (ODS): la contención de la contaminación, la promoción de la salud humana y ambiental, y las relaciones con la vida silvestre. Para cada uno de estos ejes, hemos creado un proyecto piloto: Pilas Usadas, Salud Alimentaria y Huella Viva. Nuestra organización se estructura como una Fundación, con un nivel directivo representado por el Consejo de Administración, un nivel ejecutivo conformado por la Dirección y el Concilio de Administración de Proyectos, y un nivel operativo que incluye áreas como Administración Informática, Fiscal y de Recursos Humanos, Editorial, Gestión de Proyectos y Relaciones Públicas. Nuestra misión es desarrollar sistemas de cooperación entre Organizaciones de la Sociedad Civil, organizaciones públicas y privadas, escuelas, profesionales y empresas para la difusión, desarrollo y ejecución de proyectos orientados al desarrollo sostenible, la seguridad e inocuidad alimentaria, la preservación del ambiente y el bienestar social. En cuanto a nuestra visión, creemos firmemente que el desarrollo de nodos o sistemas de cooperación y articulación constituye una herramienta sólida para ayudar a que los proyectos de educación ambiental, conservación de la naturaleza y salud alimentaria y ambiental alcancen sus metas, incluida la reducción del impacto humano sobre el ambiente en el que vivimos y convivimos."      
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

export default NodoAmbiental