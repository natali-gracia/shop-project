import { combineReducers } from 'redux'
import currencySelectReducer from './currencySelectReducer'
import filterSelectReducer from './filterSelectReducer'
import productQuickViewReducer from './productQuickViewReducer'
import paginationReducer from './paginationReducer'

const rootReducer = combineReducers ({
    selectedCurrency: currencySelectReducer,
    selectedFilter: filterSelectReducer,
    quickView: productQuickViewReducer,
    pager:paginationReducer,
})

export default rootReducer