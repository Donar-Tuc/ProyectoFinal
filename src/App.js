import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js'; // Importa el componente ScrollToTop
import { ScrollProvider } from './ScrollContext.js';
import React, { useState } from 'react';

import Navbar from './Components/Pages/General/Header.jsx';
import Inicio from './Components/Pages/Home/Home.jsx';
import Eventos from './Components/Pages/Eventos/Eventos.jsx';
import Footer from './Components/Pages/General/Footer.jsx';
import Soporte from './Components/Pages/Soporte/Soporte.jsx';
import Signup from './Components/Pages/Login/Signup.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Perfil from './Components/Pages/Login/Perfil.jsx';
import OlvidasteContraseña from './Components/Pages/Login/OlvidasteContraseña.jsx';
import Categorias from './Components/Pages/Categorias/Categorias.jsx';
import Asistencia from './Components/Pages/Categorias/SeccionesCategorias/Asistencia/Asistencia.jsx';
import Comida from './Components/Pages/Categorias/SeccionesCategorias/Comida/Comida.jsx';
import Dinero from './Components/Pages/Categorias/SeccionesCategorias/Dinero/Dinero.jsx';
import Escolar from './Components/Pages/Categorias/SeccionesCategorias/Escolar/Escolar.jsx';
import Hogar from './Components/Pages/Categorias/SeccionesCategorias/Hogar/Hogar.jsx';
import Ropa from './Components/Pages/Categorias/SeccionesCategorias/Ropa/Ropa.jsx';
import Medicamentos from './Components/Pages/Categorias/SeccionesCategorias/Medicamentos/medicamentos.jsx';
import Juguetes from './Components/Pages/Categorias/SeccionesCategorias/Juguetes/Juguetes.jsx';
import Nosotros from './Components/Pages/QuienesSomos/Nosotros.jsx';
import VerTodo from './Components/Pages/Categorias/SeccionesCategorias/VerTodo/VerTodo.jsx';
import BancoAlimentosPerfil from './Components/Pages/Categorias/Perfiles/BancoAlimentosPerfil.jsx';
import LeonPerfil from './Components/Pages/Categorias/Perfiles/FundacionLeon.jsx';
import FannPerfil from './Components/Pages/Categorias/Perfiles/Fann.jsx';
import ConinPerfil from './Components/Pages/Categorias/Perfiles/Conin.jsx';
import BancoSangre from './Components/Pages/Categorias/Perfiles/bancoSangre.jsx';
import CaritasPerfil from './Components/Pages/Categorias/Perfiles/caritasPerfil.jsx';
import CasaCuna from './Components/Pages/Categorias/Perfiles/CasaCuna.jsx';
import CentroLasMoritas from './Components/Pages/Categorias/Perfiles/centroMoritas.jsx';
import CocinaMariaGuadalupe from './Components/Pages/Categorias/Perfiles/CocinaComMariaGuadalupe.jsx';
import CocinaComNuevAmanecer from './Components/Pages/Categorias/Perfiles/cocinaComNuevaAmanecer.jsx';
import CocinaUnidosTriunfar from './Components/Pages/Categorias/Perfiles/CocinaComUnidosTriunfar.jsx';
import ComedorManosOlla from './Components/Pages/Categorias/Perfiles/cocinaManosOlla.jsx';
import ComedorReyes from './Components/Pages/Categorias/Perfiles/ComedorReyes.jsx';
import Confluir from './Components/Pages/Categorias/Perfiles/confluir.jsx';
import FundacionManosSolidarias from './Components/Pages/Categorias/Perfiles/fundacionManosSolidarias.jsx';
import NodoAmbiental from './Components/Pages/Categorias/Perfiles/NodoAmbiental.jsx';
import OnatPerfil from './Components/Pages/Categorias/Perfiles/ONAT.jsx';
import SubsecretariaNinez from './Components/Pages/Categorias/Perfiles/subsecretariaNinez.jsx';
import TechoPerfil from './Components/Pages/Categorias/Perfiles/Techo.jsx';
import VallecitoGuada from './Components/Pages/Categorias/Perfiles/vallecitoGuada.jsx';
import HospitalMaternidadPerfil from './Components/Pages/Categorias/Perfiles/HospitalMaternidad.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <ScrollProvider>
        <ScrollToTop />
        <div>
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/eventos' element={<Eventos isLoggedIn={isLoggedIn} />} />
            <Route path='/soporte' element={<Soporte />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/login' element={<Login onLogin={handleLogin} />} />
            <Route path='/registrarse' element={<Signup />} />
            <Route path='/recuperar-contrasena' element={<OlvidasteContraseña />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/categorias' element={<Categorias />} />
            <Route path='/asistencia' element={<Asistencia />} />
            <Route path='/comida' element={<Comida />} />
            <Route path='/dinero' element={<Dinero />} />
            <Route path='/escolar' element={<Escolar />} />
            <Route path='/hogar' element={<Hogar />} />
            <Route path='/ropa' element={<Ropa />} />
            <Route path='/medicamentos-y-higiene' element={<Medicamentos />} />
            <Route path='/juguetes' element={<Juguetes />} />
            <Route path='/todo' element={<VerTodo />} />
            <Route path='/banco-alimentos' element={<BancoAlimentosPerfil />} />
            <Route path='/leon' element={<LeonPerfil />} />
            <Route path='/fann' element={<FannPerfil />} />
            <Route path='/conin' element={<ConinPerfil />} />
            <Route path='/banco-de-sangre' element={<BancoSangre />} />
            <Route path='/caritas' element={<CaritasPerfil />} />
            <Route path='/casa-cuna' element={<CasaCuna />} />
            <Route path='/Centro-las-moritas' element={<CentroLasMoritas />} />
            <Route path='/cocina-comunitaria-maria-guadalupe' element={<CocinaMariaGuadalupe />} />
            <Route path='/cocina-nueva-amanecer' element={<CocinaComNuevAmanecer />} />
            <Route path='/cocina-comunitaria-unidos' element={<CocinaUnidosTriunfar />} />
            <Route path='/comedor-manos-olla' element={<ComedorManosOlla />} />
            <Route path='/comedor-reyes' element={<ComedorReyes />} />
            <Route path='/confluir' element={<Confluir />} />
            <Route path='/fundacion-manos-solidarias' element={<FundacionManosSolidarias />} />
            <Route path='/nodo-ambiental' element={<NodoAmbiental />} />
            <Route path='/onat' element={<OnatPerfil />} />
            <Route path='/secretaria-ninez' element={<SubsecretariaNinez />} />
            <Route path='/techo' element={<TechoPerfil />} />
            <Route path='/fundacion-vallecito-de-la-guadalupe' element={<VallecitoGuada />} />
            <Route path='/instituto-las-mercedes' element={<HospitalMaternidadPerfil />} />
          </Routes>
          <Footer />
        </div>
      </ScrollProvider>
    </Router>
  );
}

export default App;
