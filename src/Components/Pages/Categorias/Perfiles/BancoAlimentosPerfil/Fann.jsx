import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import Fann from "./Imagenes/FannLogoGrande.png";

class FannPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: Fann,
        titulo: "Fann",
        horario: "8am - 6pm de lunes a viernes",
        direccion: "Combate de Las Piedras 130",
        telefono: "03814312783",
        sitioWeb: "http://fann-tucuman.com.ar/",
        email: "direccion_fann@outlook.com",
        mapaBoton: "https://maps.app.goo.gl/tsTG3RrCP7pgaZ5Z8",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14242.010904998357!2d-65.21668159518265!3d-26.823958077199517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c05ce600e41%3A0x6caddbaa598df022!2sFann!5e0!3m2!1sen!2sar!4v1714417549728!5m2!1sen!2sar",  
        descripcion: 'En FANN (Fundación de Ayuda a Niños Necesitados), tenemos un compromiso inquebrantable con los niños más vulnerables de Tucumán. Nuestra misión es ofrecerles amor, protección y oportunidades para un futuro mejor. Desde programas educativos hasta atención médica especializada, trabajamos incansablemente para garantizar que cada niño tenga las herramientas necesarias para alcanzar su máximo potencial.',
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

export default FannPerfil;