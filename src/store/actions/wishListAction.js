import { 
    GET_WISHLIST_ITEMS,
    ADD_TO_WISHLIST, 
    REMOVE_FROM_WISHLIST
} from "./types"

export const getWishListItems = () => dispatch => {
    const wishListData = JSON.parse(localStorage.getItem('wishListItems'))
    const wishListItems = (wishListData === null ? {} : wishListData)
    dispatch({ type: GET_WISHLIST_ITEMS, payload: { wishListItems } })
}

export const addToWishList = (items, id) => (dispatch) => {
    const wishListItems = (items === null ? { [id]: true }
        : { 
            ...items, 
            [id]: true
        })
    localStorage.setItem("wishListItems", JSON.stringify(wishListItems))
    dispatch({ type: ADD_TO_WISHLIST, payload: { wishListItems } })
}

export const removeFromWishList = (items, id) => (dispatch) => {
    const wishListItems = { 
            ...items, 
            [id]: false
    }
  localStorage.setItem("wishListItems", JSON.stringify(wishListItems))
  dispatch({ type: REMOVE_FROM_WISHLIST, payload: { wishListItems } })
}