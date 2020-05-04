import React from 'react'

import './headercart.css'

const HeaderCart = () => {
    return (
        <div className="wrap right">
            <div className='header-cart'>                
                <p className='top-cart'>
                    <a href="/">
                        <span className='shopping-bag-icon'>
                        </span>
                        <span className='product-quantity'>0</span>
                        <span className='text'> item(s) - </span>
                        <span className='price'>₴ 0</span>
                    </a>
                </p>
                <div className="dropdown-cart">
                    <div className="cart-empty">
                        <p>You have no items in your shopping cart.</p>
                    </div>
                    <div className="cart-mini-header" style={{display: 'none'}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCart
