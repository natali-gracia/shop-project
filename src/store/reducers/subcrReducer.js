import {
    FETCH_ADDRESS,
    // ADD_ADDRESS,
} from "../actions/types"

const initState = {
    fetchAddresses: []
}

const subscrReducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_ADDRESS:
            return {
                ...state,
                fetchAddresses: action.payload,
            }
        // case ADD_ADDRESS:
        //     return {
        //         ...state,
        //         filteredItems: action.payload.items,
        //         size: action.payload.size,
        //     }
        default:
            return state
        }
    }

export default subscrReducer