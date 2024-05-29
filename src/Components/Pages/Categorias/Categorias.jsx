import React from "react";
import "./Styles/Categorias.css";
import { Link } from "react-router-dom";

import dineroEtiqueta from './imagenes/card-outline.svg';
import comidaEtiqueta from './imagenes/fast-food-outline.svg';
import hogarEtiqueta from './imagenes/home-outline.svg';
import escolarEtiqueta from './imagenes/school-outline.svg';
import ropaEtiqueta from './imagenes/shirt-outline.svg';
import asistenciaEtiqueta from './imagenes/alarm-outline.svg';
import MedicamentosEtiqueta from './imagenes/medkit-outline.svg';
import JugueteEtiqueta from './imagenes/extension-puzzle-outline.svg';

const categorias = [
  { name: "Dinero", href: "/dinero", etiqueta: dineroEtiqueta },
  { name: "Comida", href: "/comida", etiqueta: comidaEtiqueta },
  { name: "Hogar", href: "/hogar", etiqueta: hogarEtiqueta },
  { name: "Escolar", href: "/escolar", etiqueta: escolarEtiqueta },
  { name: "Ropa", href: "/ropa", etiqueta: ropaEtiqueta },
  { name: "Asistencia", href: "/asistencia", etiqueta: asistenciaEtiqueta },
  { name: "Salud", href: "/medicamentos-y-higiene", etiqueta: MedicamentosEtiqueta },
  { name: "Juguetes", href: "/juguetes", etiqueta: JugueteEtiqueta }
];

const verTodoCategoria = { name: "Ver todo", href: "/todo" };


const Categorias = () => {
  return (
    <section id="ContainerCategorias">
      <h2 id="TituloCategoria">Seleccione una categoria</h2>
      <div className="CardsBloque">
        {categorias.map((categoria, index) => (
          <button className="CardsCategorias" key={index} onClick={() => window.location.href = categoria.href}>
            {categoria.etiqueta && <img src={categoria.etiqueta} id="IconCategoria" alt={categoria.name} />}
            <h2 id="tituloInteriorCards">{categoria.name}</h2>
          </button>
        ))}
      </div>
      <div id="EnlaceVerMas">
        <li>
          <Link className="btn btn-primary" id="BotonVerMas" onClick={() => window.location.href = verTodoCategoria.href} >Ver todas las categorias</Link>
        </li>
      </div>
    </section>
  );
};

export default Categorias;

