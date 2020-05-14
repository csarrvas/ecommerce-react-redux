import React, { Fragment } from 'react';
import { printMessage } from '../helpers/ui';
import './css/cardsStyle.css';
import './css/displayProducts.css';

const DisplayProducts = (props) => {
  const {
    products: productsState,
    categorySelected,
    search,
    fetchProductsByCategory,
    fetchProductsBySearch,
    selectProduct
  } = props
  const { products, countProducts, actualPage } = productsState;
  const { searching, wantedProductsId } = search

  const numberOfPages = countProducts !== 0 ? Math.ceil(countProducts / 10) : 0;

  const displayPagination = (numberOfPages) => {
    const pages = [];
    for (let index = 0; index < numberOfPages; index++) {
      pages.push(index + 1);
    }
    return pages.map(page =>
      <button
        key={`page-${page}`}
        data-id={page}
        className={`page ${page === actualPage ? 'selected' : ''}`}
        onClick={ page !== actualPage ? changePage : null}
      >
        {page}
      </button>
    );
  }

  const changePage = (e) => {
    searching
      ? fetchProductsBySearch(wantedProductsId, parseInt(e.target.getAttribute('data-id')))
      : fetchProductsByCategory(categorySelected, parseInt(e.target.getAttribute('data-id')));
  }

  const goToProduct = (e) => selectProduct(parseInt(e.target.getAttribute('data-id')));

  return (
    <Fragment>
      {countProducts
        ? <Fragment>
            {products.map(product =>
              <div
                className="product"
                key={`product-${product.product_id}`}
              >
                <figure>
                  <img
                    alt={product.name}
                    src={`https://backendapi.turing.com/images/products/${product.thumbnail}`}
                    data-id={product.product_id}
                    onClick={goToProduct}
                  />
                </figure>
                <p className="name">{product.name}</p>
                <p className="description">{product.description}</p>
                <p className="price">${product.price}</p>
                <p className="discounted_price">${product.discounted_price}</p>
                <button
                  data-id={product.product_id}
                  onClick={goToProduct}
                >Go to this product</button>
              </div>
            )}
            <div id="pagination">
              {displayPagination(numberOfPages)}
            </div>
          </Fragment>
        : printMessage('Products not found, try with another category or search', 'error')
      }
    </Fragment>
  );
}

export default DisplayProducts;