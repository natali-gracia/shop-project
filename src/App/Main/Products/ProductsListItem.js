import React from 'react'

import './productslistitem.css'

import RewievRatingStars from '../ProductPage/RewievRatingStars'

const ProductsListItem = () => {
    return (
        <div className='products-list-item'>
            <div className="product-img">
                <a href="/" className="grid-img">
                    <img src="/images/products-img/woman-01.jpg" alt=""/>
                    <button className="btn-square" title='Quick View'></button>
                </a>    
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
