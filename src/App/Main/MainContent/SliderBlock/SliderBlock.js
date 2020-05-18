import React from 'react'

import {Link} from 'react-router-dom'
import './sliderblock.css'

import SlickSlider from './SlickSlider/SlickSlider'

const SliderBlock = () => {
    return (
        <div className='wrap slider-block'>
            <div className="col-md-9">
                <SlickSlider/>
            </div>
            <div className="col-md-3">
                <div className="slider-widget wrap">
                    <div className="widget-img-block">
                        <img src="/images/slider/widget-slider.jpg" alt="Jeans style"/>
                        <div className="widget-img-content">
                            <div className="title">
                                <Link to="/">Jeans -<br/>new<br/>trend</Link>
                            </div>
                        </div>
                    </div>
                    <div className="widget-text-block">
                        <div className="block-center">
                            <div className="title"><h1>Supper Sale!</h1></div>
                            <div className="text"></div>
                            <Link to="/" className="btn-link btn-white">
                                <span>View Now</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderBlock
