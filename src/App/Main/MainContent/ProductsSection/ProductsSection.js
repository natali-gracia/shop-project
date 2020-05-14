import React, {useState} from 'react'

import './productssection.css'

import RadioButtonFilter from './RadioButtonFilter'
// import ProductsListItem from './../../Products/ProductsListItem'
import ProductsSlider from './../../../../Components/ProductsSlider'

const ProductsSection = () => {

    const [selectedFilter, setSelectedFilter] = useState('Best Seller')

    return (
        <section className='main-page-section'>
            <RadioButtonFilter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />
            <div className="products-list-slider">
                <ProductsSlider/>
            </div>
        </section>
    )
}

export default ProductsSection
