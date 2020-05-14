import React from 'react';
import { connect } from 'react-redux';
import DisplayProduct from './DisplayProduct';
import DisplayProducts from './DisplayProducts';
import DisplayCategories from './DisplayCategories';
import DisplayDepartments from './DisplayDepartments';

const Main = ({ departmentSelected, categorySelected, productSelected, searching, categories }) => {

  const error = document.querySelector('#error');
  if (error) error.remove();

  const displayContent = () => {
    if (productSelected !== 0) {
      return <DisplayProduct/>
    } else if (categorySelected !== 0 || searching) {
      return <DisplayProducts/>
    } else if (departmentSelected !== -1 && categories.length !== 0) {
      return <DisplayCategories/>
    } else {
      return <DisplayDepartments/>
    }
  }

  return (
    <main>
      {displayContent()}
    </main>
  );
}

const mapStateToProps = state => {
  return {
    departmentSelected: state.departmentSelected,
    categorySelected: state.categorySelected,
    productSelected: state.productSelected,
    searching: state.search.searching,
    categories: state.categories
  };
}

export default connect(mapStateToProps)(Main);