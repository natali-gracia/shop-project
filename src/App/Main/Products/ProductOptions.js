import React from 'react'

import productsData, {getProductsMap} from './../Products/productsData'

const productsArray = getProductsMap(productsData)

const ProductOptions = ({
    id = 1
}) => {
    return (
        <div className="product-options">
            {productsArray[id].options.map(option => (
                option.value.length > 1 ?
                <div key={option.name}> 
                    <div className="product-options-name">{option.name}</div>
                    <div className="wrap">
                        {option.name === 'color' ?
                            option.value.map(value => (
                            <label key={value} className='product-options-color' style={value === '#fff' ? 
                            {backgroundColor: value, borderStyle: 'solid', borderWidth: '0.4px', borderColor: '#999'} 
                            : {backgroundColor: value}}>
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
                </div> : null
            ))}
        </div>
    )
}

export default ProductOptions
