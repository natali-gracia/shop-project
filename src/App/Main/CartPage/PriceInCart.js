import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import { getExchangeRates } from './../../../store/actions/exchangeRatesActions'
import './../../../Components/productprice/productprice.css'
 

const PriceInCart = ({
    discount_price,
    price,
    selectedCurrency={value: 'hryvnia', label: 'UAH'},
    getExchangeRates,
    exchangeRates,
    productCount
}) => {

    useEffect(() => {
        getExchangeRates()
    }, [])

    const price_euro = () => (((price/exchangeRates)*1.05).toFixed())
    const discount_price_euro = () => (((discount_price/exchangeRates)*1.05).toFixed())
    const priceSum = (price) => price*productCount

    return (
        <div>
            {selectedCurrency.value === 'hryvnia' ? 
                (discount_price === 0 ? <span>₴{priceSum(price)}</span>
            :
                <span>
                    <span className='compare-price'><em>₴{priceSum(price)}</em></span>
                    <span>₴{priceSum(discount_price)}</span>
                </span>)
            : 
                (discount_price === 0 ? <span>€{priceSum(price_euro())}</span>
            :
                <span>
                    <span className='compare-price'><em>€{priceSum(price_euro())}</em></span>
                    <span>€{priceSum(discount_price_euro())}</span>
                </span>)
            }   
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedCurrency:  state.selectedCurrency.value,
    exchangeRates: state.exchangeRates.exchangeRates,
})

export default connect(
    mapStateToProps,
    { getExchangeRates }
) (PriceInCart)