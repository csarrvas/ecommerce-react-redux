import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProductsByCategory } from '../actions';
import './css/displayCategories.css';

const DisplayCategories = ({ categories, fetchProductsByCategory }) => {
  const selectCategory = (e) => {
    fetchProductsByCategory(parseInt(e.target.getAttribute('data-id')), 1);
  }

  return (
    <Fragment>
      {categories.map(category =>
        <div
          className="category"
          key={`category-${category.category_id}`}
        >
          <p className="name">{category.name}</p>
          <p className="description">{category.description}</p>
          <button
            data-id={category.category_id}
            onClick={selectCategory}
          >Visit this category</button>
        </div>
      )}
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps, { fetchProductsByCategory })(DisplayCategories);