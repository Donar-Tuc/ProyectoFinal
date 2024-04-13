import React, { Component } from "react";
import "./Styles/Carrousel.css";

import BancoAlimentos from "../Images/BancoAlimento.png"
import Fann from "../Images/Fann.png"
import Conin from "../Images/Conin.png"
import FundacionLeon from "../Images/fundacionLeon.png"
import Caritas from '../Images/Caritas.png'


class Carrousel extends Component {
  
  render() {
    return (
      <>
        <div class="slider">
	<div class="slide-track">
		<div class="slide">
        <img src={BancoAlimentos} height="100" width="220" alt="" />
		</div>
		<div class="slide">
            <img src={Fann} height="100" width="190" alt="" />
		</div>
		<div class="slide">
            <img src={Conin} height="100" width="200" alt="" />		
            </div>
		<div class="slide">
        <img src={FundacionLeon} height="100" width="220" alt="" />		
        </div>
        <div class="slide">
        <img src={Caritas} height="100" width="230" alt="" />		
        </div>
		
	</div>
</div>
            
      </>
    );
  }
}

export default Carrousel;