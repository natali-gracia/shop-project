import React from 'react'

import './blogsection.css'

import BlogViewSlider from './../../../../Components/BlogViewSlider';

const BlogSection = () => {
    return (
        <section className='blog-section'>
            <h2 className='section-title'>FROM THE BLOG</h2>
            <BlogViewSlider/>
        </section>
    )
}

export default BlogSection
