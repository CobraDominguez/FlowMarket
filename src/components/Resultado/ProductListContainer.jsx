import ProductCard from './ProductCard';
import './ProductListContainer.css';

function ProductListContainer(params) {

    return (
        <div className="container d-flex align-content-lg-center flex-wrap">
           <ProductCard titulo="Producto 1" precio="300" url="https://placehold.it/75x75" desc="Producto 1, esto es una breve descripcion de 1" descImg="descripcion producto 1" stock="3" />
           <ProductCard titulo="Producto 2" precio="500" url="https://placehold.it/75x75" desc="Producto 2, esto es una breve descripcion de 2" descImg="Descripcion producto 2" stock="10" />
           <ProductCard titulo="Producto 3" precio="800" url="https://placehold.it/75x75" desc="Producto 3, esto es una breve descripcion de 3" descImg="Descripcion producto 3" stock="5" />
           <ProductCard titulo="Producto 4" precio="300" url="https://placehold.it/75x75" desc="Producto 4, esto es una breve descripcion de 4" descImg="Descripcion producto 4" stock="3" />
           <ProductCard titulo="Producto 5" precio="265" url="https://placehold.it/75x75" desc="Producto 5, esto es una breve descripcion de 5" descImg="Descripcion producto 5" stock="15" />
           <ProductCard titulo="Producto 6" precio="984" url="https://placehold.it/75x75" desc="Producto 6, esto es una breve descripcion de 6" descImg="Descripcion producto 6" stock="8" />
        </div>
      );
}

export default ProductListContainer;