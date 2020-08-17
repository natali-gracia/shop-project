import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {keys} from "lodash"

import './dropdownCart.css'

import productsData, {getProductsMap} from './../../Main/Products/productsData'
import ProductPrice from './../../../Components/productprice/ProductPrice'
import CartTotal from './CartTotal'
import {removeFromCart} from './../../../store/actions/cartActions'

const productsArray = getProductsMap(productsData)

const DropdownCart = ({
    removeFromCart
}) => {

    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'))


    return (
        <div className="cart-mini-header">
            <ol className="cart-list">
                {   keys(savedCartItems).map(productId => (
                        <li className="wrap" key={productsArray[productId].id}>
                            <Link to={`/shop/${productsArray[productId].category}/${productsArray[productId].type}/${productsArray[productId].id}`} className="product-img">
                                <img src={productsArray[productId].mainimage} alt=""/>
                            </Link>
                            <div className="product-inner">
                                <p className="product-name">
                                    <Link to={`/shop/${productsArray[productId].category}/${productsArray[productId].type}/${productsArray[productId].id}`}>{productsArray[productId].name}</Link>
                                </p>
                                <div className="product-options">
                                    <div className="product-price wrap">
                                        <ProductPrice
                                            discount_price = {productsArray[productId].discount_price}
                                            price = {productsArray[productId].price}
                                        />
                                        <p className="product-count">&nbsp;X&nbsp;{savedCartItems[productId]}</p>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => removeFromCart(savedCartItems,productsArray[productId].id)}
                                title="Remove This Item" 
                                className="btn-remove"
                            >X</button>
                        </li>
                    ))
                }
            </ol>
            <div className="cart-total wrap space-between">
                <span>Total:</span>
                <span className="cart-total-value">
                    <CartTotal
                        cartItems = {savedCartItems}
                        productsArray = {productsArray}
                    />
                </span>
            </div>
            <div className="action-buttons wrap">
                <Link to="/" className="btn-link space-right">
                    <span>View Cart</span>
                </Link>
                <Link to="/" className="btn-link">
                    <span>Checkout</span>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
})

export default connect ( 
    mapStateToProps, 
    { removeFromCart } 
) (DropdownCart)
