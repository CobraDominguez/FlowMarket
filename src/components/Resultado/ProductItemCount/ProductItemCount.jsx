import {useState} from 'react';

function ItemCount({Agregar, stock}) {

    const [cant, setCant] = useState(0);

    const restarCantidad = () => {
        if(cant > 0) {
          setCant(cant - 1);
        }
    }

    
    return (
        <div>
            <div className="ContadorProduct d-flex justify-content-between">
                <button className="btn btn-danger btn-sm" disabled={!cant ? 'disabled' : null } onClick={restarCantidad} >-</button>
                <div className="contador">{cant}</div>
                <button className="btn btn-success btn-sm" disabled={cant == stock ? 'disabled' : null } onClick={() => setCant(cant + 1)} >+</button>
            </div>
            <button  className="btn btn-link" onClick={() => Agregar(cant)}>Agregar a carrito</button >
        </div>
      );
}

export default ItemCount;