import {
    GET_WISHLIST_ITEMS, 
    ADD_TO_WISHLIST, 
    REMOVE_FROM_WISHLIST
} from "../actions/types"

const wishListReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_WISHLIST_ITEMS:
            return {
                ...state,
                items: action.payload.wishListItems
            }        
        case ADD_TO_WISHLIST:
            return {
                ...state,
                items: action.payload.wishListItems
            }
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                items: action.payload.wishListItems
            }
        default:
            return state
        }
    }

export default wishListReducer