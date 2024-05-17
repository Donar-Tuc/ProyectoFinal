import React from "react";
import "./Styles/Categorias.css";
import { Link } from "react-router-dom";

const categorias = [
  { name: "Dinero", href: "/dinero" },
  { name: "Comida", href: "/comida" },
  { name: "Hogar", href: "/hogar" },
  { name: "Escolar", href: "/escolar" },
  { name: "Ropa", href: "/ropa" },
  { name: "Asistencia", href: "/asistencia" }
];

const Categorias = () => {
  return (
    <section id="ContainerCategorias">
      <h2 id="TituloCategoria">Categorias</h2>
      <div className="CardsBloque">
        {categorias.map((categoria, index) => (
          <div className="CardsCategorias" key={index}>
            <h2 id="tituloInteriorCards">{categoria.name}</h2>
            <div id="EnlaceCategorias">
              <li>
                <Link id="BtnCategoria" to={categoria.href}>Donar</Link>
              </li>
            </div>
          </div>
        ))}
      </div>
      <div id="EnlaceVerMas" data-aos="fade-up">
        <li>
          <Link className="btn btn-primary" id="BotonVerMas" to="/todo">Ver todas las categorias</Link>
        </li>
      </div>
    </section>
  );
};

export default Categorias;