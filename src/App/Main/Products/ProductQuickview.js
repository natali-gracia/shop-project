import React from 'react'

import 'rewievratingstars.css'

const ProductQuickview = () => {
    return (
        <div className='product-quickview'>
            <div className="overlay"></div>
            <div className="product-content wrap">
                <div className="product-img col-5">
                    <div className="quickview-main-image">
                        <a href="/"><img src="" alt=""/></a>
                    </div>
                    <div className="more-view">

                    </div>
                </div>
                <div className="product-shop col-7">

                </div>
            </div>
            <button className="close-popup"></button>
        </div>
    )
}

export default ProductQuickview
