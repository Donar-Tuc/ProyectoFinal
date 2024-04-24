import React, { Component } from "react";
import "./Styles/Categorias.css";
// import cardsCategorias from "./cardsCategorias.jsx";

class Categorias extends Component {
    render() {
      return (
        <>
          <section id="ContainerCategorias">

            <h2 id="TituloCategoria">Categorias</h2>

            <div className="CardsBloque">
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Dinero</h2>
                        <button id="BtnCategoria">Donar</button>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Comida</h2>
                        <button id="BtnCategoria">Donar</button>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Hogar</h2>
                        <button id="BtnCategoria">Donar</button>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Escolar</h2>
                        <button id="BtnCategoria">Donar</button>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Ropa</h2>
                        <button id="BtnCategoria">Donar</button>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Asistencia</h2>
                        <button id="BtnCategoria">Donar</button>
                    </div>

            </div>

            
                
          </section>
        </>
      );
    }
  }
  
  export default Categorias;