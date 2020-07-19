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
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                // slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }]},
    slidesToShowCount = 4,
    dottedLine = true,
    selectedFilter,
    filterCategory,
    filterId
}) => {

    const filterArray = 
        selectedFilter === 'Best Seller' ? productsData.sort((a,b)=> b.sellerrank - a.sellerrank) 
        : selectedFilter === 'New Arrival' ? productsData.sort((a,b)=> b.id - a.id)
        : selectedFilter === 'Most Wanted' ? productsData.sort((a,b)=> b.likes - a.likes)
        : productsData.filter(product=>product.category === filterCategory).filter(product=>product.id !== filterId)
    
    const slidesToShow = filterArray.length < slidesToShowCount ? filterArray.length : slidesToShowCount

    return (
        <div className='products-slider'>
            <div className={dottedLine === true ? "dotted-line" : 'hidden'}></div> 
            <Slider {...settings} slidesToShow ={slidesToShow}>
                {filterArray.slice(0,10).map((product)=>(
                    <div className="slick-slide-item" key={product.id}>
                        <ProductsListItem
                            product={product} 
                        />
                    </div>))}
            </Slider>            
        </div>
    )
}

ProductsSlider.propTypes = {
    filterId: PropTypes.number
}

export default ProductsSlider
