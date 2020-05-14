import React from 'react'

import Slider from "react-slick"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './productsslider.css'

import ProductsListItem from './../App/Main/Products/ProductsListItem'

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
    // selectedFilter,
}) => {
    return (
        <div className='products-slider'>
            <div className="dotted-line"></div> 
            <Slider {...settings}>
                <div className="slick-slide-item"><ProductsListItem/></div>
                <div className="slick-slide-item"><ProductsListItem/></div>
                <div className="slick-slide-item"><ProductsListItem/></div>
                <div className="slick-slide-item"><ProductsListItem/></div>
                <div className="slick-slide-item"><ProductsListItem/></div>
                <div className="slick-slide-item"><ProductsListItem/></div>
                
                {/* { selectedFilter === 'Best Seller' 
                    ? productsData.sort((a,b)=> b.id - a.id).slice(0,9).map((product)=>(
                        <ProductsListItem
                            id={product.id}
                            key={product.id}
                        />)) 
                    : selectedFilter === 'New Arrival'
                    ? productsData.sort((a,b)=> b.id - a.id).slice(0,9).map((product)=>(
                        <ProductsListItem
                            id={product.id}
                            key={product.id}
                        />)) 
                    : productsData.sort((a,b)=> b.id - a.id).slice(0,9).map((product)=>(
                        <ProductsListItem
                            id={product.id}
                            key={product.id}
                        />)) 
                } */}
            </Slider>            
        </div>
    )
}

export default ProductsSlider
