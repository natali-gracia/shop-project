import React from 'react'

import Slider from "react-slick"
import {Link} from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slickslider.css'
import './textanimation.css'

const SlickSlider = ({
    settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
    }
}) => {
    return (
        <div className="slider-row">
            <Slider {...settings}>
                <div className="slick-slide-item">
                    <div className="slick-image"><img src="/images/slider/slideshow_1.jpg" alt="SALE"/></div>
                    <div className="slider-content">
                        <div className="slide-item-title">hipster<br/>trending<br/>in 2020</div>
                        <div className="slide-item-text">
                            Hipster style is a fashion trending for Gentleman and Lady with tattoos. You’ll become so cool and attractive.
                        </div>
                        <Link to="/" className="btn-link">
                            <span>View Now</span>
                        </Link>
                    </div>
                </div>
                <div className="slick-slide-item">
                    <div className="slick-image"><img src="/images/slider/slideshow_2.jpg" alt=""/></div>
                    <div className="slider-content">
                        <div className="slide-item-title">leather<br/>belts</div>
                        <div className="slide-item-text">
                            Secure your style with<br/>HONCHAROVA store edit of belts.
                            <br/>Modern and classic designs, we’ve got something for everyone.
                        </div>
                        <Link to="/shop/all-categories/accessories" className="btn-link">
                            <span>Shop Now</span>
                        </Link>
                    </div>
                </div>
                <div className="slick-slide-item">
                    <div className="slick-image"><img src="/images/slider/slideshow_3.jpg" alt=""/></div>
                    <div className="slider-content">
                        <div className="slide-item-title">SALE UP TO <br/>30% IN THE SHOP</div>
                        <div className="slide-item-text">
                            In anniversay 5 years.
                            <br/>Sale up to 30%. Wow ! Come here.
                        </div>
                        <Link to="/shop" className="btn-link">
                            <span>View Now</span>
                        </Link>
                    </div>
                </div>
            </Slider>
        </div>

    )
}

export default SlickSlider
