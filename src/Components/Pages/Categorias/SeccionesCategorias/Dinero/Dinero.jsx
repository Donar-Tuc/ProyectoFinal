import React, { Component } from "react";
import CardDinero from "./CardsTemplate.jsx";
import "./Styles/Dinerotemplate.css";



// Imagenes 

import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import ConinLogo from "./Imagenes/ConinLogoGrande.png";
import Fann from "./Imagenes/FannLogoGrande.png";
import FundacionLeon from "./Imagenes/LeonLogoGrande.png";


// Importa otras imágenes necesarias

class Dinero extends Component {
    render() {
        return (
            <div className="AsistenciaContainer">
                <h2 id="TituloAsistenciaContainer">Dinero</h2>


                <CardDinero
                    imagen={Fann}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />
                <CardDinero
                    imagen={BancoAlimentos}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                    url= '/dinero'
                />

                <CardDinero
                    imagen={ConinLogo}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

               


                <CardDinero
                    imagen={FundacionLeon}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />
        
            </div>
        );
    }
}

export default Dinero;