import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterProductsReducer from './filterProductsReducer'
import productQuickViewReducer from './productQuickViewReducer'
import cartReducer from './cartReducer'
import exchangeRatesReducer from './exchangeRatesReducer'
import wishListReducer from './wishListReducer'
import productOptionsReducer from './productOptionsReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    filterProducts: filterProductsReducer,
    quickView: productQuickViewReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    exchangeRates: exchangeRatesReducer,
    selectedOption: productOptionsReducer,
})

export default rootReducer