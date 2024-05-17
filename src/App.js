import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js'; // Importa el componente ScrollToTop
import React from 'react';



//Imports eventos, soporte, inicio y login
import Navbar from './Components/Pages/General/Header.jsx';
import Inicio from './Components/Pages/Home/Home.jsx';
import Eventos from './Components/Pages/Eventos/Eventos.jsx';
import Footer from './Components/Pages/General/Footer.jsx';
import Soporte from './Components/Pages/Soporte/Soporte.jsx';
import Signup from './Components/Pages/Login/Signup.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import OlvidasteContraseña from './Components/Pages/Login/OlvidasteContraseña.jsx'

// Categocio Container
import Categorias from './Components/Pages/Categorias/Categorias.jsx';

// Categorias secciones
import Asistencia from './Components/Pages/Categorias/SeccionesCategorias/Asistencia/Asistencia.jsx';
import Comida from './Components/Pages/Categorias/SeccionesCategorias/Comida/Comida.jsx';
import Dinero from './Components/Pages/Categorias/SeccionesCategorias/Dinero/Dinero.jsx';
import Escolar from './Components/Pages/Categorias/SeccionesCategorias/Escolar/Escolar.jsx';
import Hogar from './Components/Pages/Categorias/SeccionesCategorias/Hogar/Hogar.jsx';
import Ropa from './Components/Pages/Categorias/SeccionesCategorias/Ropa/Ropa.jsx';
import Nosotros from './Components/Pages/QuienesSomos/Nosotros.jsx';
import VerTodo from './Components/Pages/Categorias/SeccionesCategorias/VerTodo/VerTodo.jsx';


//perfiles

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

import HospitalMaternidadPerfil from './Components/Pages/Categorias/Perfiles/HospitalMaternidad.jsx'




function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/eventos' element={<Eventos />}></Route>
          <Route path='/soporte' element={<Soporte />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/categorias' element={<Categorias />}></Route>
          <Route path='/asistencia' element={<Asistencia />}></Route>
          <Route path='/comida' element={<Comida />}></Route>
          <Route path='/dinero' element={<Dinero />}></Route>
          <Route path='/escolar' element={<Escolar />}></Route>
          <Route path='/hogar' element={<Hogar />}></Route>
          <Route path='/ropa' element={<Ropa />}></Route>
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/todo' element={<VerTodo />}></Route>


          <Route path='/registrarse' element={<Signup />}></Route>
          <Route path='/recuperar-contrasena' element={<OlvidasteContraseña />}></Route>


          <Route path='/banco-alimentos' element={<BancoAlimentosPerfil />}></Route>
          <Route path='/leon' element={<LeonPerfil />}></Route>
          <Route path='/fann' element={<FannPerfil />}></Route>
          <Route path='/conin' element={<ConinPerfil />}></Route>
          <Route path='/banco-de-sangre' element={<BancoSangre />}></Route>
          <Route path='/caritas' element={<CaritasPerfil />}></Route>
          <Route path='/casa-cuna' element={<CasaCuna />}></Route>
          <Route path='/Centro-las-moritas' element={<CentroLasMoritas />}></Route>
          <Route path='/cocina-comunitaria-maria-guadalupe' element={<CocinaMariaGuadalupe />}></Route>
          <Route path='/cocina-nueva-amanecer' element={<CocinaComNuevAmanecer />}></Route>
          <Route path='/cocina-comunitaria-unidos' element={<CocinaUnidosTriunfar />}></Route>
          <Route path='/comedor-manos-olla' element={<ComedorManosOlla />}></Route>
          <Route path='/comedor-reyes' element={<ComedorReyes />}></Route>
          <Route path='/confluir' element={<Confluir />}></Route>
          <Route path='/fundacion-manos-solidarias' element={<FundacionManosSolidarias />}></Route>
          <Route path='/nodo-ambiental' element={<NodoAmbiental />}></Route>
          <Route path='/onat' element={<OnatPerfil />}></Route>
          <Route path='/secretaria-ninez' element={<SubsecretariaNinez />}></Route>
          <Route path='/techo' element={<TechoPerfil />}></Route>
          <Route path='/fundacion-vallecito-de-la-guadalupe' element={<VallecitoGuada />}></Route>
          <Route path='/instituto-las-mercedes' element={<HospitalMaternidadPerfil />}></Route>


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

