import React, { useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {keys} from "lodash"

import './cartheader.css'

import productsData, {getProductsMap} from './../../Main/Products/productsData'
import CartTotal from './CartTotal'
import DropdownCart from './DropdownCart'


const CartHeader = ({
    topCartComponent = true,
    headerCartMargin = {marginTop: 50},
    productsArray = getProductsMap(productsData),
    cartItems
}) => {

    let savedCartItems = JSON.parse(localStorage.getItem('cartItems'))

    useEffect(() => {
        savedCartItems = JSON.parse(localStorage.getItem('cartItems'))
    }, [cartItems]);

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
                                    keys(savedCartItems).reduce((total,productId)=>(
                                        total + savedCartItems[productId]
                                    ),0)
                                }
                                </span>
                                <span className='text'> item(s) - </span>
                                <CartTotal
                                    cartItems = {savedCartItems}
                                    productsArray = {productsArray}
                                />
                            </em>
                        ) : (
                            <span className='product-quantity-fix'>
                                {
                                    keys(savedCartItems).reduce((total,productId)=>(
                                        total + savedCartItems[productId]
                                    ),0)
                                }
                            </span>
                        )}
                    </Link>
                </p>
                <div className="dropdown-cart">
                    {savedCartItems === null || keys(savedCartItems).length < 1 ?
                        <div className="cart-empty">
                            <p>You have no items in your shopping cart.</p>
                        </div>
                    :   <DropdownCart/>
                    } 
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    cartItems: state.cart.items,
})

export default connect(
    mapStateToProps
) (CartHeader)

