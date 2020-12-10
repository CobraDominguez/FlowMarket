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
                    <span><a href="#">Flow Market</a></span>
                </div>
                <input type="checkbox" id="menu-bar" className="checkbox"></input>
                <label className="icon-menu" htmlFor="menu-bar">
                    <i className="fas fa-bars">
                    </i>
                </label>
                <ul className="enlaces">
                    <li><a href="#"> Tech</a></li>
                    <li><a href="#"> Ropa</a></li>
                    <li><a href="#"> Mobile</a></li>
                    <li><a href="#"> Deportes</a></li>
                    <li><a href="#"> Ingresar</a></li>
                    <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                </ul>
                <ul className="enlacesmobile">
                    <li><a href="#"> Tech</a></li>
                    <li><a href="#"> Ropa</a></li>
                    <li><a href="#"> Mobile</a></li>
                    <li><a href="#"> Deportes</a></li>
                    <li><a href="#"> Ingresar</a></li>
                    <li><a href="#"><i className="fas fa-shopping-cart"></i>Carrito</a></li>
                </ul>
            </nav>
        </header>
      );
}

export default Navbar;