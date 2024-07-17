import React, { useState } from "react";
import "./Styles/Login.css";
import Fondo from './images/fondo.png';
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../../logic/useFetch";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      const token = data.token;
      const userId = data.userId;  
      console.log(token + 'id:' + id);

      if (response.ok) {
        setError("");
        onLogin(true);
        localStorage.setItem("token", token);
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


/* 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const url = "https://api-don-ar.vercel.app/fundaciones/login";

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
                const token = data.token;
                const id = data.userId;
                // Aquí podrías guardar el token en localStorage o contexto
                localStorage.setItem("token", token);
                navigate(`/perfil/${id}`);
            } else {
                setError(data.message || "Error en el inicio de sesión");
            }
        } catch (error) {
            setError("Error en la conexión con el servidor");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
}
*/