import React, { Component } from "react";
import CardAsistencia from "./CardsTemplate.jsx";
import "./Styles/Asistencia.css";



// Imagenes 

import BancoAlimentos from "./Imagenes/BancoAlimentosLogo.png";
import ConinLogo from "./Imagenes/ConinLogoGrande.png";
import Fann from "./Imagenes/FannLogoGrande.png";
import FundacionLeon from "./Imagenes/LeonLogoGrande.png";


// Importa otras imágenes necesarias

class Asistencia extends Component {
    render() {
        return (
            <div className="AsistenciaContainer">
                <h2 id="TituloAsistenciaContainer">Asistencia</h2>

                <CardAsistencia
                    imagen={BancoAlimentos}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <CardAsistencia
                    imagen={ConinLogo}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <CardAsistencia
                    imagen={Fann}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />


                <CardAsistencia
                    imagen={FundacionLeon}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />
        
            </div>
        );
    }
}

export default Asistencia;