import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'

import './productslistitem.css'

import RewievRatingStars from '../ProductPage/RewievRatingStars'
import ProductPrice from './../../../Components/productprice/ProductPrice'
import { addToCart } from './../../../store/actions/cartActions'


const ProductsListItem = ({
    product,
    setShowQuickView,
    addToCart,
    cartItems
}) => {

    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'))


    console.log(savedCartItems)

    const ratingSum = Math.round((product.rewievs.reduce(
        (total, currentValue) => total + currentValue.rating,
        0
    ))/product.rewievs.length)

    return (
        <div className='products-list-item'>
            <div className="product-img">
                <Link to={`/shop/${product.category}/${product.type}/${product.id}`} className="grid-img">
                    <img src={product.mainimage} alt=""/>
                </Link>
                {product.options.filter(option => option.name === 'color').map(option => (option.value.length > 1 ? 
                    <ul className="color-swatch-item wrap" key={option.name}>
                        {option.value.map(value => (
                        <li style={value === '#fff' ? 
                            {backgroundColor: value, borderStyle: 'solid', borderWidth: '0.4px', borderColor: '#999'} 
                            : {backgroundColor: value}} key={value}>
                        </li>))}
                    </ul>     
                    : null
                ))} 
                {product.discount_price !== 0 ? <div className="product-label">Sale</div> : null}
                <button className="btn-square" title='Quick View' onClick={() => setShowQuickView(product.id)}></button>
            </div>
            <div className="product-content">
                <h4 className="product-title narrow">
                    <Link to={`/shop/${product.category}/${product.type}/${product.id}`}>{product.name}</Link>
                </h4>
                <div className="product-price">
                    <ProductPrice
                        discount_price = {product.discount_price}
                        price = {product.price}
                    />
                </div>
                <div className="review-ratting">
                <RewievRatingStars
                    ratingAnable = {false}
                    ratingSum = {ratingSum}
                />
                </div>
                <div className="action-buttons wrap center">
                    {product.options.map(option => option.value).some(item => item.length > 1) === true ?
                        <Link to={`/shop/${product.category}/${product.type}/${product.id}`}>
                             <button title='Select options'>Select options</button>
                        </Link> 
                        : <button
                            title='Add to Cart'
                            onClick={() => addToCart(savedCartItems === null ? cartItems : savedCartItems,product.id,1)}
                        >
                            Add to Cart
                        </button>
                    }
                    <button className="btn-square" title='Add to Wishlist'></button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    showQuickView:  state.quickView.showQuickView,
    cartItems: state.cart.items,
})

const mapDispatchToProps = dispatch => ({
    setShowQuickView: (id) => dispatch({ 
        type: "SHOW_QUICKVIEW", 
        id: id
    }),
    addToCart: (items, id, quantity) => dispatch (addToCart(items, id, quantity))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductsListItem)
