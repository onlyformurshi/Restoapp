import { useContext } from 'react';
import React from 'react'
import Discard from './Discard';
import { Spinner } from 'react-bootstrap';
import {AllMenuContext} from "./AllMenuContext";
function SpecialProduct({Loading }) {
    let productcount = 8

    const dishes = useContext(AllMenuContext)

    return (
        <div>
            <section className="py-5 special-dishes-section">
                <div className="container">
                    <h2 className="text-center mb-4 section-title">Special Dishes</h2>
                    {Loading ? (
                        <div className="text-center">
                            <Spinner style={{ borderRightColor: 'white' }} animation="border" />
                        </div>
                    ) : (

                        <div className="row">
                            {dishes.map((dish, index) => (
                                index < productcount ? (
                                    <Discard
                                        key={index}
                                        title={dish.strMeal}
                                        description={dish.strInstructions}
                                        imgSrc={dish.strMealThumb}
                                    />
                                ) : null

                            ))}
                        </div>
                    )}
                </div>
            </section>

        </div >
    )
}

export default SpecialProduct
