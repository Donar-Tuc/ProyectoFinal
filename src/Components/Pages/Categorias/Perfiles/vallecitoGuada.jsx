import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import vallecitoGuada from "./Imagenes/vallecitoGuada.png";

// icons etiquetas
import dineroEtiqueta from './Imagenes/card-outline.svg';
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';



class VallecitoGuada extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: vallecitoGuada,
        titulo: "El vallecito de la Guadalupe”",
        horario: "8am a 6pm",
        direccion: "Avenida Aconquija, Yerba buena",
        telefono: "3814321234",
        sitioWeb: "https://elvallecito.wordpress.com/acerca-de/",
        mapaBoton: "https://maps.app.goo.gl/kcHFpoEtcBVmnbK6A",
        email: "mailto:vallecitoGuadalupe@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.115944386801!2d-65.32062802489138!3d-26.804436588687764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242ec3307ead1%3A0x6d8b9211304f9a30!2sLas%20Guayabas%2C%20Yerba%20Buena%2C%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1715726466976!5m2!1sen!2sar",
        descripcion: "Somos una ONG sin fines de lucro dedicada a difundir, desarrollar y ejecutar proyectos de desarrollo sustentable y bienestar social, articulando tres ejes de acción alineados con los Objetivos de Desarrollo Sostenible: contención de la contaminación, promoción de la salud humana y ambiental, y relaciones con la vida silvestre. Para cada uno de estos ejes, hemos creado un proyecto piloto: Pilas Usadas, Salud Alimentaria y Huella Viva. Nuestra estructura organizativa comprende un Consejo de Administración, una Dirección y Concilio de Administración de Proyectos, así como áreas operativas como Administración Informática, Fiscal y de Recursos Humanos, Editorial, Gestión de Proyectos y Relaciones Públicas. Nuestra misión es fomentar la cooperación entre Organizaciones de la Sociedad Civil, entidades públicas y privadas, escuelas, profesionales y empresas para impulsar el desarrollo sostenible, la seguridad alimentaria, la preservación del ambiente y el bienestar social. Aspiramos a establecer nodos de cooperación que contribuyan a alcanzar las metas de proyectos relacionados con la educación ambiental, la conservación de la naturaleza y la salud alimentaria y ambiental, con el objetivo último de reducir el impacto humano sobre nuestro entorno.",
        tituloEtiquetas: ["Donaciones monetarias","Asistencia y voluntariados" ],
        etiquetas: [dineroEtiqueta, asistenciaEtiqueta]       
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

export default VallecitoGuada;