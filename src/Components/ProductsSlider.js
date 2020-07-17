import React from 'react'
import PropTypes from 'prop-types'

import Slider from "react-slick"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './productsslider.css'

import productsData from './../App/Main/Products/productsData'
import ProductsListItem from '../App/Main/Products/ProductsListItem'

const ProductsSlider = ({
    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }]},
    dottedLine = true,
    selectedFilter,
    filterCategory,
    filterId
}) => {

    return (
        <div className='products-slider'>
            <div className={dottedLine === true ? "dotted-line" : 'hidden'}></div> 
            <Slider {...settings}>
                {   selectedFilter === 'Best Seller' 
                    ? productsData.sort((a,b)=> b.sellerrank - a.sellerrank).slice(0,10).map((product)=>(
                        <div className="slick-slide-item" key={product.id}>
                            <ProductsListItem
                                product={product} 
                            />
                        </div>)) 
                    : selectedFilter === 'New Arrival'
                    ? productsData.sort((a,b)=> b.id - a.id).slice(0,10).map((product)=>(
                        <div className="slick-slide-item" key={product.id}>
                            <ProductsListItem
                                product={product} 
                            />
                        </div>)) 
                    : selectedFilter === 'Most Wanted'
                    ? productsData.sort((a,b)=> b.likes - a.likes).slice(0,10).map((product)=>(
                        <div className="slick-slide-item" key={product.id}>
                            <ProductsListItem
                                product={product} 
                            />
                        </div>)) 
                    : productsData.filter(product=>product.category === filterCategory).filter(product=>product.id !== filterId).slice(0,10).map((product)=>(
                        <div className="slick-slide-item" key={product.id}>
                            <ProductsListItem
                                product={product} 
                            />
                        </div>))
                }
            </Slider>            
        </div>
    )
}

ProductsSlider.propTypes = {
    filterId: PropTypes.number
}

export default ProductsSlider
