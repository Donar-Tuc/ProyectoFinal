import React, { Component } from "react";
import "./Styles/Dinero.css";
import TemplatePerfil from "./TemplatePerfil.jsx";
import centroLasMoritas from "./Imagenes/centroMoritas.png";

class CentroLasMoritas extends Component {
  render() {
    const opcionesDePerfiles = [
      {
        logo: centroLasMoritas,
        titulo: "Centro de Rehabilitación “Las Moritas",
        horario: "12pm a 7pm",
        direccion: "San Miguel de Tucumán",
        telefono: "38153374747",
        sitioWeb: "https://www.facebook.com/maternidad.tucuman/",
        mapaBoton: "https://maps.app.goo.gl/MpzxsJLqzfV9uZw36",
        email: "mailto:centromoritas@gmail.com",
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.995248268619!2d-65.22246121743778!3d-26.808279928777523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d004881b9c7%3A0xff38121ab8a6db75!2sMendoza!5e0!3m2!1sen!2sar!4v1715775216110!5m2!1sen!2sar',
        descripcion: "El Centro Residencial de Rehabilitación y Reinserción Social para Adictos ‘Las Moritas’ es una institución para recuperación de personas con consumos problemáticos de sustancias, en un formato de tratamiento de internación en comunidad. Recibe a personas del sexo masculino, de 14 a 30 años de edad, que hayan fracasado en los intentos de tratamientos ambulatorios, o que su situación revista un riesgo para sí mismo o terceros. Su capacidad actual es de 42 camas."      
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

export default CentroLasMoritas;