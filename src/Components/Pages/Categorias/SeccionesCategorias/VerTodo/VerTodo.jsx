import React from 'react';
import './styles/vertodo.css';
import CardVerTodo from "./CardTemplate.jsx";

// Imagenes 

import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import ConinLogo from "./Imagenes/ConinLogoGrande.png";
import Fann from "./Imagenes/FannLogoGrande.png";
import FundacionLeon from "./Imagenes/LeonLogoGrande.png";


const VerTodo = () => {
  return (
    <section id="VerTodoContainer">
        
        <div className="Organizaciones">
          <h2 id='TituloVerTodo'>Organizaciones</h2>
        </div>

        <CardVerTodo
                    imagen={BancoAlimentos}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                    url="/banco-alimentos"
               />

          <CardVerTodo
                    imagen={ConinLogo}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                    url="/conin"                    


                />

                <CardVerTodo
                    imagen={Fann}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                    url="/fann"
               />


                <CardVerTodo
                    imagen={FundacionLeon}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                    url="/leon"
                />

    </section>
  )
}

export default VerTodo