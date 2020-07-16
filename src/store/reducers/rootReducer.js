import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterSelectReducer from './filterSelectReducer'
import filterProductsReducer from './filterProductsReducer'
import productQuickViewReducer from './productQuickViewReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    selectedFilter: filterSelectReducer,
    filterProducts: filterProductsReducer,
    quickView: productQuickViewReducer,
})

export default rootReducer