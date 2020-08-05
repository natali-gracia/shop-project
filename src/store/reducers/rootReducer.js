import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterProductsReducer from './filterProductsReducer'
import productQuickViewReducer from './productQuickViewReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    filterProducts: filterProductsReducer,
    quickView: productQuickViewReducer,
    cart: cartReducer
})

export default rootReducer