import React, { memo } from "react";
import PropTypes from 'prop-types';


const Categories = memo(
  function Categories( { types, onClickCategory, activeCategory }) {

      return (
          <div className="categories">
            
                <ul>
                  <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)} > All</li>
                    {types && types.map((type, index) => (
                    <li 
                    className={activeCategory === index ? 'active' : ''} 
                    onClick={() => onClickCategory(index)} 
                    key={`${type}_${index}`}>
                      {type}
                    </li>))}
              
                </ul>
          </div>
      )
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};
Categories.defaultProps = {
  activeCategory: null,
  items: []

};



export default Categories;