import React from "react";
import "./Styles/Categorias.css";
import { Link } from "react-router-dom";

import dineroEtiqueta from './Etiquetas/card-outline.svg';
import comidaEtiqueta from './Etiquetas/fast-food-outline.svg';
import hogarEtiqueta from './Etiquetas/home-outline.svg';
import escolarEtiqueta from './Etiquetas/school-outline.svg';
import ropaEtiqueta from './Etiquetas/shirt-outline.svg';
import asistenciaEtiqueta from './Etiquetas/alarm-outline.svg';
import MedicamentosEtiqueta from './Etiquetas/medkit-outline.svg';
import JugueteEtiqueta from './Etiquetas/extension-puzzle-outline.svg';

const categorias = [
  { name: "Dinero", href: "/categorias/Donaciones%20monetarias", etiqueta: dineroEtiqueta },
  { name: "Comida", href: "/categorias/Alimentos%20no%20perecederos", etiqueta: comidaEtiqueta },
  { name: "Hogar", href: "/categorias/Elementos%20del%hogar", etiqueta: hogarEtiqueta },
  { name: "Escolar", href: "/categorias/Utiles%20escolares", etiqueta: escolarEtiqueta },
  { name: "Ropa", href: "/categorias/Vestimenta", etiqueta: ropaEtiqueta },
  { name: "Asistencia", href: "/categorias/Asistencia%20y%20voluntariados", etiqueta: asistenciaEtiqueta },
  { name: "Salud", href: "/categorias/Medicamentos", etiqueta: MedicamentosEtiqueta },
  { name: "Juguetes", href: "/categorias/Juguetes", etiqueta: JugueteEtiqueta }
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

