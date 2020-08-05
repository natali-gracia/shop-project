import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

import './productpage.css'

import ViewSlider from '../../../Components/ViewSlider'
import RewievRatingStars from './RewievRatingStars'
import ZoomImage from './ZoomImage/ZoomImage'
import ProductImageView from './ProductImageView/ProductImageView'
import ProductOptions from './../Products/ProductOptions'
import ProductPrice from './../../../Components/productprice/ProductPrice'
import ProductTabsRadioButtons from './ProductTabsRadioButtons/ProductTabsRadioButtons'
import ProductsSlider from './../../../Components/ProductsSlider'
import RewievForm from './RewievForm/RewievForm'
import RewievsList from './RewievsList/RewievsList'
import { addToCart } from './../../../store/actions/cartActions'

import productsData, {getProductsMap} from './../Products/productsData'

const productsArray = getProductsMap(productsData)

const ProductPage = ({
    match,
    cartItems,
    addToCart
}) => {

    const id = match.params.productId

    const [productViewImg, setProductViewImg] = useState(productsArray[id].mainimage)
    const [imageView, setImageView] = useState(false)
    const [productCount, setProductCount] = useState(1)
    const [selectedDescTab, setSelectedDescTab] = useState('Product Description')
    const [showRewievForm, setShowRewievForm] = useState(false)

    const onCountChange = (e) => {
        if (e.target.value > productsArray[id].in_stock) 
            return alert(`Sorry! We have only ${productsArray[id].in_stock} items in stock.`)
        else if (e.target.value === '0') return alert('You should select at least 1 item of product!')
        else setProductCount(e.target.value)
    }

    const ratingSum = Math.round((productsArray[id].rewievs.reduce(
        (total, currentValue) => total + currentValue.rating,
        0
    ))/productsArray[id].rewievs.length)

    useEffect(() => {
        setProductViewImg(productsArray[match.params.productId].mainimage)
        setProductCount(1)
    }, [match]);

    return (
        <div className='product-page'>
            <section className="product-description wrap">
                <div className="product-view-img col-md-4">
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
                        <RewievRatingStars
                            ratingAnable = {false}
                            ratingSum = {ratingSum}
                        />
                        <span className='reviews-count'>
                            {productsArray[id].rewievs.length > 0 ? 
                                <React.Fragment>
                                    {productsArray[id].rewievs.length} 
                                    {productsArray[id].rewievs.length === 1 ? ' review' : ' reviews'}
                                </React.Fragment>
                                : ' No reviews'
                            }
                        </span>
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
                                'in stock' 
                                : <span className="product-one-left">Only 1 left!</span>
                                }</td></tr>
                            <tr><th>Product Type</th><td>{productsArray[id].type}</td></tr>
                            <tr><th>Material</th><td>{productsArray[id].material}</td></tr>
                        </tbody>
                    </table>
                    <p className='product-summary'>{productsArray[id].summary}</p>
                    <ProductOptions
                        id={productsArray[id].id}
                    />
                    <div className="wrap">
                        <span className='product-quantity-title'>Qty:</span>
                        <div className="product-quantity-value">
                            <input type="text" value={productCount} onChange={onCountChange}/>
                        </div>
                        <div className="action-buttons">
                            <button
                                title='Add to Cart'
                                onClick={() => addToCart(cartItems,productsArray[id].id,Number(productCount))}
                            >
                                Add to Cart
                            </button>
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
                        <div>
                            <div className="tab-pane">
                                {productsArray[id].rewievs.length > 0 ? 
                                    <div className='wrap rating-stars'>
                                        <RewievRatingStars
                                            ratingAnable = {false}
                                            ratingSum = {ratingSum}
                                        />
                                        <span>
                                            Based on {productsArray[id].rewievs.length} 
                                            {productsArray[id].rewievs.length === 1 ? ' review' : ' reviews'}
                                        </span>
                                    </div>
                                    : <span>No reviews yet</span>
                                }
                                <button onClick={() => setShowRewievForm(!showRewievForm)}>Write a review</button>
                            </div>
                            {showRewievForm === true ? <RewievForm/> : null}
                            {productsArray[id].rewievs.length > 0 ? 
                                <RewievsList 
                                    rewievsArray={productsArray[id].rewievs}
                                /> : null}
                        </div>
                        }
                </div>
            </section>
            <section className="related-products">
                <h2 className='section-title'>Related Products</h2>
                <div className="related-products-slider">
                    <ProductsSlider
                        selectedFilter = {'Related Products'}
                        filterCategory = {productsArray[id].category}
                        filterId = {Number(id)}
                        dottedLine = {false}
                    />
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
})

export default connect(
    mapStateToProps, { addToCart }
) (ProductPage)
