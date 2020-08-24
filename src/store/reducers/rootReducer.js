import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterProductsReducer from './filterProductsReducer'
import productQuickViewReducer from './productQuickViewReducer'
import cartReducer from './cartReducer'
import subscrReducer from './subcrReducer';

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    filterProducts: filterProductsReducer,
    quickView: productQuickViewReducer,
    cart: cartReducer,
    subscrAddresses: subscrReducer,
})

export default rootReducer