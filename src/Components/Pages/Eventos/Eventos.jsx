import React, { Component } from "react";
import Card from "./CardsEventos.jsx";
import "./css/eventos.css";


import BancoAlimentos from "./imagenes/BancoAlimentosLogo.png";
import Conin from "./imagenes/ConinLogo.png";
import Fann from "./imagenes/FannLogo.png";
import FundacionLeon from "./imagenes/FundacionLeonLogo.png";

// Importa otras imágenes necesarias

class Eventos extends Component {
    render() {
        return (
            <div className="EventosContainer">
                <h2 id="TituloEventosContainer">Eventos</h2>
                <Card
                    imagen={BancoAlimentos}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <Card
                    imagen={Conin}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <Card
                    imagen={Fann}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />


                <Card
                    imagen={FundacionLeon}
                    titulo="Banco de Alimentos"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />
        
            </div>
        );
    }
}

export default Eventos;
