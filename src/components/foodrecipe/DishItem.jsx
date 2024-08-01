import React from 'react';
import Discard from './Discard';

function DishItem({ dish,addtocartHandler }) {
   
    return (
        <Discard
            dish={dish}
            addtocartHandler={addtocartHandler}
        />
    );
}

export default DishItem;
