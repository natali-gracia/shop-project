import React from 'react'

import SliderBlock from './SliderBlock/SliderBlock'
import ProductsSection from './ProductsSection/ProductsSection'
import BlogSection from './BlogSection/BlogSection'
import SubscrFormSection from './SubscrFormSection/SubscrFormSection';

const HomePage = () => {
    return (
        <div>
            <SliderBlock/>
            <ProductsSection/>
            <BlogSection/>
            <SubscrFormSection/>
        </div>
    )
}

export default HomePage
