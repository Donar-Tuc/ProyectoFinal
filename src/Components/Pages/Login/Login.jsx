import React, { Component } from "react";
import "./Styles/Login.css";

class Login extends Component {

  render() {
    return (
      <>
        <section className="LoginContainer">

          <div id="FormularioLoginContainer">
            <div className="bloque1">
                <h1>Poner imagen</h1> 
                {/* Pone aca la foto */}
            </div>

            <div className="bloque2">
                <h1>Hola</h1>
                {/* inputs:
                
                podes integrar este form si queres:

                https://uiverse.io/micaelgomestavares/dull-walrus-66

                obviamente le podes sacar lo que no usemos
                
                */}
            </div>
          </div>
          
        </section>
            
      </>
    );
  }
}

export default Login;