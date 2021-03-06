import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import { getExchangeRates } from './../../store/actions/exchangeRatesActions'
import './productprice.css'
 


const ProductPrice = ({
    discount_price,
    price,
    price_value='',
    selectedCurrency={value: 'hryvnia', label: 'UAH'},
    getExchangeRates,
    exchangeRates
}) => {

    useEffect(() => {
        getExchangeRates()
    }, [])

    const price_euro = () => (((price/exchangeRates)*1.05).toFixed())
    const discount_price_euro = () => (((discount_price/exchangeRates)*1.05).toFixed())

    return (
        <div>
            {selectedCurrency.value === 'hryvnia' ? 
                (discount_price === 0 ? <span className={price_value}>₴{price}</span>
            :
                <span>
                    <span className='compare-price'><em>₴{price}</em></span>
                    <span className={price_value}>₴{discount_price}</span>
                </span>)
            : 
                (discount_price === 0 ? <span className={price_value}>€{price_euro()}</span>
            :
                <span>
                    <span className='compare-price'><em>€{price_euro()}</em></span>
                    <span className={price_value}>€{discount_price_euro()}</span>
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
) (ProductPrice)