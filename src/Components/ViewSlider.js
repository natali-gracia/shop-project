import React from 'react'

import Slider from "react-slick"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './viewslider.css'

import  productsData, {getProductsMap} from './../App/Main/Products/productsData'

const productsArray = getProductsMap(productsData)

const ViewSlider = ({
    id = 1,
    slidesToShowCount = 3,
    setQuickViewImg,
    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: productsArray[id].images.length <= slidesToShowCount-2 ? productsArray[id].images.length + 1 : slidesToShowCount,
        slidesToScroll: 1
    },
    slickViewStyle = ''
}) => {

    return (
        <div className={slickViewStyle}>
            <div className='view-slider'>
                <Slider {...settings}>
                    <div className="slick-slide-item">
                        <img src={productsArray[id].mainimage} alt={productsArray[id].name} onClick={()=>setQuickViewImg(productsArray[id].mainimage)}/>   
                    </div>
                    {productsArray[id].images.map((img)=>(
                        <div className="slick-slide-item" key={img}>
                            <img src={img} alt={productsArray[id].name} onClick={()=>setQuickViewImg(img)}/>   
                        </div>
                    ))}
                </Slider>            
            </div>
        </div>
    )
}

export default ViewSlider
