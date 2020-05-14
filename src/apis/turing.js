import axios from 'axios';

const turing = axios.create({ baseURL: 'https://backendapi.turing.com' });

export const getDepartments = () => {
  return turing.get('/departments');
}

export const getCategories = (departmentId) => {
  const url = departmentId === 0
    ? '/categories'
    : `/categories/inDepartment/${departmentId}`;
  return turing.get(url);
}

export const getProductsByCategory = (categoryId, page) => {
  const url = categoryId === 0
    ? `/products?page=${page}&limit=10`
    : `/products/inCategory/${categoryId}?page=${page}&limit=10`;
  return turing.get(url);
}

export const getAllProducts = (wantedProductsId, page) => {
  return turing.get('/products?page=1&limit=200');
}

export const getProductReviews = (productId) => {
  return turing.get(`/products/${productId}/reviews`);
}