import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import './productquickview.css'
import ViewSlider from '../../../Components/ViewSlider'

import productsData from './../Products/productsData'
import ProductOptions from './ProductOptions'
import Quantity from '../../../Components/quantity/Quantity'
import ProductPrice from './../../../Components/productprice/ProductPrice'
import { addToCart } from './../../../store/actions/cartActions'

const ProductQuickview = ({
    id = 1,
    showQuickView,
    setShowQuickView,
    cartItems,
    addToCart
}) => {

    const product = productsData.filter(product => product.id === id)[0]

    const [quickViewImg, setQuickViewImg] = useState('')
    const [productCount, setProductCount] = useState(1)

    useEffect(() => {
        if(showQuickView === false) {
            setQuickViewImg('')
            setProductCount(1)
          }
    }, [showQuickView]);

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
                <div className="product-view-img col-md-5">
                    <div className="quickview-main-img">
                        <Link 
                            to={`/shop/${product.category}/${product.type}/${product.id}`}
                            onClick={() => setShowQuickView()}
                        >
                            <img src={quickViewImg === '' ? product.mainimage : quickViewImg} alt=""/>
                        </Link>
                    </div>
                    <div className="more-view">
                        <ViewSlider
                            id={product.id}
                            setProductViewImg={setQuickViewImg}
                        />
                    </div>
                </div>
                <div className="quickview-shop col-md-7">
                    <h2 className="narrow">
                        <Link 
                            to={`/shop/${product.category}/${product.type}/${product.id}`}
                            onClick={() => setShowQuickView()}
                        >
                            {product.name}
                        </Link>
                    </h2>
                    <table className="product-base-info">
                        <tbody>
                            <tr><th>Availability</th><td>{product.in_stock > 1 ? 
                                'in stock' 
                                : <span className="product-one-left">Only 1 left!</span>
                                }</td></tr>
                            <tr><th>Product Type</th><td>{product.type}</td></tr>
                            <tr><th>Material</th><td>{product.material}</td></tr>
                        </tbody>
                    </table>
                    <p className='product-summary'>{product.summary}</p>
                    <ProductOptions
                        id={product.id}
                    />
                    <div className="product-price wrap">
                        <span className='product-price-title'>Price:</span>
                        <ProductPrice
                            discount_price = {product.discount_price}
                            price = {product.price}
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
                            maxCount={product.in_stock}
                        />                       
                    </div>
                    <div className="action-buttons">
                        <button
                            title='Add to Cart'
                            onClick={() => addToCart(cartItems,product.id,productCount)}
                        >
                            Add to Cart
                        </button>
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
    cartItems: state.cart.items,
})

const mapDispatchToProps = dispatch => ({
    setShowQuickView: () => dispatch({ 
        type: "SHOW_QUICKVIEW"
    }),
    addToCart: (items, id, quantity) => dispatch (addToCart(items, id, quantity))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductQuickview)
