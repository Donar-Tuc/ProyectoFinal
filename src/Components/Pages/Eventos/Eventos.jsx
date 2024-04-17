import React, { Component } from "react";
import Card from "./CardsEventos.jsx";
import "./css/eventos.css";



import BancoAlimentos from "./imagenes/BancoAlimentos.png";
import Conin from "./imagenes/Conin.png";
import Fann from "./imagenes/Fann.png";
import FundacionLeon from "./imagenes/Leon.png";

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
                    titulo="Conin"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <Card
                    imagen={Fann}
                    titulo="Fann"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />


                <Card
                    imagen={FundacionLeon}
                    titulo="Fundacion Leon"
                    horario="9am - 4pm de lunes a viernes"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />
        
            </div>
        );
    }
}

export default Eventos;
