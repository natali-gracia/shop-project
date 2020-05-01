import React from 'react'

import './headercart.css'

const HeaderCart = () => {
    return (
        <div className='header-cart'>
            <p>
                <a href="/">
                    <span className='shopping-bag-icon'>
                    </span>
                    <span className='product-quantity'>0</span>
                    <span className='text'> item(s) - </span>
                    <span className='price'>₴ 0</span>
                </a>
            </p>
            
        </div>
    )
}

export default HeaderCart
