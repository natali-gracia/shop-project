import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterProductsReducer from './filterProductsReducer'
import productQuickViewReducer from './productQuickViewReducer'
import cartReducer from './cartReducer'
import exchangeRatesReducer from './exchangeRatesReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    filterProducts: filterProductsReducer,
    quickView: productQuickViewReducer,
    cart: cartReducer,
    exchangeRates: exchangeRatesReducer
})

export default rootReducer