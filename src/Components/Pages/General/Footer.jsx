import React, { useEffect } from "react";
import "./Styles/Footer.css";
import { Link, useLocation } from "react-router-dom";
import FotoLogo from './Images/logo.png'

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar hacia arriba al cambiar de ruta
  }, [pathname]);

  const links = [
    {
      name: "Inicio",
      href: "/"
    },
    {
      name: "Eventos",
      href: "/eventos",
    },
    {
      name: "Soporte",
      href: "/soporte",
    }
  ];

  return (
    <>
      <footer id="FooterSection">
        <img src={FotoLogo} alt="Logo don ar" className="LogoFooter" />
        <div className="Menu">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <CustomLink href={link.href}>{link.name}</CustomLink>
              </li>
            ))}
          </ul>
        </div>
        <p id="Copyright">Copyright © 2024 Don Ar. All rights reserved.</p>
      </footer>
    </>
  );
};

const CustomLink = ({ href, children }) => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Desplazar hacia arriba al hacer clic en el enlace
  };

  return <Link to={href} onClick={handleClick}>{children}</Link>;
};

export default Footer;
