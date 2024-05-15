import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import subsecretaria from "./Imagenes/Subsecretaría.png";

class SubsecretariaNinez extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: subsecretaria,
        titulo: "Subsecretaría de Niñez, Adolescencia y Familia",
        horario: "8am a 3pm",
        direccion: "Av Francisco De Aguirre 3500, 4000, Tucuman, San Miguel de Tucuman",
        telefono: "03814344023",
        sitioWeb: "https://www.facebook.com/carballito.centrocomunitario/",
        mapaBoton: "https://maps.app.goo.gl/V2asKRpnWuKGvjxKA",
        email: "mailto:SubsecretariaNinez@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6919329255015!2d-65.24391182489215!3d-26.786088287924283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d0b1c27c08d%3A0x188042d875501e12!2sAv.%20Francisco%20de%20Aguirre%203500%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1715725670944!5m2!1sen!2sar",
        descripcion: "Nuestra misión es proteger y promover los derechos de los niños, adolescentes y familias en nuestra provincia. Trabajamos incansablemente para brindar atención integral y apoyo a aquellos en situaciones de vulnerabilidad, construyendo un futuro más seguro y prometedor para todos. Tu colaboración es clave para lograrlo. Únete a nosotros en esta importante labor de amor y solidaridad."      
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

export default SubsecretariaNinez;