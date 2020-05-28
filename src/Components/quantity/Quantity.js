import React from 'react'

import './quantity.css'

const Quantity = ({
    onDecrementClick,
    onIncrementClick,
    productCount,
    minCount,
    maxCount
}) => {
    return (
        <div className="product-quantity-value">
            <button 
                className="btn-square minus"
                onClick={onDecrementClick} 
                disabled={productCount<=minCount}>
            </button>
            <input type="text" value={productCount} readOnly/>
            <button 
                className="btn-square plus"
                onClick={onIncrementClick} 
                disabled={productCount>=maxCount}>
            </button>
        </div>
    )
}

export default Quantity
