import React from 'react'

import  productsData, {getProductsMap} from './../Products/productsData'

const productsArray = getProductsMap(productsData)

const ProductOptions = () => {
    return (
        <div className="product-options">
            {productsArray[1].options.map(option => (
                <div key={option.name}>
                    <div className="product-options-name">{option.name}</div>
                    <div className="wrap">
                        {option.name === 'color' ?
                            option.value.map(value => (
                            <label key={value} className='product-options-color' style={{backgroundColor: value}}>
                                <input 
                                    type='radio'
                                    value={value}
                                    name="RadioButtons"
                                />
                            </label>
                        )) : option.value.map(value => (
                            <label key={value} className='product-options-item checked'>
                                {value}
                                <input 
                                    type='radio'
                                    value={value}
                                    name="RadioButtons"
                                />
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductOptions
