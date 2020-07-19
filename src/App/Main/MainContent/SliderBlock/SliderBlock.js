import React from 'react'

import './sliderblock.css'

import SlickSlider from './SlickSlider/SlickSlider'
import MainWidgets from './MainWidgets'

const SliderBlock = () => {
    return (
        <div className='wrap widget-section'>
            <div className="col-md-9">
                <SlickSlider/>
            </div>
            <div className="col-md-3">
                <MainWidgets/>
            </div>
        </div>
    )
}

export default SliderBlock
