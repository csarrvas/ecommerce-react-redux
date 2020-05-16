import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './css/displayCart.css';

const DisplayCart = ({ cart, taxes, shippingRegions, shippingRegionDetail, fetchShippingRegionDetail, removeFromCard, cleanCard }) => {
  useEffect(() => {
    return () => fetchShippingRegionDetail(1);
  }, [fetchShippingRegionDetail]);

  const changeShippingRegion = (e) => {
    fetchShippingRegionDetail(parseInt(e.target.value));
  }

  const removeProduct = (e) => {
    removeFromCard(parseInt(e.target.value));
  }

  const removeAll = () => {
    cleanCard();
  }
  
  const displayProducts = (cart, taxes, shippingRegionDetail) => {
    if (cart.items.length > 0) {
      const totalTaxes = taxes.reduce((total, tax) => total + parseFloat(tax.tax_percentage), 0).toFixed(2);
      const totalWithout = cart.items.reduce((total, product) => total + parseFloat(product.discounted_price), 0).toFixed(2);
      const total = (totalWithout * (1 + (0.01 * totalTaxes))).toFixed(2);
      
      const orderNowDiv = React.createRef(); // HERE IS THE CREATE REF
      return (
        <Fragment>
          <div ref={orderNowDiv} id="orderNow"></div>{ /* HERE IS THE REF OF A DIV!!! */ }
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Discounted price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map(product => 
                <tr key={`product-${product.product_id}`}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>${product.discounted_price}</td>
                  <td><button value={product.product_id} onClick={removeProduct}>Remove</button></td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Total with the taxes</td>
                <td>
                  ${total}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          <div>
            <button onClick={removeAll}>Remove All</button>
            {shippingRegionDetail.length > 0
              // ? ReactDOM.createPortal(<button>Order Now!</button>, orderNowDiv.current) /* THE REF orderNowDiv COMES WITH A NULL VALUE??! */
              ? ReactDOM.createPortal(<button>Order Now!</button>, document.querySelector('#orderNow'))
              : null
            }
          </div>
        </Fragment>
      );
    } else {
      return (
        <div className="error">Your cart is empty</div>
      );
    }
  }

  return (
    <Fragment>
      <div id="taxes">
        <table>
          <caption>Taxes</caption>
          <thead>
            <tr>
              <th>Type</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {taxes.map(tax => 
              <tr key={`tax-${tax.tax_id}`}>
                <td>{tax.tax_type}</td>
                <td>{tax.tax_percentage}%</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div id="shipping-regions">
        <p>Shipping options</p>
        <select onChange={changeShippingRegion}>
          {shippingRegions.map(shippingRegion =>
            shippingRegion.shipping_region_id === 1
            ? <option
                disabled selected
                key={`shipping-${shippingRegion.shipping_region_id}`}
                value={shippingRegion.shipping_region_id}
              >{shippingRegion.shipping_region}</option>
            : <option
                key={`shipping-${shippingRegion.shipping_region_id}`}
                value={shippingRegion.shipping_region_id}
              >{shippingRegion.shipping_region}</option>
          )}
        </select>
        <div id="shipping-detail">
          {shippingRegionDetail.length > 0
            ? <p className="title">Shipping region detail</p>
            : null}
          {shippingRegionDetail.map(type =>
            <p key={`shipping-detail-${type.shipping_id}`}>{type.shipping_type} <span>${type.shipping_cost}</span></p>
          )}
        </div>
      </div>
      <div id="cart-detail">
        {displayProducts(cart, taxes, shippingRegionDetail)}
      </div>
    </Fragment>
  );
}
 
export default DisplayCart;