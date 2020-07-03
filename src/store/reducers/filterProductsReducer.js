import {
    FETCH_FILTER_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    FILTER_PRODUCTS_BY_COLOR,
    FILTER_PRODUCTS_BY_MATERIAL,
    SORT_FILTER
} from "../actions/types"

const initState = { filteredItems: [], size: '', color: '', material: '', sort: { value: 'created-descending', label: 'Newest' }}

const filterProductsReducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_FILTER_PRODUCTS:
            return {
                ...state,
                filteredItems: action.payload,
            }
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                filteredItems: action.payload.items,
                size: action.payload.size,
            }
        case FILTER_PRODUCTS_BY_COLOR:
            return {
                ...state,
                filteredItems: action.payload.items,
                color: action.payload.color,
            }
        case FILTER_PRODUCTS_BY_MATERIAL:
            return {
                ...state,
                filteredItems: action.payload.items,
                material: action.payload.material,
            }
        case SORT_FILTER:
            return {
                ...state,
                filteredItems: action.payload.items,
                sort: action.payload.sort,
            }
        default:
            return state
        }
    }

export default filterProductsReducer