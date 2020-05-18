import React from 'react'

import './cartheader.css'
import {Link} from 'react-router-dom'

const CartHeader = ({
    topCartComponent = true,
    headerCartMargin = {marginTop: 50},
}) => {
    return (
        <div className="wrap right">
            <div className='header-cart' style={headerCartMargin}>                
                <p className='top-cart'>
                    <Link to="/">
                        <span className='shopping-bag-icon'>
                        </span>
                        {topCartComponent ? (
                            <em>
                                <span className='product-quantity'>0</span>
                                <span className='text'> item(s) - </span>
                                <span className='price'>₴ 0</span>
                            </em>
                        ) : (
                            <span className='product-quantity-fix'>0</span>
                        )}
                    </Link>
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

export default CartHeader
