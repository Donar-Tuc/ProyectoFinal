// Login.js
import React, { useState } from "react";
import "./Styles/Login.css";
import Fondo from './images/fondo.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../../logic/authContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();  // Utiliza el hook useAuth

  const url = "https://api-don-ar.vercel.app/fundaciones/login";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setError("");
        const { token, userId } = data;
        login(token);  // Llamar a la función login del contexto
        localStorage.setItem("userId", userId);
        navigate(`/perfil/${userId}`);
      } else {
        setError(data.message || "Error en el inicio de sesión");
      }
    } catch (error) {
      setError("Error en la conexión con el servidor");
    }
  };

  return (
    <section className="LoginContainer">
      <div id="FormularioLoginContainer">
        <div className="bloque1">
          <img src={Fondo} alt="" id="FondoLogin" />
        </div>
        <div className="bloque2">
          <form className="form1" onSubmit={handleLogin}>
            <p id="heading1">Inicio de sesión</p>
            <div className="field">
              <ion-icon className="iconoInputForm" name="at-outline"></ion-icon>
              <input
                autoComplete="off"
                placeholder="Correo Electrónico"
                className="input-field"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <ion-icon className="iconoInputForm" name="lock-closed-outline"></ion-icon>
              <input
                placeholder="Contraseña"
                className="input-field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="buttons">
              <div className="botonesLogincontainer">
                <button className="buttonLoginAccess" type="submit">Acceder</button>
                <Link to="/registrarse">
                  <button className="buttonRegister" type="button">Registrarse</button>
                </Link>
              </div>
              <Link to="/recuperar-contrasena">
                <button className="buttonForgotPassword" type="button">¿Olvidaste tu contraseña?</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
