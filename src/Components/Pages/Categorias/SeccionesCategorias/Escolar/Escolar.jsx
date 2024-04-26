import React, { Component } from "react";
import CardEscolar from "./CardsTemplate.jsx";
import "../Style.css";

// Imagenes 

// import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
// import ConinLogo from "./Imagenes/ConinLogoGrande.png";
import Fann from "./Imagenes/FannLogoGrande.png";
import FundacionLeon from "./Imagenes/LeonLogoGrande.png";


// Importa otras imágenes necesarias

class Escolar extends Component {
    render() {
        return (
            <div className="AsistenciaContainer">
                <h2 id="TituloAsistenciaContainer">Escolar</h2>


                <CardEscolar
                    imagen={Fann}
                    titulo="Fann"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                    url="/fann"
                />


                <CardEscolar
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

export default Escolar;