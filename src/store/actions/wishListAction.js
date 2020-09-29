import { 
    ADD_TO_WISHLIST, 
    REMOVE_FROM_WISHLIST
} from "./types"
import {omit} from "lodash"

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
    const wishListItems = omit(items, id)
    localStorage.setItem("wishListItems", JSON.stringify(wishListItems))
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: { wishListItems } })
}