import React from 'react'

import './productimageview.css'

const ProductImageView = ({
    imageView,
    setImageView,
    productViewImg
}) => {
    return (
        <div className={imageView === false ? 'product-quickview hidden' : 'product-quickview'}>
            <div className="overlay"></div>
            <div className="img-view-content wrap">
                <div className="view-wrap">
                    <div className="fullscreen-img">
                        <img src={productViewImg} alt=''/>
                    </div>
                    <div className="btn-close">
                        <button className="btn-square" onClick={() => setImageView(!imageView)}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductImageView
