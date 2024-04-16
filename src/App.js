import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Pages/General/Header.jsx';
import Inicio from './Components/Pages/Home/Home.jsx';
import Eventos from './Components/Pages/Eventos/Eventos.jsx';
import Footer from './Components/Pages/General/Footer.jsx';
import Soporte from './Components/Pages/Soporte/Soporte.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/eventos' element={<Eventos/>}></Route>
          <Route path='/soporte' element={<Soporte/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

