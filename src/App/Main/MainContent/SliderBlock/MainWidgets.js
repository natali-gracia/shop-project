import React from 'react'
import {Link} from 'react-router-dom'
import './sliderblock.css'

const MainWidgets = () => {
    return (
        <div className="slider-widget wrap">
            <div className="widget-img-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/slider%2Fwidget-slider.jpg?alt=media&token=b79a1d5a-db35-467c-a763-53f0b2811ef8" alt="Jeans style"/>
                <div className="widget-img-content">
                    <div className="title">
                        <span>Jeans -<br/>new<br/>trend</span>
                        {/* <Link to="/">Jeans -<br/>new<br/>trend</Link> */}
                    </div>
                </div>
            </div>
            <div className="widget-text-block">
                <div className="block-center">
                    <div className="title"><h1>Supper Sale!</h1></div>
                    <div className="text"></div>
                    <Link 
                        to="/shop" 
                        className="btn-link btn-white" >
                        <span>View Now</span>
                    </Link>
                </div>
            </div>
        </div>
)}

export default MainWidgets
