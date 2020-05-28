import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'

import './productslistitem.css'

import RewievRatingStars from '../ProductPage/RewievRatingStars'
import  productsData, {getProductsMap} from './productsData'

const productsArray = getProductsMap(productsData)

const ProductsListItem = ({
    id=1,
    setShowQuickView
}) => {
    return (
        <div className='products-list-item'>
            <div className="product-img">
                <Link to="/" className="grid-img">
                    <img src={productsArray[id].mainimage} alt=""/>
                </Link>
                {productsArray[id].options.map(option => (option.name === 'color' ? 
                    <ul className="color-swatch-item wrap" key={option.name}>
                        {option.value.map(value => (
                        <li style={{}} style={value === 'white' ? 
                            {backgroundColor: value, borderStyle: 'solid', borderWidth: '0.4px', borderColor: '#999'} 
                            : {backgroundColor: value}} key={value}>
                        </li>))}
                    </ul>     
                    : null
                ))} 
                {productsArray[id].discount_price !== 0 ? <div className="product-label">Sale</div> : null}
                <button className="btn-square" title='Quick View' onClick={() => setShowQuickView()}></button>
            </div>
            <div className="product-content">
                <h4 className="product-title narrow">
                    <Link to="/">{productsArray[id].name}</Link>
                </h4>
                <div className="product-price">
                    {productsArray[id].discount_price === 0 ?
                        <span>₴{productsArray[id].price}</span>
                    :
                        <span>
                            <span className='compare-price'><em>₴{productsArray[id].price}</em></span>
                            <span>₴{productsArray[id].discount_price}</span>
                        </span>
                    }
                </div>
                <div className="review-ratting">
                <RewievRatingStars/>
                </div>
                <div className="action-buttons wrap center">
                    <button>
                        {productsArray[id].options.length === 0 ? 'Add to Cart' : 'Select options'}
                    </button>
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
