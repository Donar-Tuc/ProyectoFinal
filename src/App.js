import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Imports eventos, soporte, inicio y login
import Navbar from './Components/Pages/General/Header.jsx';
import Inicio from './Components/Pages/Home/Home.jsx';
import Eventos from './Components/Pages/Eventos/Eventos.jsx';
import Footer from './Components/Pages/General/Footer.jsx';
import Soporte from './Components/Pages/Soporte/Soporte.jsx';
import Login from './Components/Pages/Login/Login.jsx'; // Importa el componente de Login

// Categocio Container
import Categorias from './Components/Pages/Categorias/Categorias.jsx';

// Categorias secciones
import Asistencia from './Components/Pages/Categorias/SeccionesCategorias/Asistencia/Asistencia.jsx';
import Comida from './Components/Pages/Categorias/SeccionesCategorias/Comida/Comida.jsx';
import Dinero from './Components/Pages/Categorias/SeccionesCategorias/Dinero/Dinero.jsx';
import Escolar from './Components/Pages/Categorias/SeccionesCategorias/Escolar/Escolar.jsx';
import Hogar from './Components/Pages/Categorias/SeccionesCategorias/Hogar/Hogar.jsx';
import Ropa from './Components/Pages/Categorias/SeccionesCategorias/Ropa/Ropa.jsx';

//perfiles

import BancoAlimentos from './Components/Pages/Categorias/Perfiles/BancoAlimentosPerfil/BancoAlimentosPerfil.jsx';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/eventos' element={<Eventos/>}></Route>
          <Route path='/soporte' element={<Soporte/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path= '/categorias' element={<Categorias/>}></Route>
          <Route path= '/asistencia' element={<Asistencia/>}></Route>
          <Route path= '/comida' element={<Comida/>}></Route>
          <Route path= '/dinero' element={<Dinero/>}></Route>
          <Route path= '/escolar' element={<Escolar/>}></Route>
          <Route path= '/hogar' element={<Hogar/>}></Route>
          <Route path= '/ropa' element={<Ropa/>}></Route>
          <Route path= '/banco-alimentos' element={<BancoAlimentos/>}></Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

