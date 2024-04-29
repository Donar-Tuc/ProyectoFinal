import React, { Component } from "react";
import CardsAyudar from "./CardsManerasAyuda.jsx";

class ManerasAyudar extends Component {
  render() {
    const opcionesDeAyuda = [
      { titulo: "Dinero", descripcion: "Dona dinero. Ayuda causas importantes.", url: "/dinero" },
      { titulo: "Comida", descripcion: "Dona comida. Alimenta a quienes lo necesitan.", url: "/comida" },
      { titulo: "Hogar", descripcion: "Dona electrodomesticos y muebles. Ayuda a quienes mas necesitan.", url: "/hogar" },
      // { titulo: "Escolar", descripcion: "Dona material escolar. Facilita el acceso a la educación.", url: "/escolar" },
      // { titulo: "Vestimenta", descripcion: "Dona ropa. Ayuda a personas a vestirse adecuadamente.", url: "/ropa" },
      // { titulo: "Asistencia", descripcion: "Proporciona asistencia directa a personas necesitadas.", url: "/asistencia" },
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
