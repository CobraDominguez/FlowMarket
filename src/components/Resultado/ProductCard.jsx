import './ProductCard.css';
import ProductItemCount from './ProductItemCount/ProductItemCount';

function ProductCard(props) {

  function onAdd(cantidad) {
    alert ('se agrego ' + cantidad + ' al carrito');
  } 
    return (
          <div className="card">
            <img src={props.url} className="card-img-top" alt={props.descImg} />
            <div className="card-body">
              <h5 className="card-title">{props.titulo}</h5>
              <p className="card-text">{props.desc}</p>
              <h6>Stock {props.stock}</h6>
              
              <ProductItemCount Agregar={onAdd} stock={props.stock}/>
            </div>
          </div>
      );
}

export default ProductCard;