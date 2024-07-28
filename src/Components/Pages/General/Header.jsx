import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";
import LogoDonar from './Images/logo.png';
import ProfileImage from './Images/account_circle_40dp.svg';
import LogOutIcon from './Images/log-in-outline.svg'; // Asegúrate de importar el icono de logout

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const closeMenu = () => {
      setClicked(false);
      window.scrollTo(0, 0);
    };

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

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <>
      <nav>
        <a href="/" className="logo">
          <img src={LogoDonar} alt="" className="LogoDonAR" />
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
                <Link to="/perfil">
                  <img src={ProfileImage} alt="Perfil" className="PerfilBtn" />
                </Link>
                <button onClick={handleLogout} id="BotonContainer">
                  <img src={LogOutIcon} alt="Cerrar Sesion" className="LogOutIcon" />
                </button>
              </li>
            ) : (
              <li>
                <Link className="btnLogin" to="/login">
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
    </>
  );
};

export default Navbar;



