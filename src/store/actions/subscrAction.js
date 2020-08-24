import { 
    FETCH_ADDRESS,
    // ADD_ADDRESS,
} from "./types"
import axios from 'axios'

export const fetchAddresses = () => {
    return async dispatch => {
        const res = await axios.get('https://shop-project-skillup.firebaseio.com/subscr.json')
        const payload = Object.keys(res.data).map( key => {
            return {
                ...res.data[key],
                id: key
            }})
        dispatch({ type: FETCH_ADDRESS, payload })
}}

// const sendAddress = (e) => {
//     e.preventDefault();
//     Axios.get('https://shop-project-skillup.firebaseio.com/subscr.json')
//         .then(res => res.data)
//         .then(() => {
//             setAddress('')
//             setIsAddressSave(true)
//         })
// }

// export const changeProductQuantity = (items, id, quantity) => (dispatch) => {
//     const cartItems = {
//         ...items,
//         [id]: quantity
//     }
//     localStorage.setItem("cartItems", JSON.stringify(cartItems))
//     dispatch({ type: CHANGE_PRODUCT_QUANTITY, payload: { cartItems } })
//   }

// export const removeFromCart = (items, id) => (dispatch) => {
//   const cartItems = omit(items, id)
//   localStorage.setItem("cartItems", JSON.stringify(cartItems))
//   dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } })
// }