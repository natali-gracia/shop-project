import {
    GET_EXRATES_SUCCESS,
    GET_EXRATES_FAILURE,
} from '../actions/types'
  
const initialState = {
    exchangeRates: 0,
    error: null
}

const exchangeRatesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_EXRATES_SUCCESS:
            return {
                ...state,
                error: null,
                exchangeRates: action.payload.exchangeRates
            }
        case GET_EXRATES_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
        }
    }

export default exchangeRatesReducer