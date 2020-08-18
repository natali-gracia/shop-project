import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

import axios from 'axios' 
import {keys} from "lodash"

const CartTotal = ({
    cartItems,
    productsArray,
    selectedCurrency={value: 'hryvnia', label: 'UAH'},
}) => {

    const [exchangeRates, setЕxchangeRates] = useState();
    
    useEffect(() => {
        let isCurrent = true
        axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(res => {
                if (isCurrent) {setЕxchangeRates(res.data.filter(rate => rate.r030 === 978)[0].rate)
            }})
            .catch(err => {
                console.log("Opps", err.message)
            })
            return () => isCurrent = false            
    }, [])

    const price_euro = (price) => (((price/exchangeRates)*1.05).toFixed())
    const discount_price_euro = (discount_price) => (((discount_price/exchangeRates)*1.05).toFixed())

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    selectedCurrency:  state.selectedCurrency.value,
})

export default connect(
    mapStateToProps
) (CartTotal)
