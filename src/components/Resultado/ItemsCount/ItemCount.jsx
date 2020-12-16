import {useState} from 'react';

function ItemCount() {

    const [cant, setCant] = useState(0);

    const restarCantidad = () => {
        if(cant > 0) {
          setCant(cant - 1);
        }
    }

    const informaCantidad = () => {
        alert ('se agrego ' + cant + ' al carrito');
    }
    return (
        <div>
            <div className="ContadorProduct d-flex justify-content-between">
                <button className="btn btn-success btn-sm" onClick={() => setCant(cant + 1)} >+</button>
                <div className="contador">{cant}</div>
                <button className="btn btn-danger btn-sm" disabled={!cant ? 'disabled' : null } onClick={restarCantidad} >-</button>
            </div>
            <button  className="btn btn-link" onClick={informaCantidad}>Agregar a carrito</button >
        </div>
      );
}

export default ItemCount;