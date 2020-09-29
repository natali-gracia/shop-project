import React, { useEffect } from 'react'
import {connect} from 'react-redux'
 
import {keys} from "lodash"

import { getExchangeRates } from './../../../store/actions/exchangeRatesActions'

const CartTotal = ({
    cartItems,
    productsArray,
    selectedCurrency={value: 'hryvnia', label: 'UAH'},
    getExchangeRates,
    exchangeRates
}) => {

    useEffect(() => {
        getExchangeRates()
    }, [])

    const price_euro = (price) => (((price/exchangeRates)*1.05).toFixed())
    const discount_price_euro = (discount_price) => (((discount_price/exchangeRates)*1.05).toFixed())

    return (
        <>
            <span className='price'>
                {selectedCurrency.value === 'hryvnia' ? '₴' : '€'}
                {
                    keys(cartItems).reduce((total,productId)=>(
                        total + (cartItems[productId] * 
                            Number(selectedCurrency.value === 'hryvnia' ? 
                                productsArray[productId].discount_price === 0 
                                    ? productsArray[productId].price 
                                    : productsArray[productId].discount_price
                            :
                                productsArray[productId].discount_price === 0 
                                    ? price_euro(productsArray[productId].price) 
                                    : discount_price_euro(productsArray[productId].discount_price)
                            ))
                        ),0)
                } 
            </span>
        </>
    )
}

const mapStateToProps = (state) => ({
    selectedCurrency:  state.selectedCurrency.value,
    exchangeRates: state.exchangeRates.exchangeRates,
})

export default connect(
    mapStateToProps,
    { getExchangeRates }
) (CartTotal)
