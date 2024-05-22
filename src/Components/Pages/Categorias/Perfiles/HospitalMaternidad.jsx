import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import HospitalMaternidad from "./Imagenes/LogoHospitalMaternidad.png";

// icons etiquetas
import asistenciaEtiqueta from './Imagenes/alarm-outline.svg';
import ropaEtiqueta from './Imagenes/shirt-outline.svg'


class hospitalMaternidadPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: HospitalMaternidad,
        titulo: "Instituto de Maternidad y Ginecología Nuestra Señora de Las Mercedes",
        horario: "Abierto 24hrs",
        direccion: "Av. Mate de Luna 1551, San Miguel de Tucumán",
        telefono: "0381423208",
        sitioWeb: "https://www.facebook.com/maternidad.tucuman/",
        mapaBoton: "https://maps.app.goo.gl/BaUC6QnX92LQuGNK6",
        email: "mailto:matertuc@msptucuman.gov.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4054725936526!2d-65.22340312439648!3d-26.82705288963058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c6983e50575%3A0xa25a83143967b733!2sInstituto%20de%20Maternidad%20y%20Ginecolog%C3%ADa%20Nuestra%20Se%C3%B1ora%20de%20las%20Mercedes!5e0!3m2!1sen!2sar!4v1715715343011!5m2!1sen!2sar",
        descripcion: 'Este hospital es monovalente, pues está dedicado a la atención integral de la mujer en el área ginecología, con énfasis en el área perinatológica. Adopta el modelo “Maternidad Centrada en la Familia”, garantizándole el mayor bienestar posible al binomio madre-hijo. Tiene como misión ser un hospital moderno y eficiente, que brinde una atención humanizada y de calidad a toda la población. Por ello es la Maternidad más importante y de mayor complejidad en la provincia. Referente de la región NOA, en los últimos años esta institución fue reciclada y renovada íntegramente.',
        tituloEtiquetas: ["Asistencia y voluntariados","Vestimenta" ],
        etiquetas: [asistenciaEtiqueta, ropaEtiqueta]  
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

export default hospitalMaternidadPerfil;