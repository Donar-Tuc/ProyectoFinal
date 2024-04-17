import React, { Component } from "react";
import CardsAyudar from "./CardsManerasAyuda.jsx";

class ManerasAyudar extends Component {
  render() {
    const opcionesDeAyuda = [
      { titulo: "Dinero", descripcion: "Dona dinero. Ayuda causas importantes. Transforma vidas.", url: "/donar-dinero" },
      { titulo: "Comida", descripcion: "Dona comida. Alimenta a quienes lo necesitan.", url: "/donar-comida" },
      { titulo: "Hogar", descripcion: "Dona hogar. Brinda refugio a personas sin vivienda.", url: "/donar-hogar" },
      { titulo: "Escolar", descripcion: "Dona material escolar. Facilita el acceso a la educación.", url: "/donar-escolar" },
      { titulo: "Vestimenta", descripcion: "Dona ropa. Ayuda a personas a vestirse adecuadamente.", url: "/donar-ropa" },
      { titulo: "Asistencia", descripcion: "Proporciona asistencia directa a personas necesitadas.", url: "/asistencia" },
      // Agrega más opciones de ayuda aquí según sea necesario
    ];

    return (
      <div>
        <CardsAyudar opciones={opcionesDeAyuda} />
      </div>
    );
  }
}

export default ManerasAyudar;
