import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {keys} from "lodash"

import './cartPage.css'

import productsData, {getProductsMap} from './../Products/productsData'
import ProductPrice from './../../../Components/productprice/ProductPrice'
import Quantity from './../../../Components/quantity/Quantity'
import CartTotal from './../../Header/CartHeader/CartTotal'
import {changeProductQuantity, removeFromCart} from './../../../store/actions/cartActions'

const CartPage = ({
    cartItems,
    changeProductQuantity,
    removeFromCart,
    productsArray = getProductsMap(productsData),
    savedCartItems = JSON.parse(localStorage.getItem('cartItems')),
}) => {

    return (
        <div className="cart-table">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th className="double">Product</th>
                        <th>QTY</th>
                        <th>Item Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody> 
                    {  keys(savedCartItems).map(productId => (
                        <tr key={productsArray[productId].id}> 
                            <td>
                                <Link to={`/shop/${productsArray[productId].category}/${productsArray[productId].type}/${productsArray[productId].id}`} className="product-img">
                                    <img src={productsArray[productId].mainimage} alt=""/>
                                </Link>
                            </td>
                            <td>
                                <p className="product-name">
                                    <Link to={`/shop/${productsArray[productId].category}/${productsArray[productId].type}/${productsArray[productId].id}`}>{productsArray[productId].name}</Link>
                                </p>
                            </td>
                            <td>
                                <Quantity
                                    productCount={savedCartItems[productId]}
                                    onIncrementClick={()=>
                                        changeProductQuantity(
                                            savedCartItems === null ? cartItems : savedCartItems,
                                            productsArray[productId].id,
                                            savedCartItems[productId]+1
                                        )}
                                    onDecrementClick={()=> (
                                        (savedCartItems[productId]===1)
                                        ? removeFromCart(savedCartItems,productsArray[productId].id)
                                        :
                                        changeProductQuantity(
                                            savedCartItems === null ? cartItems : savedCartItems,
                                            productsArray[productId].id,
                                            savedCartItems[productId]-1
                                        ))}
                                    minCount={1}
                                    maxCount={productsArray[productId].in_stock}
                                />
                            </td>
                            <td>
                                <ProductPrice
                                    discount_price = {productsArray[productId].discount_price}
                                    price = {productsArray[productId].price}
                                />
                            </td>
                            <td>
                                <button 
                                    onClick={() => removeFromCart(savedCartItems,productsArray[productId].id)}
                                    title="Remove This Item" 
                                    className="btn-remove"
                                >X</button>
                            </td>
                        </tr>
                        ))
                    }   
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total price:</td>
                        <td className="bold">
                            <CartTotal
                                cartItems = {savedCartItems}
                                productsArray = {productsArray}
                            />
                        </td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <div className="action-buttons wrap right">
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
    { changeProductQuantity, removeFromCart } 
) (CartPage)

