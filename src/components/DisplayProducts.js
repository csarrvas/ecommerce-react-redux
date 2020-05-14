import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProductsBySearch, fetchProductsByCategory, selectProduct } from '../actions';
import { printMessage } from '../helpers/ui';
import './css/cardsStyle.css';
import './css/displayProducts.css';

const DisplayProducts = ({ searching, wantedProductsId, categorySelected, countProducts, products, fetchProductsBySearch, fetchProductsByCategory, selectProduct }) => {
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
        className="page"
        onClick={changePage}
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

const mapStateToProps = state => {
  return {
    searching: state.search.searching,
    wantedProductsId: state.search.wantedProductsId,
    categorySelected: state.categorySelected,
    countProducts: state.products.countProducts,
    products: state.products.products
  };
}

export default connect(mapStateToProps, { fetchProductsBySearch, fetchProductsByCategory, selectProduct })(DisplayProducts);