import React, { Component } from "react";
import Comunidad from "./Comunidad";
import Estadisticas from "./Estadisticas.jsx";
import Introduction from "./Introduction.jsx";
import ManerasAyudar from "./ManerasAyudar.jsx";
import TomaAccion from "./TomaAccion.jsx";
// import AlwaysOpenExample from "./PreguntasFrecuentes.jsx"
import AccordionExpandDefault from "./PreguntasFrecuentes.jsx";

class Inicio extends Component {

  render() {
    return (
      <>
      <Introduction />
      <ManerasAyudar />
      <TomaAccion />
      <Comunidad />
      <Estadisticas />
      {/* <AlwaysOpenExample /> */}
      <AccordionExpandDefault />
            
      </>
    );
  }
}

export default Inicio;