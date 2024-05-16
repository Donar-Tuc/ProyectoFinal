import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import LogoBancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";



class BancoAlimentosPerfil extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: LogoBancoAlimentos,
        titulo: "Banco de Alimentos",
        horario: "9am - 4pm de lunes a viernes",
        direccion: "Diego de Villarroel 56, San Miguel de Tucumán",
        telefono: "+5403815392255",
        sitioWeb: "https://bancodealimentostuc.org.ar/",
        email: "info@bancodealimentostuc.org.ar",
        mapaBoton: "https://maps.app.goo.gl/meQ8ztMvNBucbdD28",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.667433428782!2d-65.19281699999999!3d-26.818716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d2a5e3ab627%3A0x5d42cc9b9121844a!2sFundaci%C3%B3n%20Banco%20de%20Alimentos%20de%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1715716837381!5m2!1sen!2sar",  
        descripcion: 'En el Banco de Alimentos de Tucumán, luchamos contra el hambre y el desperdicio alimentario con pasión y compromiso. Somos un eslabón vital en la cadena de solidaridad, recolectando alimentos excedentes y distribuyéndolos equitativamente entre quienes más lo necesitan en nuestra comunidad. Cada día, nuestro equipo trabaja con dedicación y eficiencia para garantizar que ningún plato se quede vacío y que cada persona reciba la nutrición que merece. Con tu colaboración, podemos seguir siendo un faro de esperanza en la lucha contra el hambre en Tucumán.'
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

export default BancoAlimentosPerfil;
