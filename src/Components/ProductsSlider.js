import React from 'react'

import Slider from "react-slick"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './productsslider.css'


const ProductsSlider = ({
    settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        }]},
    selectedFilter,
}) => {
    return (
        <div>
            <Slider {...settings}>
                { selectedFilter === 'Best Seller' 
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
                }
            </Slider>            
        </div>
    )
}

export default ProductsSlider
