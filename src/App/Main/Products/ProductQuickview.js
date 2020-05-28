import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import './productquickview.css'
import ViewSlider from '../../../Components/ViewSlider'

import  productsData, {getProductsMap} from './../Products/productsData'
import ProductOptions from './ProductOptions'
import Quantity from '../../../Components/quantity/Quantity'


const productsArray = getProductsMap(productsData)

const ProductQuickview = ({
    id=1,
    showQuickView,
    setShowQuickView,
}) => {

    const [quickViewImg, setQuickViewImg] = useState(productsArray[id].mainimage)
    const [productCount, setProductCount] = useState(1)

    const onIncrementClick = () => {
        setProductCount(productCount + 1)
    }
    
    const onDecrementClick = () => {
        setProductCount(productCount - 1)
    }

    return (
        <div className={showQuickView === false ? 'product-quickview hidden' : 'product-quickview'}>
            <div className="overlay"></div>
            <div className="quickview-content wrap">
                <div className="quickview-img col-md-5">
                    <div className="quickview-main-img">
                        <Link to="/"><img src={quickViewImg} alt=""/></Link>
                    </div>
                    <div className="more-view">
                        <ViewSlider setQuickViewImg={setQuickViewImg}/>
                    </div>
                </div>
                <div className="quickview-shop col-md-7">
                    <h2 className="narrow">
                        <Link to="/">{productsArray[id].name}</Link>
                    </h2>
                    <table className="quickview-base-info">
                        <tbody>
                            <tr><th>Availability</th><td>{productsArray[id].in_stock > 1 ? 
                                productsArray[id].in_stock + ' in stock' 
                                : <span className="product-one-left">Only 1 left!</span>
                                }</td></tr>
                            <tr><th>Product Type</th><td>{productsArray[id].type}</td></tr>
                            <tr><th>Material</th><td>{productsArray[id].material}</td></tr>
                        </tbody>
                    </table>
                    <p className='product-summary'>{productsArray[id].summary}</p>
                    <ProductOptions/>
                    <div className="product-price">
                        <span>Price:</span>
                        {productsArray[id].discount_price === null ?
                            <span className="price-value">₴{productsArray[id].price}</span>
                        :
                            <span>
                                <span className='compare-price'><em>₴{productsArray[id].price}</em></span>
                                <span className="price-value">₴{productsArray[id].discount_price}</span>
                            </span>
                        }
                    </div>
                    <div className="product-quantity wrap">
                        <span>Quantity:</span>
                        <Quantity
                            productCount={productCount}
                            onIncrementClick={onIncrementClick}
                            onDecrementClick={onDecrementClick}
                            minCount={1}
                            maxCount={productsArray[id].in_stock}
                        />                       
                    </div>
                    <div className="action-buttons">
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="btn-close">
                    <button className="btn-square" onClick={() => setShowQuickView()}></button>
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
) (ProductQuickview)
