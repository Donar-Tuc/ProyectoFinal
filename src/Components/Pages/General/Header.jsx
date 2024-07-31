import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";
import LogoDonar from "./Images/logo.png";
import ProfileImage from './Images/account_circle_40dp.svg';
import LogOutIcon from './Images/log-in-outline.svg'; // Asegúrate de importar el icono de logout
import { useAuth } from '../../../logic/authContext'; // Asegúrate de que el path sea correcto

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { isLoggedIn, userId, logout } = useAuth(); // Uso del contexto de autenticación
  const navigate = useNavigate();

  useEffect(() => {
    const links = document.querySelectorAll("#navbar li a, .btnLogin");
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

  const closeMenu = () => {
    setClicked(false);
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    logout(); // Llama al método de logout del contexto
    closeMenu(); // Cierra el menú
    navigate('/');
  };

  return (
    <nav>
      <a href="/" className="logo">
        <img src={LogoDonar} alt="" className="LogoDonAR" />
      </a>

      <div id="Menu">
        <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
          {links.map((x, index) => (
            <li key={index}>
              <Link to={x.href} onClick={closeMenu}>{x.name}</Link>
            </li>
          ))}

          {isLoggedIn ? (
            <li className="ContainerBotonHead">
              <Link to={`/perfil/${userId}`} onClick={closeMenu}>
                <img src={ProfileImage} alt="Perfil" className="PerfilBtn" />
              </Link>
              <button onClick={handleLogout} id="BotonContainer">
                <img
                  src={LogOutIcon}
                  alt="Cerrar Sesion"
                  className="LogOutIcon"
                />
              </button>
            </li>
          ) : (
            <li>
              <Link className="btnLogin" to="/login" onClick={closeMenu}>
                Acceder
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
