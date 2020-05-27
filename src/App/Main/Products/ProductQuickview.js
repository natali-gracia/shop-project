import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import './productquickview.css'
import ViewSlider from '../../../Components/ViewSlider'

import  productsData, {getProductsMap} from './../Products/productsData'
import ProductOptions from './ProductOptions'


const productsArray = getProductsMap(productsData)

const ProductQuickview = ({
    id=1,
    showQuickView,
    setShowQuickView,
}) => {

    const [quickViewImg, setQuickViewImg] = useState(productsArray[id].mainimage)

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
                            <tr><th>Availability</th><td>{productsArray[id].quantity >= 1 ? 'in stock' : 'on order'}</td></tr>
                            <tr><th>Product Type</th><td>{productsArray[id].type}</td></tr>
                            <tr><th>Material</th><td>{productsArray[id].material}</td></tr>
                        </tbody>
                    </table>
                    <p className='product-summary'>{productsArray[id].summary}</p>
                    <div className="quickview-product-options">
                        <div className="size-option">
                            <p>Size</p>
                            <button type='radio' className="btn-square active"><label>S</label></button>
                            <button type='radio' className="btn-square">M</button>
                        </div>
                        <ProductOptions/>
                        
                        {/* {
                            productsArray[1].options.map((option) => (
                                option
                            ))
                        } */}

                    </div>
                    <p></p>
                    Hello world! 
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
