import React from 'react'

import './sliderblock.css'

const SliderBlock = () => {
    return (
        <div className='wrap slider-block'>
            <div className="col-lg-9 main-slider">
                Hello world!
            </div>
            <div className="col-lg-3 slider-widget wrap">
                <div className="widget-img-block">
                    <img src="/images/slider/widget-slider.jpg" alt="Jeans style"/>
                    <div className="widget-img-content">
                        <h2 className="title">
                            <a href="/">Jeans -<br/>new<br/>trend</a>
                        </h2>
                    </div>
                </div>
                <div className="widget-text-block">
                    <div className="block-center">
                        <div className="title">Supper Sale!</div>
                        <div className="text">5th year anniversary sale for you</div>
                        <a href="/" className="btn-link">
                            <span>View Now</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderBlock
