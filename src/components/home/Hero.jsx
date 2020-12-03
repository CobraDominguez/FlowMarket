function Hero(params) {
    const saludar = () => {
        alert ('Funcion en componente')
    }
    
    return (
        <div>
          <h1 className="titulo-principal">¡Bienvenidos!</h1>
          <h3 className="subtitulo">e-Comerce Flow Markets</h3>
          <button onClick={saludar}>Saludar</button>
        </div>
      );
}

export default Hero;