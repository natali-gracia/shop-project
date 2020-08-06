import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {keys} from "lodash"

import './cartheader.css'

import productsData, {getProductsMap} from './../../Main/Products/productsData'
import CartTotal from './CartTotal'


const CartHeader = ({
    topCartComponent = true,
    headerCartMargin = {marginTop: 50},
    productsArray = getProductsMap(productsData),
    cartItems
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
                                <span className='product-quantity'>
                                {
                                    keys(cartItems).reduce((total,productId)=>(
                                        total + cartItems[productId]
                                    ),0)
                                }
                                </span>
                                <span className='text'> item(s) - </span>
                                <CartTotal
                                    cartItems = {cartItems}
                                    productsArray = {productsArray}
                                />
                            </em>
                        ) : (
                            <span className='product-quantity-fix'>
                                {
                                    keys(cartItems).reduce((total,productId)=>(
                                        total + cartItems[productId]
                                    ),0)
                                }
                            </span>
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

const mapStateToProps = state => ({
    cartItems: state.cart.items,
})

export default connect ( mapStateToProps ) (CartHeader)

