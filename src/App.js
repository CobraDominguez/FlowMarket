import './App.css';
import Hero from '../src/components/home/Hero';
import NavBar from './components/NavBar/NavBar';
import Carrusel from './components/Carrusel/Carrusel';

function App() {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Carrusel></Carrusel>
    </div>
  );
}

export default App;
