import React, { Component } from "react";
import Comunidad from "./Comunidad";
import Estadisticas from "./Estadisticas.jsx";
import Introduction from "./Introduction.jsx";
import BloqueAyudar from "./ManerasAyudar.jsx";
import TomaAccion from "./TomaAccion.jsx";
import AlwaysOpenExample from "./PreguntasFrecuentes.jsx"


class Inicio extends Component {

  render() {
    return (
      <>
      <Introduction />
      <BloqueAyudar />
      <TomaAccion />
      <Comunidad />
      <Estadisticas />
      <AlwaysOpenExample />
            
      </>
    );
  }
}

export default Inicio;