import React from 'react'

import './producttabsradiobuttons.css'

const ProductTabsRadioButtons = ({
    selectedDescTab,
    setSelectedDescTab
}) => {
    return (
        <h2 className='section-title product-tabs-btn'>
            <label className={selectedDescTab === 'Product Description' ? 'checked' : ''}>
                <input 
                    type="radio" 
                    name="RadioButtons" 
                    value="Product Description"  
                    onChange={event => setSelectedDescTab(event.target.value)}
                />
                <em>Product Description</em>
            </label>
            <label className={selectedDescTab === 'Reviews' ? 'checked' : ''}>
                <input 
                    type="radio" 
                    name="RadioButtons" 
                    value="Reviews" 
                    onChange={event => setSelectedDescTab(event.target.value)}
                />
                <em>Reviews</em>
            </label>
        </h2>
    )
}

export default ProductTabsRadioButtons
