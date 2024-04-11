import './App.css';
import Navbar from './Components/Header';
import Introduction from './Components/Introduction';
import Carrousel from './Components/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import BloqueAyudar from './Components/ManerasAyudar';
import TomaAccion from './Components/TomaAccion';
import Comunidad from './Components/Comunidad'
import Estadisticas from './Components/Estadisticas';
import Faq from './Components/PreguntasFrecuentes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <BloqueAyudar />
      <TomaAccion />
      <Comunidad />
      <Estadisticas />
      <Faq />
      <Footer />
  
    </div>
  );
}

export default App;
