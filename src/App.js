import './App.css';
import Hero from '../src/components/home/Hero';
import NavBar from './components/NavBar/NavBar';
import Carrusel from './components/Carrusel/Carrusel';
import ProductListContainer from './components/Resultado/ProductListContainer';

function App() {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Carrusel></Carrusel>
      <ProductListContainer />
    </div>
  );
}

export default App;
