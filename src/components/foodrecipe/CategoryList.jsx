import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryList({ categories, selectedCategory, onCategorySelect }) {
    return (
        <div className="row">
            {categories.map((category, index) => (
                <div className="col-md-3 mb-3" key={index}>
                    <CategoryItem
                        category={category}
                        isSelected={selectedCategory === category.strCategory}
                        onClick={() => onCategorySelect(category.strCategory)}
                    />
                </div>
            ))}
        </div>
    );
}

export default CategoryList;
