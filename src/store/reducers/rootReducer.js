import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterSelectReducer from './filterSelectReducer'
import productQuickViewReducer from './productQuickViewReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    selectedFilter: filterSelectReducer,
    quickView: productQuickViewReducer,
})

export default rootReducer