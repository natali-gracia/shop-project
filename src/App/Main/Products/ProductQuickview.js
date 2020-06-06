import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import './productquickview.css'
import ViewSlider from '../../../Components/ViewSlider'

import  productsData, {getProductsMap} from './../Products/productsData'
import ProductOptions from './ProductOptions'
import Quantity from '../../../Components/quantity/Quantity'
import ProductPrice from './../../../Components/productprice/ProductPrice'

const productsArray = getProductsMap(productsData)

const ProductQuickview = ({
    id = 1,
    showQuickView,
    setShowQuickView,
}) => {

    const [quickViewImg, setQuickViewImg] = useState('')
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
                        <Link to="/"><img src={quickViewImg === '' ? productsArray[id].mainimage : quickViewImg} alt=""/></Link>
                    </div>
                    <div className="more-view">
                        <ViewSlider
                            id={id} 
                            setQuickViewImg={setQuickViewImg}
                        />
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
                    <div className="product-price wrap">
                        <span className='product-price-title'>Price:</span>
                        <ProductPrice
                            discount_price = {productsArray[id].discount_price}
                            price = {productsArray[id].price}
                            price_value={'price-value'}
                        />
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
    showQuickView:  state.quickView.showQuickView,
    id:  state.quickView.productId,
})

const mapDispatchToProps = dispatch => ({
    setShowQuickView: (state, id) => dispatch({ 
        type: "SHOW_QUICKVIEW", 
        state,
        id
})
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductQuickview)
