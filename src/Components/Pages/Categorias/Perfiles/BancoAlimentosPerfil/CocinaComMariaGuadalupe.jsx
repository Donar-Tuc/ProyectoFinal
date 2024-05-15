import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import CocinaMariaGuadalupePerfil from "./Imagenes/cocinaGuada.png";

class CocinaMariaGuadalupe extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: CocinaMariaGuadalupePerfil,
        titulo: "Cocina Comunitaria María de Guadalupe",
        horario: "10am a 6pm",
        direccion: "Torres Posse 1550, San Miguel de Tucumán, Tucumán",
        telefono: "3815678231",
        sitioWeb: "https://www.facebook.com/maternidad.tucuman/",
        mapaBoton: "https://maps.app.goo.gl/1rVttZWPmFcj57cg8",
        email: "mailto:cocinaGuadalupe@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.884949654867!2d-65.26621732395323!3d-26.843611390321275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d12be85844b%3A0x2075d45e0e0fd2c7!2sCocina%20Mar%C3%ADa%20de%20Guadalupe!5e0!3m2!1sen!2sar!4v1715718517888!5m2!1sen!2sar",
        descripcion: "En nuestro hogar, extendemos una cálida bienvenida a toda nuestra comunidad en Tucumán. Somos más que una simple cocina; somos un lugar donde los corazones se llenan de alegría y los estómagos se llenan de deliciosos platillos. Nuestro objetivo es crear un ambiente acogedor y amigable donde todos se sientan como en casa. Desde los más pequeños hasta los más grandes, todos son bienvenidos a disfrutar de una comida nutritiva y sabrosa. ¡Con tu apoyo y sonrisa, seguimos cocinando amor y solidaridad para todos en nuestra querida comunidad!"      
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

export default CocinaMariaGuadalupe;