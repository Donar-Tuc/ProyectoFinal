import React, { Component } from "react";
import "./Styles/Categorias.css";
// import TemplatePerfiles from './Perfiles/TemplatePerfiles';
import { Link } from "react-router-dom";


const LinkDinero = [
  {
    name: "Donar",
    href: "/dinero"
  }
]
  const LinkComida = [
    {
      name: "Donar",
      href: "/comida"
    }
  ]

  const LinkHogar = [
    {
      name: "Donar",
      href: "/hogar"
    }
  ]

  const LinkEscolar = [
    {
      name: "Donar",
      href: "/escolar"
    }
  ]

  const LinkRopa = [
    {
      name: "Donar",
      href: "/ropa"
    }
  ]

  const LinkAsistencia = [
    {
      name: "Donar",
      href: "/asistencia"
    }
  ]




class Categorias extends Component {
    render() {
      return (
        <>
          <section id="ContainerCategorias">

            <h2 id="TituloCategoria">Categorias</h2>

            <div className="CardsBloque">
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Dinero</h2>
                        <div id="EnlaceCategorias" >
                      {LinkDinero.map((x, index) => (
                        <li key={index}>
                          <Link id="BtnCategoria" to={x.href}>{x.name}</Link>
                        </li>
                       ))}
                  </div>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Comida</h2>
                         <div id="EnlaceCategorias" >
                      {LinkComida.map((x, index) => (

                        <li key={index}>
                          <Link id="BtnCategoria" to={x.href}>{x.name}</Link>
                        </li>
                       ))}
                  </div>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Hogar</h2>
                         <div id="EnlaceCategorias" >
                      {LinkHogar.map((x, index) => (
                        <li key={index}>
                          <Link id="BtnCategoria" to={x.href}>{x.name}</Link>
                        </li>
                       ))}
                  </div>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Escolar</h2>
                         <div id="EnlaceCategorias" >
                      {LinkEscolar.map((x, index) => (
                        <li key={index}>
                          <Link id="BtnCategoria" to={x.href}>{x.name}</Link>
                        </li>
                       ))}
                  </div>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Ropa</h2>
                         <div id="EnlaceCategorias" >
                      {LinkRopa.map((x, index) => (
                        <li key={index}>
                          <Link id="BtnCategoria" to={x.href}>{x.name}</Link>
                        </li>
                       ))}
                  </div>
                    </div>
                    <div className="CardsCategorias">
                        <h2 id="tituloInteriorCards">Asistencia</h2>
                         <div id="EnlaceCategorias" >
                      {LinkAsistencia.map((x, index) => (
                        <li key={index}>
                          <Link id="BtnCategoria" to={x.href}>{x.name}</Link>
                        </li>
                       ))}
                  </div>
                    </div>

            </div>

            
                
          </section>
        </>
      );
    }
  }
  
  export default Categorias;