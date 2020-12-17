import {useState, useEffect}  from 'react';
import ProductCard from './ProductCard';
import Loader from '../global/Loader/Loader';
import './ProductListContainer.css';

function ProductListContainer(params) {
      const [listItems, setListItems] = useState([]);
  
      const ListaProductos = [
      {
        id: 1,
        titulo: "Producto 1",
        precio: "300",
        url: "https://placehold.it/75x75",
        desc: "esto es una breve descripcion de 1",
        descImg: "descripcion producto 1",
        stock: "3"
      },
      {
        id: 2,
        titulo: "Producto 2",
        precio: "500",
        url: "https://placehold.it/75x75",
        desc: "esto es una breve descripcion de 2",
        descImg: "descripcion producto 2",
        stock: "5"
      },
      {
        id: 3,
        titulo: "Producto 3",
        precio: "800",
        url: "https://placehold.it/75x75",
        desc: "esto es una breve descripcion de 3",
        descImg: "descripcion producto 3",
        stock: "10"
      },
      {
        id: 4,
        titulo: "Producto 4",
        precio: "725",
        url: "https://placehold.it/75x75",
        desc: "esto es una breve descripcion de 4",
        descImg: "descripcion producto 4",
        stock: "8"
      },
      {
        id: 5,
        titulo: "Producto 5",
        precio: "350",
        url: "https://placehold.it/75x75",
        desc: "esto es una breve descripcion de 5",
        descImg: "descripcion producto 5",
        stock: "15"
      },
      {
        id: 6,
        titulo: "Producto 6",
        precio: "300",
        url: "https://placehold.it/75x75",
        desc: "esto es una breve descripcion de 6",
        descImg: "descripcion producto 6",
        stock: "6"
      }
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(ListaProductos);
        }, 2000);
    })

    useEffect(() => {
      getProducts.then(resultado => setListItems(resultado));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <div className="container d-flex align-content-lg-center flex-wrap">
            {
              listItems.length ?
                <>
                  {
                    listItems.map(item => (
                      <ProductCard 
                          key={item.id}
                          titulo={item.titulo} 
                          precio={item.precio} 
                          url={item.url}
                          desc={item.desc} 
                          descImg={item.descImg}
                          stock={item.stock} 
                      /> 
                    ))
                  }
                </> :
                <Loader />
            }
            
        </div>
      );
}

export default ProductListContainer;