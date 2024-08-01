import React from 'react'
import DishItem from './DishItem'

function DishList({ filteredCategories,addtocartHandler }) {
    return (
        <div>
            <div className="row">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((dish, index) => (
                        <DishItem addtocartHandler={addtocartHandler} dish={dish} />
                    ))
                ) : (
                    <p className="text-center text-white">No dishes available for the selected category.</p>
                )}
            </div>
        </div>
    )
}

export default DishList
