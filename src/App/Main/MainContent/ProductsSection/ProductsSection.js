import React, {useState} from 'react'

import './productssection.css'

import RadioButtonFilter from './RadioButtonFilter'
import ProductsListItem from './../../Products/ProductsListItem'

const ProductsSection = () => {

    const [selectedFilter, setSelectedFilter] = useState('Best Seller')

    return (
        <section className='main-page-section'>
            <RadioButtonFilter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />
            <div className="products-list-slider">
                <ProductsListItem/>
                Hello world!
            </div>
        </section>
    )
}

export default ProductsSection
