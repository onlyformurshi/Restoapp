import React from 'react'

function AddToCart({ CartItems }) {
    let Items = CartItems.map((item) => {
        return (
            <>
                <img src={item.img} alt="" />
                <p>{item.title}</p></>
        )
    })
    return (
        <div>
            <div className="d-flex cat-items">
                <div className="d-grid">
                    {Items}
                </div>
            </div>
        </div>
    )
}

export default AddToCart
