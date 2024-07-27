import React from 'react'
import DishItem from './DishItem'

function DishList({ filteredCategories }) {
    return (
        <div>
            <div className="row">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((dish, index) => (
                        <DishItem dish={dish} />
                    ))
                ) : (
                    <p className="text-center text-white">No dishes available for the selected category.</p>
                )}
            </div>
        </div>
    )
}

export default DishList
