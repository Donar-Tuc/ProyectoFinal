import React, { Component } from "react";
import CardsAyudar from "./CardsManerasAyuda.jsx";

class ManerasAyudar extends Component {
  render() {
    const opcionesDeAyuda = [
      { titulo: "Dinero", descripcion: "Apoya causas con contribuciones monetarias.", url: "/dinero" },
      { titulo: "Comida", descripcion: "Ayuda con alimentos para quienes lo necesitan.", url: "/comida" },
      { titulo: "Hogar", descripcion: "Proporciona muebles y electrodomésticos.", url: "/hogar" },
      { titulo: "Escolar", descripcion: "Ofrece útiles escolares para la educación.", url: "/escolar" },
      { titulo: "Ropa", descripcion: "Comparte ropa con quienes lo necesitan", url: "/ropa" },
      { titulo: "Asistencia", descripcion: "Dona tu tiempo y unite a nuestros voluntariados.", url: "/asistencia" },
      { titulo: "Salud", descripcion: "Medicación y productos de higiene.", url: "/medicamentos-y-higiene" },
      { titulo: "Juguetes", descripcion: "Comparte juguetes con los niños.", url: "/juguetes" },
    ];

    return (
      <div>
        <CardsAyudar opciones={opcionesDeAyuda} />
      </div>
    );
  }
}

export default ManerasAyudar;
