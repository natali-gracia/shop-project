import { 
    ADD_TO_CART, 
    CHANGE_PRODUCT_QUANTITY,
    REMOVE_FROM_CART 
} from "../actions/types"

const cartReducer = (state = {}, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: action.payload.cartItems
            }
        case CHANGE_PRODUCT_QUANTITY:
            return {
                ...state,
                items: action.payload.cartItems
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: action.payload.cartItems
            }
        default:
            return state
        }
    }

export default cartReducer