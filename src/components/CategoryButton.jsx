import React from 'react'

function CategoryButton(props) {
    return ( 
        <button className="category__button">
            <div className="category-button__header">
                {props.header}
            </div>
            <div className="category-button__inner">
                {props.inner}
            </div>
        </button>
     );
}

export default CategoryButton;