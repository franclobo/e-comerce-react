import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products';
import Products from './Products';



function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  if (products.length === 0) {
    dispatch(fetchProducts());
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Products
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price.current_price}
              reviews={product.reviews.rating}
              img={product.thumbnail}
              url={product.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product;
