import React, { useState } from 'react'

import './productpage.css'

import ViewSlider from '../../../Components/ViewSlider'
import RewievRatingStars from './RewievRatingStars'
import ZoomImage from './ZoomImage/ZoomImage'
import ProductImageView from './ProductImageView/ProductImageView'
import ProductOptions from './../Products/ProductOptions'
import ProductPrice from './../../../Components/productprice/ProductPrice'
import ProductTabsRadioButtons from './ProductTabsRadioButtons/ProductTabsRadioButtons'

import productsData, {getProductsMap} from './../Products/productsData'
import productQuickViewReducer from './../../../store/reducers/productQuickViewReducer';


const productsArray = getProductsMap(productsData)

const ProductPage = ({
    match,
}) => {

    const id = match.params.productId

    const [productViewImg, setProductViewImg] = useState(productsArray[id].mainimage)
    const [imageView, setImageView] = useState(false)
    const [productCount, setProductCount] = useState(1)
    const [selectedDescTab, setSelectedDescTab] = useState('Product Description')

    const onCountChange = (e) => {
        if (e.target.value > productsArray[id].in_stock) 
            return alert('Opps! You can not buy more items, then are in stock.')
        else if (e.target.value === '0') return alert('You should select at least 1 item of product!')
        else setProductCount(e.target.value)
    }

    return (
        <div className='product-page'>
            <section className="product-description wrap">
                <div className="product-view-img col-md-5">
                    <ZoomImage
                        imageView = {imageView}
                        setImageView = {setImageView}
                        productViewImg = {productViewImg}
                    />
                    <ProductImageView
                        imageView = {imageView}
                        setImageView = {setImageView}
                        productViewImg = {productViewImg}
                    />
                    <div className="more-view">
                        <ViewSlider 
                            id={id}
                            setProductViewImg={setProductViewImg}
                            slickViewStyle = 'slick-view'
                        />
                    </div>
                </div>
                <div className="product-shop-info col-md-8">
                    <h2>{productsArray[id].name}</h2>
                    <div className="wrap">
                        <RewievRatingStars/>
                        <span className='reviews-count'>No reviews</span>
                    </div>
                    <div className="product-price wrap">
                        <ProductPrice
                            discount_price = {productsArray[id].discount_price}
                            price = {productsArray[id].price}
                            price_value={'price-value'}
                        />
                    </div>
                    <table className="product-base-info">
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
                    <div className="wrap">
                        <span className='product-quantity-title'>Qty:</span>
                        <div className="product-quantity-value">
                            <input type="text" value={productCount} onChange={onCountChange}/>
                        </div>
                        <div className="action-buttons">
                            <button>Add to Cart</button>
                            <button className="btn-square" title='Add to Wishlist'></button>
                        </div>                       
                    </div>    
                </div>               
            </section>
            <section className="product-tabs">
                <ProductTabsRadioButtons
                    selectedDescTab={selectedDescTab}
                    setSelectedDescTab={setSelectedDescTab}
                />
                <div className="tab-content">
                    {selectedDescTab === 'Product Description' ? 
                        <div className="tab-pane">
                            <p>{productsArray[id].description}</p>
                        </div> :
                        <div className="tab-pane">
                            <span>No reviews yet</span>
                        </div>
                        }
                </div>
            </section>
        </div>
    )
}

export default ProductPage
