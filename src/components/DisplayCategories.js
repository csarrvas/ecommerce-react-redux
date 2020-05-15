import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import './css/cardsStyle.css';

const DisplayCategories = ({ categories, loading, fetchCategories, match }) => {
  useEffect(() => {
    fetchCategories(parseInt(match.params.departmentId));
  }, [fetchCategories, match.params.departmentId]);

  return (
    <Fragment>
      {loading ? <Spinner/> : categories.map(category =>
        <div
          className="category"
          key={`category-${category.category_id}`}
        >
          <p className="name">{category.name}</p>
          <p className="description">{category.description}</p>
          <Link to={`/products/inCategory/${category.category_id}/page/1`}>
            <button>Visit this category</button>
          </Link>
        </div>
      )}
    </Fragment>
  );
}

export default DisplayCategories;