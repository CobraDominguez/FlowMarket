import './NavBar.css';
import logo from '../../assets/logo.png';

function Navbar(params) {
    
    return (
        <header key="header">
            <nav className="menu">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt='Logo de la empresa' />
                    </a>
                    <span>Flow Market</span>
                </div>
                <input type="checkbox" id="menu-bar" className="checkbox"></input>
                <label className="icon-menu" htmlFor="menu-bar">
                    <i className="fas fa-bars">
                    </i>
                </label>
                <ul className="enlaces">
                    <li><a href="#"> Inicio</a></li>
                    <li><a href="#"> Productos</a></li>
                    <li><a href="#"> Ofertas</a></li>
                    <li><a href="#"> Contacto</a></li>
                    <li><a href="#"> Ingresar</a></li>
                </ul>
                <ul className="enlacesmobile">
                    <li><a href="#"> Inicio</a></li>
                    <li><a href="#"> Productos</a></li>
                    <li><a href="#"> Ofertas</a></li>
                    <li><a href="#"> Contacto</a></li>
                    <li><a href="#"> Ingresar</a></li>
                </ul>
            </nav>
        </header>
      );
}

export default Navbar;