import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import onat from "./Imagenes/onatperfil.png";

class OnatPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: onat,
        titulo: "Onat",
        horario: "3pm a 9pm",
        direccion: "25 de Mayo 90, T4000 San Miguel de Tucumán, Tucumán",
        telefono: "+5403814844000",
        sitioWeb: "https://onat.tucuman.gov.ar/",
        mapaBoton: "https://maps.app.goo.gl/jimGADVzQJ1Qh9899",
        email: "mailto:onat@tucuman.gov.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.32536942914!2d-65.20722652489025!3d-26.82960168973566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c10540da409%3A0xc37296734a4041c9!2s25%20de%20Mayo%2090%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1715726958738!5m2!1sen!2sar",
        descripcion: "ONAT es un ente que respalda a entidades estatales en la recolección y análisis de datos sobre la niñez y adolescencia en Tucumán, así como su relación con los Objetivos de Desarrollo Sostenible (ODS). Además, monitorea la inversión social de la provincia dirigida a este sector y su alineación con los ODS. ONAT colabora estrechamente con UNICEF en la iniciativa Municipio Unido por la Niñez y la Adolescencia (MUNA) y también se encarga de publicar informes periódicos sobre diversas temáticas relacionadas con la niñez y adolescencia.",    
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

export default OnatPerfil;