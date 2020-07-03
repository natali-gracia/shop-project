import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

import './productprice.css'

import axios from 'axios' 

const ProductPrice = ({
    discount_price,
    price,
    price_value='',
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
    selectedCurrency:  state.selectedCurrency.value
})

export default connect(
    mapStateToProps
) (ProductPrice)

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const res = await axios(
    //         'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    //       )     
    //       setЕxchangeRates(res.data.filter(rate => rate.r030 === 978)[0].rate)
    //     }
     
    //     fetchData();
    //   }, []);