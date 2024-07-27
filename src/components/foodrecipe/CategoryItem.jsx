import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function CategoryItem({ category, isSelected, onClick }) {
    return (
        <div className={`card category-item ${isSelected ? 'active' : ''}`} onClick={onClick}>
            <div className="card-body text-center">
                <FontAwesomeIcon className='category-icon' icon={faUtensils} />
                <h5 className="card-title">{category.strCategory}</h5>
            </div>
        </div>
    );
}

export default CategoryItem;
