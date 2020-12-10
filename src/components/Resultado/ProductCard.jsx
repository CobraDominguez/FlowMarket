import './ProductCard.css';

function ProductCard(props) {

    return (
          <div className="card">
            <img src={props.url} className="card-img-top" alt={props.descImg} />
            <div className="card-body">
              <h5 className="card-title">{props.titulo}</h5>
              <p className="card-text">{props.desc}</p>
              <a href="#" className="btn btn-primary">Agregar a carrito</a>
            </div>
          </div>
      );
}

export default ProductCard;