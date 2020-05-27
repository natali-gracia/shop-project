import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'

import './productslistitem.css'

import RewievRatingStars from '../ProductPage/RewievRatingStars'

const ProductsListItem = ({
    setShowQuickView
}) => {
    return (
        <div className='products-list-item'>
            <div className="product-img">
                <Link to="/" className="grid-img">
                    <img src="/images/products-img/woman-01.jpg" alt=""/>
                </Link> 
                <button className="btn-square" title='Quick View' onClick={() => setShowQuickView()}></button>
            </div>
            <div className="product-content">
                <h4 className="product-title narrow">
                    <Link to="/">Jasmine white bag</Link>
                </h4>
                <div className="product-price">
                   <span><em>from </em>3000 ₴</span> 
                </div>
                <div className="review-ratting">
                <RewievRatingStars/>
                </div>
                <div className="action-buttons wrap center">
                    <button>Add to Cart</button>
                    <button className="btn-square" title='Add to Wishlist'></button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    showQuickView:  state.quickView.showQuickView
})

const mapDispatchToProps = dispatch => ({
    setShowQuickView: state => dispatch({ 
        type: "SHOW_QUICKVIEW", 
        state
})
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductsListItem)
