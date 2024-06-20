import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js'; // Importa el componente ScrollToTop
import { ScrollProvider } from './ScrollContext.js';
import React from 'react';

//Imports eventos, soporte, inicio y login
import Navbar from './Components/Pages/General/Header.jsx';
import Inicio from './Components/Pages/Home/Home.jsx';
import Eventos from './Components/Pages/Eventos/Eventos.jsx';
import Footer from './Components/Pages/General/Footer.jsx';
import Nosotros from './Components/Pages/QuienesSomos/Nosotros.jsx';
import Soporte from './Components/Pages/Soporte/Soporte.jsx';
import Signup from './Components/Pages/Login/Signup.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import OlvidasteContraseña from './Components/Pages/Login/OlvidasteContraseña.jsx'

// Categocio Container
import Categorias from './Components/Pages/Categorias/Categorias.jsx';

// Categorias secciones
import Fundaciones from './Components/Pages/Categorias/SeccionesCategorias/Fundaciones/Fundaciones.jsx';

import TemplatePerfil from './Components/Pages/Categorias/Perfiles/TemplatePerfil.jsx';

/* 
TODO: EVENTOS
Actualizar API, model y controller.
Crear un evento en la db
Hacer tema fetch y demas
*/

function App() {
  return (
    <Router>
      <ScrollProvider>
        <ScrollToTop />
        <div>
          <Navbar />
          <Routes>
            {/* Secciones */}
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/eventos' element={<Eventos />}></Route>
            <Route path='/soporte' element={<Soporte />}></Route>
            <Route path='/nosotros' element={<Nosotros />}></Route>

            {/* Login */}

            <Route path='/login' element={<Login />}></Route>
            <Route path='/registrarse' element={<Signup />}></Route>
            <Route path='/recuperar-contrasena' element={<OlvidasteContraseña />}></Route>

            {/* Categorias */}
            <Route path='/categorias' element={<Categorias />}></Route> {/* Seleccionar categorias */}

            <Route path='/todo' element={<Fundaciones />}></Route> {/* Pagina de cada categoria */}
            <Route path='/categorias/:categoria' element={<Fundaciones />}></Route> {/* Pagina de cada categoria */}

          <Route path={`/fundaciones/:id`} element={<TemplatePerfil />} />

          </Routes>
          <Footer />
        </div>
      </ ScrollProvider>

    </Router>
  );
}

export default App;

