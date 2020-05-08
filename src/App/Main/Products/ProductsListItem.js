import React from 'react'

import './productslistitem.css'

import RewievRatingStars from '../ProductPage/RewievRatingStars'

const ProductsListItem = () => {
    return (
        <div className='products-list-item'>
            <div className="product-img">
                <a href="/" className="grid-img">
                    <img src="/images/products-img/woman-01.jpg" alt=""/>
                    <div className="quickview-btn">
                        <button title='Quick View'>+</button>
                    </div>
                </a>    
            </div>
            <div className="product-content">
                <h4 className="product-title">
                    <a href="/">Jasmine white bag</a>
                </h4>
                <div className="product-price">
                   <span><em>from </em>3000 ₴</span> 
                </div>
                <div className="review-ratting">
                <RewievRatingStars/>

                </div>
                <div className="action-buttons wrap">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="like-btn" title='Add to Wishlist'></button>
                </div>
            </div>
        </div>
    )
}

export default ProductsListItem
