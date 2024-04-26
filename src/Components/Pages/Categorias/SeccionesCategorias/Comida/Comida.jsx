import React, { Component } from "react";
import CardComida from "./CardsTemplate";

import "../Style.css";



// Imagenes 

import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import ConinLogo from "./Imagenes/ConinLogoGrande.png";
import Fann from "./Imagenes/FannLogoGrande.png";
import FundacionLeon from "./Imagenes/LeonLogoGrande.png";


// Importa otras imágenes necesarias

class Comida extends Component {
    render() {
        return (
            <div className="AsistenciaContainer">
                <h2 id="TituloAsistenciaContainer">Comida</h2>

                    <CardComida
                        imagen={ConinLogo}
                        titulo="Banco de Alimentos"
                        horario="9am - 4pm de lunes a viernes"
                        descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                        url="/conin"                    
                        />

                    <CardComida
                        imagen={BancoAlimentos}
                        titulo="Banco de Alimentos"
                        horario="9am - 4pm de lunes a viernes"
                        descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                        url="/banco-alimentos"
                    />

                    <CardComida
                        imagen={Fann}
                        titulo="Banco de Alimentos"
                        horario="9am - 4pm de lunes a viernes"
                        descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                        url="/fann"
                        />

                    <CardComida
                        imagen={FundacionLeon}
                        titulo="Fundacion Leon"
                        horario="9am - 4pm de lunes a viernes"
                        descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                        url="/leon"
                    />

            </div>
        );
    }
}

export default Comida;