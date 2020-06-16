import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'

import './productslistitem.css'

import RewievRatingStars from '../ProductPage/RewievRatingStars'
import productsData, {getProductsMap} from './productsData'
import ProductPrice from './../../../Components/productprice/ProductPrice'

const productsArray = getProductsMap(productsData)

const ProductsListItem = ({
    id=1,
    setShowQuickView
}) => {

    const ratingSum = Math.round((productsArray[id].rewievs.reduce(
        (total, currentValue) => total + currentValue.rating,
        0
    ))/productsArray[id].rewievs.length)

    return (
        <div className='products-list-item'>
            <div className="product-img">
                <Link to={`/shop/${productsArray[id].category}/${productsArray[id].type}/${productsArray[id].id}`} className="grid-img">
                    <img src={productsArray[id].mainimage} alt=""/>
                </Link>
                {productsArray[id].options.filter(option => option.name === 'color').map(option => (option.value.length > 1 ? 
                    <ul className="color-swatch-item wrap" key={option.name}>
                        {option.value.map(value => (
                        <li style={value === '#fff' ? 
                            {backgroundColor: value, borderStyle: 'solid', borderWidth: '0.4px', borderColor: '#999'} 
                            : {backgroundColor: value}} key={value}>
                        </li>))}
                    </ul>     
                    : null
                ))} 
                {productsArray[id].discount_price !== 0 ? <div className="product-label">Sale</div> : null}
                <button className="btn-square" title='Quick View' onClick={() => setShowQuickView(id)}></button>
            </div>
            <div className="product-content">
                <h4 className="product-title narrow">
                    <Link to="/">{productsArray[id].name}</Link>
                </h4>
                <div className="product-price">
                    <ProductPrice
                        discount_price = {productsArray[id].discount_price}
                        price = {productsArray[id].price}
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
                        {productsArray[id].options.map(option => option.value).some(item => item.length > 1) === true ? 'Select options' : 'Add to Cart'}
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
        id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (ProductsListItem)
