import React, { useEffect, useRef } from "react";
import "./Styles/Estadisticas.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Estadisticas = () => {
  const estadisticasRef = useRef(null);

  useEffect(() => {
    AOS.init();
    
    const animateCount = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.count');
          elements.forEach((el) => {
            const start = parseInt(el.getAttribute('data-start'), 10);
            const end = parseInt(el.getAttribute('data-end'), 10);
            const duration = parseInt(el.getAttribute('data-duration'), 10);
            animateCount(el, start, end, duration);
          });
        } else {
          const elements = entry.target.querySelectorAll('.count');
          elements.forEach((el) => {
            el.innerText = el.getAttribute('data-start');
          });
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(estadisticasRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section id="EstadisticasContainer" ref={estadisticasRef}>
        <h2 id="TituloEstadisticas" >Nuestra Trayectoria</h2>
        <p className="descripcionEstadisticas">
          Nos especializamos en guiar a personas que desean donar pero necesitan orientación. Con una trayectoria sólida, proporcionamos información confiable para que cada donante contribuya de manera informada y segura.
        </p>
        {/* <p className="descripcionEstadisticas">Facilitamos el proceso de donación, asegurando que cada acto de generosidad tenga un impacto positivo y significativo.</p> */}

        <div className="Bloqueestadisticas">
          <div className="Estadistica" >
            <h2 className="SignoMas">+ <span id="NumeroEst" className="count" data-start="0" data-end="4500" data-duration="1000">0</span></h2>
            <h2 id="TextEst">Donaciones</h2>
          </div>
          <div className="Estadistica" >
            <h2 className="SignoMas">+ <span id="NumeroEst" className="count" data-start="0" data-end="50" data-duration="1000">0</span></h2>
            <h2 id="TextEst">Fundaciones</h2>
          </div>
          <div className="Estadistica" >
          <h2 className="SignoMas">+ <span id="NumeroEst" className="count" data-start="0" data-end="10" data-duration="1000">0</span></h2>
            <h2 id="TextEst">Años ayudando</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Estadisticas;
