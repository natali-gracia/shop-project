import {
    GET_EXRATES_SUCCESS,
    GET_EXRATES_FAILURE,
} from './types'

import axios from 'axios'

export const getExchangeRates = () => dispatch => {
      axios
        .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(res => {
          dispatch( getExRatesSuccess(res.data.filter(rate => rate.r030 === 978)[0].rate) );
        })
        .catch(err => {
          dispatch( getExRatesFailure(console.log("Opps", err.message)) )
        })
}
  
const getExRatesSuccess = exchangeRates => ({
    type: GET_EXRATES_SUCCESS,
    payload: {
        exchangeRates
    }
})
  
const getExRatesFailure = error => ({
    type: GET_EXRATES_FAILURE,
    payload: {
      error
    }
})