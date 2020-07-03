import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterSelectReducer from './filterSelectReducer'
import filterProductsReducer from './filterProductsReducer'
import productQuickViewReducer from './productQuickViewReducer'
import paginationReducer from './paginationReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    selectedFilter: filterSelectReducer,
    filterProducts: filterProductsReducer,
    quickView: productQuickViewReducer,
    pager:paginationReducer,
})

export default rootReducer