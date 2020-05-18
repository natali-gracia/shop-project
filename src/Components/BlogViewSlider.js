import React from 'react'

import Slider from "react-slick"
import {Link} from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './blogviewslider.css'

import  blogData from '.././App/Main/BlogPage/blogData'

const BlogViewSlider = ({
    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        }]},
}) => {

    return (
        <div className='view-slider'>
            <div className="blog-view">
                <Slider {...settings}>
                    {blogData.sort((a,b)=> b.id - a.id).slice(0,3).map((post)=>(
                        <div className="slick-slide-item" key={post.id}>
                            <img src={post.image} alt={post.name}/>
                            <div className="post-title-wrap">
                                <Link to="/">
                                    <h3 className='narrow'>{post.name}</h3>
                                </Link>
                                <p className='post-date'>{post.date}</p>
                            </div>
                        </div>
                    ))}
                </Slider> 
            </div>           
        </div>
    )
}

export default BlogViewSlider
