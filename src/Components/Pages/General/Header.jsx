import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";
import ProfileImage from './Images/account_circle_40dp.svg';
import LogOutIcon from './Images/log-in-outline.svg'; // Asegúrate de importar el icono de logout
import { useAuth } from '../../../logic/authContext'; // Asegúrate de que el path sea correcto

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { isLoggedIn, userId, logout } = useAuth(); // Uso del contexto de autenticación
  const navigate = useNavigate();

  useEffect(() => {
    const closeMenu = () => {
      setClicked(false);
      window.scrollTo(0, 0);
    };

    const links = document.querySelectorAll("#navbar li a");
    links.forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Eventos", href: "/eventos" },
    { name: "Soporte", href: "/soporte" }
  ];

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    logout(); // Llama al método de logout del contexto
    navigate('/');
  };

  return (
    <nav>
      <a href="/" className="logo">
        <svg
          id="logo-86"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG Paths */}
        </svg>
      </a>

      <div id="Menu">
        <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
          {links.map((x, index) => (
            <li key={index}>
              <Link to={x.href}>{x.name}</Link>
            </li>
          ))}

          {isLoggedIn ? (
            <li className="ContainerBotonHead">
              <Link to={`/perfil/${userId}`}>
                <img src={ProfileImage} alt="Perfil" className="PerfilBtn"/>
              </Link>
              <button onClick={handleLogout} id="BotonContainer">
                <img src={LogOutIcon} alt="Cerrar Sesion" className="LogOutIcon" />
              </button>
            </li>
          ) : (
            <li>
              <Link className="btnLogin" to="/login" onClick={handleClick}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
