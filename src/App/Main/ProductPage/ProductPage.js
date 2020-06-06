import React, { useState, useEffect } from 'react'

import './productpage.css'

import ViewSlider from '../../../Components/ViewSlider'

import ProductOptions from './../Products/ProductOptions'
import Quantity from './../../../Components/quantity/Quantity'
import ProductPrice from './../../../Components/productprice/ProductPrice'

import productsData, {getProductsMap} from './../Products/productsData'
import ZoomImage from './ZoomImage/ZoomImage'

const productsArray = getProductsMap(productsData)

const ProductPage = ({
    match,
}) => {

    const id = match.params.productId

    const [quickViewImg, setQuickViewImg] = useState(productsArray[id].mainimage)
    const [productCount, setProductCount] = useState(1)

    const onIncrementClick = () => {
        setProductCount(productCount + 1)
    }
    
    const onDecrementClick = () => {
        setProductCount(productCount - 1)
    }
    
    return (
        <div className='product-page'>
            <section className="wrap">
                <div className="quickview-img col-md-4">
                    <ZoomImage
                        quickViewImg = {quickViewImg}
                   />
                    <div className="more-view">
                        <ViewSlider 
                            id={id}
                            setQuickViewImg={setQuickViewImg}
                            slickViewStyle = 'slick-view'
                        />
                    </div>
                </div>
                <div className="quickview-shop col-md-7">
                    <h2 className="narrow">{productsArray[id].name}</h2>
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
            </section>
        </div>
    )
}

export default ProductPage
