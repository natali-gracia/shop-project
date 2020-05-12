import React from 'react'

import './sliderblock.css'

import SlickSlider from './SlickSlider/SlickSlider'

const SliderBlock = () => {
    return (
        <div className='wrap slider-block'>
            <div className="col-lg-9">
                <SlickSlider/>
            </div>
            <div className="col-lg-3">
                <div className="slider-widget wrap">
                    <div className="widget-img-block">
                        <img src="/images/slider/widget-slider.jpg" alt="Jeans style"/>
                        <div className="widget-img-content">
                            <div className="title">
                                <a href="/">Jeans -<br/>new<br/>trend</a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-text-block">
                        <div className="block-center">
                            <div className="title"><h1>Supper Sale!</h1></div>
                            <div className="text"></div>
                            <a href="/" className="btn-link btn-white">
                                <span>View Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderBlock
