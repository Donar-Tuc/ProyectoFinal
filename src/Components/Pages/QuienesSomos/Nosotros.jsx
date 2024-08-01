import React from "react";
import "./Styles/Nosotros.css";

const Nosotros = () => {
  return (
    <section id="NosotrosContainer">
      <div id="TextosNosotros">
        <h1 className="TituloSobreNosotros">Sobre Nosotros</h1>
        <br></br>
        <p>
          Don.Ar es una plataforma dedicada a conectar corazones generosos con
          causas que realmente importan. Nuestra misión es facilitar el proceso
          de dar y recibir, creando un puente entre las necesidades de las
          comunidades y aquellos que desean ayudar.<br></br> <br></br>
          En un mundo donde la desigualdad y las dificultades están presentes a
          diario, creemos que cada pequeña acción cuenta y que juntos podemos
          marcar una gran diferencia. A través de nuestra plataforma, los
          donantes pueden descubrir y apoyar una variedad de fundaciones y
          proyectos que trabajan incansablemente para mejorar vidas y construir
          un futuro más brillante.<br></br> <br></br>
          La transparencia es fundamental para nosotros, por lo que nos
          aseguramos de que cada transacción sea clara y cada fundación esté
          verificada para garantizar la máxima confianza.<br></br> <br></br>
          Te invitamos a colaborar con nuestra causa de la forma que puedas! Tus
          donaciones, nuestro compromiso.
        </p>
        <br></br>
        <h2 className="TituloSobreNosotros">Nuestro Equipo</h2>
        <br></br>
        <ul>
          <li>Tomás Fernandez Murga - Desarrollador Front End</li>
          <li>Tiziano Carranza - Desarrollador Back End</li>
          <li>Martin Fort - Desarrollador Back End</li>
          <li>Sebastian Brahim - QA</li>
          <li>Julieta Scarlata - Scrum Master</li>
        </ul>
      </div>
    </section>
  );
};

export default Nosotros;
