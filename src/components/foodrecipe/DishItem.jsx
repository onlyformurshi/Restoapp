import React from 'react';
import Discard from './Discard';

function DishItem({ dish }) {
    return (
        <Discard
            title={dish.strMeal}
            description={dish.strInstructions}
            imgSrc={dish.strMealThumb}
        />
    );
}

export default DishItem;
