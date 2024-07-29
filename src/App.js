// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js'; // Importa el componente ScrollToTop
import { ScrollProvider } from './ScrollContext.js';


// Imports de componentes
import Navbar from './Components/Pages/General/Header.jsx';
import Inicio from './Components/Pages/Home/Home.jsx';
import Eventos from './Components/Pages/Eventos/Eventos.jsx';
import MisEventos from './Components/Pages/Eventos/MisEventos.jsx';
import Footer from './Components/Pages/General/Footer.jsx';
import Nosotros from './Components/Pages/QuienesSomos/Nosotros.jsx';
import Soporte from './Components/Pages/Soporte/Soporte.jsx';
import Signup from './Components/Pages/Login/Signup.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Perfil from './Components/Pages/Login/Perfil.jsx';
import OlvidasteContraseña from './Components/Pages/Login/OlvidasteContraseña.jsx';
import Categorias from './Components/Pages/Categorias/Categorias.jsx';
import PrivateRoute from './Components/Pages/Login/PrivateRoute.jsx';
import Fundaciones from './Components/Pages/Categorias/SeccionesCategorias/Fundaciones/Fundaciones.jsx';
import TemplatePerfil from './Components/Pages/Categorias/Perfiles/TemplatePerfil.jsx';
import TemplateEventos from './Components/Pages/Eventos/TemplateEventos.jsx';

function App() {
  return (
      <Router>
        <ScrollProvider>
          <ScrollToTop />
          <div>
            <Navbar />
            <Routes>
              {/* Secciones */}
              <Route path='/' element={<Inicio />} />
              <Route path='/eventos' element={<Eventos />} />

              <Route path='/soporte' element={<Soporte />} />
              <Route path='/nosotros' element={<Nosotros />} />

              {/* Login */}
              <Route path='/login' element={<Login />} />
              <Route path='/registrarse' element={<Signup />} />
              <Route path='/recuperar-contrasena' element={<OlvidasteContraseña />} />
              <Route path='/perfil/:id' element={
                <PrivateRoute>
                  <Perfil />
                </PrivateRoute>
              } />

              {/* Categorias */}
              <Route path='/categorias' element={<Categorias />} />
              <Route path='/todo' element={<Fundaciones />} />
              <Route path='/categorias/:categoria' element={<Fundaciones />} />
              <Route path={`/fundaciones/:id`} element={<TemplatePerfil />} />

              {/* Eventos */}
              <Route path='/eventos/:id' element={<TemplateEventos />} />
              <Route path='/mis-eventos' element={<MisEventos />} />
              
            </Routes>
            <Footer />
          </div>
        </ScrollProvider>
      </Router>
  );
}

export default App;
