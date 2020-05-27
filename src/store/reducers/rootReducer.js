import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import productQuickViewReducer from './productQuickViewReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    quickView: productQuickViewReducer,
})

export default rootReducer