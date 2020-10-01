import { 
    SELECT_COLOR,
    SELECT_SIZE
} from "../actions/types"

const initState = { 
    selectedColor: {}, 
    selectedSize: {}
}

const productOptionsReducer = (state = initState, action) => {
    switch(action.type) {
        case SELECT_COLOR:
            return {
                ...state,
                selectedColor: action.payload.selectedColorItems
            }
        case SELECT_SIZE:
            return {
                ...state,
                selectedSize: action.payload.selectedSizeItems
            }
        default:
            return state
        }
    }

export default productOptionsReducer