import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterProductsReducer from './filterProductsReducer'
import productQuickViewReducer from './productQuickViewReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    filterProducts: filterProductsReducer,
    quickView: productQuickViewReducer,
})

export default rootReducer