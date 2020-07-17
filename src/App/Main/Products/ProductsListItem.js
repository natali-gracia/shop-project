import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'

import './productslistitem.css'

import RewievRatingStars from '../ProductPage/RewievRatingStars'
import ProductPrice from './../../../Components/productprice/ProductPrice'


const ProductsListItem = ({
    product,
    setShowQuickView
}) => {

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
                    <button>
                        {product.options.map(option => option.value).some(item => item.length > 1) === true ? 'Select options' : 'Add to Cart'}
                    </button>
                    <button className="btn-square" title='Add to Wishlist'></button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    showQuickView:  state.quickView.showQuickView,
})

const mapDispatchToProps = (dispatch) => ({
    setShowQuickView: (id) => dispatch({ 
        type: "SHOW_QUICKVIEW", 
        id: id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (ProductsListItem)
