import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {keys} from "lodash"

import productsData, {getProductsMap} from './../Products/productsData'
import { removeFromWishList } from './../../../store/actions/wishListAction'
import ProductPrice from '../../../Components/productprice/ProductPrice'

const WishListPage = ({
    productsArray = getProductsMap(productsData),
    wishListData = JSON.parse(localStorage.getItem('wishListItems')),
    removeFromWishList,
}) => {

    const checkWishList = wishListData === null || keys(wishListData).length === 0

    return (
        <>
            {checkWishList ? 
                <div className='empty-cart'>
                    <h2 className='section-title'>You have no items in the Wishlist!</h2>
                </div>
                : <div className="wishlist cart-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>AVAILABILITY</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {  keys(wishListData).map(productId => (
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
                                    <ProductPrice
                                        discount_price = {productsArray[productId].discount_price}
                                        price = {productsArray[productId].price}
                                    />
                                </td>
                                <td>
                                    {productsArray[productId].in_stock > 0 ? 'instock' : 'out of stock'}
                                </td>
                                <td>
                                    <button 
                                        onClick={() => removeFromWishList(wishListData,productsArray[productId].id)}
                                        title="Remove from Wishlist" 
                                        className="btn-remove"
                                    >X</button>
                                </td>
                            </tr>
                            ))
                        }   
                    </tbody>
                </table>
            </div>
            }
        </>
    )
}

const mapStateToProps = state => ({
    wishListItems: state.wishList.items,
})

export default connect(
    mapStateToProps, { removeFromWishList }
) (WishListPage)