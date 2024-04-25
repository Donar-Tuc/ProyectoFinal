import React, { Component } from "react";
import CardRopa from "./CardsTemplate.jsx";
import "./Styles/Ropa.css";



// Imagenes 

import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import ConinLogo from "./Imagenes/ConinLogoGrande.png";
import Fann from "./Imagenes/FannLogoGrande.png";
import FundacionLeon from "./Imagenes/LeonLogoGrande.png";


// Importa otras imágenes necesarias

class Ropa extends Component {
    render() {
        return (
            <div className="AsistenciaContainer">
                <h2 id="TituloAsistenciaContainer">Ropa</h2>

                <CardRopa
                    imagen={BancoAlimentos}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <CardRopa
                    imagen={ConinLogo}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <CardRopa
                    imagen={Fann}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />


                <CardRopa
                    imagen={FundacionLeon}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />
        
            </div>
        );
    }
}

export default Ropa;