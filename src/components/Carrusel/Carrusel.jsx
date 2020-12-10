import Oferta1 from '../../assets/oferta_1.png';
import Oferta2 from '../../assets/oferta_2.png';
import Oferta3 from '../../assets/oferta_3.png';

function Carrusel(params) {

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Oferta1} className="d-block w-65" alt="Primer Oferta boxeo"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Mes del Boxeo</h5>
                            <p>Consulta las ofertas que tenemos en equipamiento/ accesorios</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Oferta2}  className="d-block w-65" alt="Segunda Oferta Iphone 12 pro"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Iphone 12 PRO</h5>
                            <p>El mejor precio de la zona y entrega inmediata!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Oferta3}  className="d-block w-65" alt="tercer oferta playstation 5 pre order"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>PlayStaion 5</h5>
                            <p>Traemos a pedido. Solicita la tuya !!!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
      );
}

export default Carrusel;