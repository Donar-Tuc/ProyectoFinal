// poner aca las props ya hechas con la informacion

import React, { Component } from "react";
import TemplatePerfiles from "./TemplatePerfiles";
import "./styles/ContainerPerfiles.css";

import BancoAlimentos from "./imagenes/BancoAlimentos.png";
import Conin from "./imagenes/Conin.png";
import Fann from "./imagenes/Fann.png";
import FundacionLeon from "./imagenes/Leon.png";

// Importa otras imágenes necesarias

class Perfiles extends Component {
    render() {
        return (
            <div className="PerfilesContainer">
                <h2 id="TituloPerfilesContainer">Organizaciones</h2>
                <TemplatePerfiles
                    imagen={BancoAlimentos}
                    titulo="Banco de Alimentos"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <TemplatePerfiles
                    imagen={Conin}
                    titulo="Conin"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />

                <TemplatePerfiles
                    imagen={Fann}
                    titulo="Fann"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />


                <TemplatePerfiles
                    imagen={FundacionLeon}
                    titulo="Fundacion Leon"
                    descripcion="El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada."
                />
        
            </div>
        );
    }
}

export default Perfiles;