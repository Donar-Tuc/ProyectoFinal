import React, { Component } from "react";
import "./css/eventos.css";

import BancoAlimentos from "./imagenes/BancoAlimentosLogo.png"
import Fann from "./imagenes/FannLogo.png"
import ConinLogo from "./imagenes/ConinLogo.png"
import FundacionLeon from "./imagenes/FundacionLeonLogo.png"
// import Caritas from '../Images/Caritas.png'

class Eventos extends Component {
    render() {
        return (
            <>
            <body>
              
            
                <section id="EventosContainer">
                    <div className="content">
                        <h2 id="TituloEventos">Eventos</h2>

                    </div>
                </section>

                <section id="CardsContainer">
                    <div id="BloqueCards">
                        <div className="card1" >
                            
                            <div className="card-body">
                            <img src={BancoAlimentos} alt="" id="BancoAlimentosLogo" />
                                <h5 className="card-title">Banco de alimentos</h5>
                                <p className="horarios">abierto de 9am a 4pm</p>
                                <p className="card-text">El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.</p>

                                <div id="BotonSaberMas">
                                    <button type="button" className="btn btn-primary botonDonar">
                                        Saber Más
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card1" >
                            <div className="card-body">
                                <img src={ConinLogo} alt="" id="ConinLogo" />
                                <h5 className="card-title">Conin</h5>
                                <p className="horarios">abierto de 9am a 4pm</p>
                                <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                                <p className="card-text">El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.</p>
                                <div id="BotonSaberMas">
                                    <button type="button" className="btn btn-primary botonDonar">
                                        Saber Más
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card1" >
                            <div className="card-body">
                                <img src={Fann} alt="" id="FannLogo" />
                                <h5 className="card-title">FANN</h5>
                                <p className="horarios">abierto de 9am a 4pm</p>
                                <p className="card-text">El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.</p>
                                <div id="BotonSaberMas">
                                    <button type="button" className="btn btn-primary botonDonar">
                                        Saber Más
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card1" >
                            <div className="card-body">
                                <img src={FundacionLeon} alt="" id="FundacionLeonLogo" />
                                <h5 className="card-title">Fundacion Leon</h5>
                                <p className="horarios">abierto de 9am a 4pm</p>
                                <p className="card-text">El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.</p>
                                <div id="BotonSaberMas">
                                    <button type="button" className="btn btn-primary botonDonar">
                                        Saber Más
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card1" >
                            <div className="card-body">
                                <h5 className="card-title">Caritas</h5>
                                <p className="horarios">abierto de 9am a 4pm</p>
                                <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                                <p className="card-text">El día 3 de julio estaremos en la Facultad de Ingeniería de la UNSTA a las 15 horas recibiendo donaciones de comidas no perecederas y leche descremada.</p>
                                <div id="BotonSaberMas">
                                    <button type="button" className="btn btn-primary botonDonar">
                                        Saber Más
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                </body>
            </>
        );
    }
}

export default Eventos;