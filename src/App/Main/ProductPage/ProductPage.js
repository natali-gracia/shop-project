import React from 'react'

import './productpage.css'

import productsData, {getProductsMap} from './../Products/productsData'

const productsArray = getProductsMap(productsData)

const ProductPage = ({
    match,
}) => {

    const id = match.params.productId

    console.log(productsArray[id].name)
    
    return (
        <div>
            Hello!
        </div>
    )
}

export default ProductPage
