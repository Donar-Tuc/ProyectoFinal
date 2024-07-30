import React, { Component } from "react";
import CardsAyudar from "./CardsManerasAyuda.jsx";

class ManerasAyudar extends Component {
  render() {
    const opcionesDeAyuda = [
      {
        titulo: "Dinero",
        descripcion: "Apoya causas con contribuciones monetarias.",
        url: "/categorias/Donaciones%20monetarias",
      },
      {
        titulo: "Comida",
        descripcion: "Ayuda con alimentos para quienes lo necesitan.",
        url: "/categorias/Alimentos%20no%20perecederos",
      },
      {
        titulo: "Hogar",
        descripcion: "Proporciona muebles y electrodomésticos.",
        url: "/categorias/Elementos%20del%20hogar",
      },
      {
        titulo: "Escolar",
        descripcion: "Ofrece útiles escolares para la educación.",
        url: "/categorias/Útiles%20escolares",
      },
      {
        titulo: "Ropa",
        descripcion: "Comparte ropa con quienes lo necesitan",
        url: "/categorias/Vestimenta",
      },
      {
        titulo: "Asistencia",
        descripcion: "Dona tu tiempo y unite a nuestros voluntariados.",
        url: "/categorias/Asistencia%20y%20voluntariados",
      },
      {
        titulo: "Salud",
        descripcion: "Medicación y productos de higiene.",
        url: "/categorias/Medicamentos",
      },
      {
        titulo: "Juguetes",
        descripcion: "Comparte juguetes con los niños.",
        url: "/categorias/Juguetes",
      },
    ];

    return (
      <div>
        <CardsAyudar opciones={opcionesDeAyuda} />
      </div>
    );
  }
}

export default ManerasAyudar;
