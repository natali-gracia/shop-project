import React, { useState } from 'react'

import './productslistitem.css'

import RewievRatingStars from '../ProductPage/RewievRatingStars'
import ProductQuickview from './ProductQuickview';

const ProductsListItem = () => {

    const [showQuickView, setShowQuickView] = useState(false)

    return (
        <div className='products-list-item'>
            <div className="product-img">
                <a href="/" className="grid-img">
                    <img src="/images/products-img/woman-01.jpg" alt=""/>
                </a> 
                <button className="btn-square" title='Quick View' onClick={() => setShowQuickView(!showQuickView)}></button>
                <ProductQuickview 
                    showQuickView={showQuickView}
                    setShowQuickView={setShowQuickView}
                />  
            </div>
            <div className="product-content">
                <h4 className="product-title narrow">
                    <a href="/">Jasmine white bag</a>
                </h4>
                <div className="product-price">
                   <span><em>from </em>3000 ₴</span> 
                </div>
                <div className="review-ratting">
                <RewievRatingStars/>
                </div>
                <div className="action-buttons wrap center">
                    <button>Add to Cart</button>
                    <button className="btn-square" title='Add to Wishlist'></button>
                </div>
            </div>
        </div>
    )
}

export default ProductsListItem
