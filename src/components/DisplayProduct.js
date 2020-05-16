import React, { useEffect, Fragment } from 'react';
import Spinner from './Spinner';
import swal from 'sweetalert';
import './css/cardsStyle.css';
import './css/displayProduct.css';

const DisplayProduct = ({ product, reviews, loading, match, selectProduct, addToCart }) => {

  useEffect(() => {
    selectProduct(parseInt(match.params.productId));
  }, [selectProduct, match.params.productId]);

  const addProduct = (product) => {
    swal('','The product was successfully added!','success');
    addToCart(product);
  }

  const renderProduct = (product, loading) => {
    if (loading) {
      return <Spinner/>;
    }else if (product.product_id) {
      return (
        <div id="product">
          <figure>
            <img
              alt={`${product.name} 1`}
              src={`https://backendapi.turing.com/images/products/${product.thumbnail.replace('-thumbnail.gif', '.gif')}`}
            />
          </figure>
          <figure>
            <img
              alt={`${product.name} 2`}
              src={`https://backendapi.turing.com/images/products/${product.thumbnail.replace('-thumbnail.gif', '-2.gif')}`}
            />
          </figure>
          <p className="name">{product.name}</p>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <p className="discounted_price">${product.discounted_price}</p>
          <button data-id={product.product_id} onClick={() => addProduct(product)}>Add to cart!</button>
          <p>--- Reviews ---</p>
          <div id="reviews">
            {reviews.map((review, index) => 
              <div key={`review-${index}`} className="review">
                <p className="user">User: {review.name}</p>
                <p className="comment">-&quot;{review.review}&quot;</p>
                <p className="rating"><i className="fas fa-star"></i> x{review.rating}</p>
                <p className="time">{review.created_on.substring(11,19)}</p>
                <p className="date">{review.created_on.substring(0,10)}</p>
              </div>
            )}
          </div>
        </div>
      );
    } 
    return null;
  }
  
  return (
    <Fragment>
      { renderProduct(product, loading) }
    </Fragment>
  );
}

export default DisplayProduct;