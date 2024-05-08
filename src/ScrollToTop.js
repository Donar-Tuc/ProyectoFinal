// ScrollToTop.js

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar hacia arriba al cambiar de ruta
    }, [pathname]);

    return null; // Este componente no renderiza nada en la interfaz
};

export default ScrollToTop;
