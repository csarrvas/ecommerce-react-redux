import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import './css/cardsStyle.css';
import './css/displayProducts.css';

const DisplayProducts = (props) => {
  const {
    match,
    countProducts,
    products,
    allProductsName,
    loading,
    fetchProductsByCategory,
    fetchProductsBySearch } = props;

  useEffect(() => {
    match.params.categoryId
      ? fetchProductsByCategory(parseInt(match.params.categoryId), parseInt(match.params.pageNumber))
      : fetchProductsBySearch(match.params.searchedWord, allProductsName, parseInt(match.params.pageNumber));
  },
    [
      fetchProductsByCategory,
      fetchProductsBySearch,
      match.params.categoryId,
      match.params.pageNumber,
      match.params.searchedWord,
      allProductsName]
  );

  const numberOfPages = countProducts !== 0 ? Math.ceil(countProducts / 10) : 0;

  const displayPagination = (numberOfPages) => {
    const pages = [];
    for (let index = 0; index < numberOfPages; index++) {
      pages.push(index + 1);
    }
    
    return pages.map(page =>
      <Link
        key={`page-${page}`}
        to={page !== parseInt(match.params.pageNumber)
          ? match.params.categoryId
            ? `/products/inCategory/${match.params.categoryId}/page/${page}`
            : `/products/search/${match.params.searchedWord}/page/${page}`
          : '#' }
        >
        <button
          className={`page${page === parseInt(match.params.pageNumber) ? ' selected' : ''}`}
        >{page}</button>
      </Link>
    );
  }
  
  return (
    <Fragment>
      {loading ? <Spinner/> : countProducts
        ? <Fragment>
            {products.map(product =>
              <div
                className="product"
                key={`product-${product.product_id}`}
              >
                <Link to={`/products/${product.product_id}`}>
                  <figure>
                    <img
                      alt={product.name}
                      src={`https://backendapi.turing.com/images/products/${product.thumbnail}`}
                    />
                  </figure>
                </Link>
                <p className="name">{product.name}</p>
                <p className="description">{product.description}</p>
                <p className="price">${product.price}</p>
                <p className="discounted_price">${product.discounted_price}</p>
                <Link to={`/products/${product.product_id}`}>
                  <button>Go to this product</button>
                </Link>
              </div>
            )}
            <div id="pagination">
              {displayPagination(numberOfPages)}
            </div>
          </Fragment>
        : <div id="error" className="error">
            <p>Products not found, try with another category or search</p>
          </div>
      }
    </Fragment>
  );
}

export default DisplayProducts;