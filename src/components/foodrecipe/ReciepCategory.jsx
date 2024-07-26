import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Discard from './Discard';

function RecipeCategory({ categories, dishes }) {
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Extract unique categories
    const uniqueCategories = Array.from(new Set(categories.map(dish => dish.strCategory)))
        .map(category => {
            return categories.find(dish => dish.strCategory === category);
        });

    const handleCategories = (name) => {
        const filtered = dishes.filter(dish => dish.strCategory === name);
        setFilteredCategories(filtered);
        setSelectedCategory(name);
    };

    return (
        <>
            <div>
                <section className="py-5 category-section">
                    <div className="container">
                        <h2 className="text-center mb-4 section-title">Recipe Categories</h2>
                        <div className="row">
                            {uniqueCategories.map((dish, index) => (
                                <div className="col-md-3 mb-3" key={index}>
                                    <div 
                                        className={`card category-item ${selectedCategory === dish.strCategory ? 'active' : ''}`} 
                                        onClick={() => handleCategories(dish.strCategory)}
                                    >
                                        <div className="card-body text-center">
                                            <FontAwesomeIcon className='category-icon' icon={faUtensils} />
                                            <h5 className="card-title">{dish.strCategory}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            {selectedCategory && (
                <section className="py-5 special-dishes-section">
                    <div className="container">
                        <h2 className="text-center mb-4 section-title">Filtered Dishes</h2>
                        <div className="row">
                            {filteredCategories.length > 0 ? (
                                filteredCategories.map((dish, index) => (
                                    <Discard
                                        key={index}
                                        title={dish.strMeal}
                                        description={dish.strInstructions}
                                        imgSrc={dish.strMealThumb}
                                    />
                                ))
                            ) : (
                                <p className="text-center text-white">No dishes available for the selected category.</p>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default RecipeCategory;
