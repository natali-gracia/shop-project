import React from 'react'

import  productsData, {getProductsMap} from './../Products/productsData'

const productsArray = getProductsMap(productsData)

const ProductOptions = () => {
    return (
        <div >
            {productsArray[1].options.map(option => (
                <label htmlFor={option.name} key={option.name}>
                    {option.name}
                    <select name="" id={option.name}>
                        {option.value.map(value => (
                            <option key={value.value} value={value.value}>{value.value}</option>
                        ))}
                    </select>
                </label>
            ))}
        </div>
    )
}

export default ProductOptions
