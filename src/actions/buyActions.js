import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  FETCH_TAXES,
  FETCH_SHIPPING_REGIONS,
  FETCH_SHIPPING_REGION_DETAIL
} from '../types';

import {
  getTaxes,
  getShippingRegions,
  getShippingRegionDetail } from '../apis/turing';

export const addToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  };
}

export const removeFromCard = (product_id) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product_id
  };
}

export const cleanCard = () => {
  return {
    type: REMOVE_ALL_PRODUCTS_FROM_CART
  };
}

export const fetchTaxes = () => async dispatch => {
  const response = await getTaxes();

  dispatch({
    type: FETCH_TAXES,
    payload: response.data
  });
};

export const fetchShippingRegions = () => async dispatch => {
  const response = await getShippingRegions();

  dispatch({
    type: FETCH_SHIPPING_REGIONS,
    payload: response.data
  });
};

export const fetchShippingRegionDetail = shipping_id => async dispatch => {
  const response = await getShippingRegionDetail(shipping_id);

  dispatch({
    type: FETCH_SHIPPING_REGION_DETAIL,
    payload: response.data
  });
};