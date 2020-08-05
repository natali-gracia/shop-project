import { 
    ADD_TO_CART, 
    CHANGE_PRODUCT_QUANTITY,
    REMOVE_FROM_CART 
} from "./types"
import {omit} from "lodash"

export const addToCart = (items, id, quantity) => (dispatch) => {

    const cartItems = (items === undefined ? {[id]: quantity} 
        : {
            ...items,
            [id]:(items[id]|| 0) + quantity
        })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    dispatch({ type: ADD_TO_CART, payload: { cartItems } })
}

export const changeProductQuantity = (items, id, quantity) => (dispatch) => {
    const cartItems = {
        ...items,
        [id]: quantity
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    dispatch({ type: CHANGE_PRODUCT_QUANTITY, payload: { cartItems } })
  }

export const removeFromCart = (items, id) => (dispatch) => {
  const cartItems = omit(items, id)
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } })
}