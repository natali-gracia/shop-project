import React, {useState} from 'react'

import './productssection.css'

import RadioButtonFilter from './RadioButtonFilter'
import ProductsSlider from './../../../../Components/ProductsSlider'

const ProductsSection = () => {

    const [selectedFilter, setSelectedFilter] = useState('Best Seller')

    return (
        <section className='section'>
            <RadioButtonFilter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />
            <div className="products-list-slider">
                <ProductsSlider
                    selectedFilter={selectedFilter}
                />
            </div>
        </section>
    )
}

export default ProductsSection
