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
        mapaBoton: "https://maps.app.goo.gl/pzxC1UsaThetzYEc6",
        email: "mailto:centromoritas@gmail.com",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.992997706015!2d-65.22019772489107!3d-26.808351588850723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c4977af80df%3A0x832f8bf7886d79a0!2sLas%20Moritas%20Centro%20De%20Reabilitacion!5e0!3m2!1sen!2sar!4v1715726767798!5m2!1sen!2sar",
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