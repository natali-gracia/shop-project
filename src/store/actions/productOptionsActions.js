import { 
    SELECT_COLOR,
    SELECT_SIZE
} from "./types"

export const selectProductColor = (items, id, value) => (dispatch) => {

    const selectedColorItems = (items === undefined ? {[id]: value} 
        : {
            ...items,
            [id]: value
        })
    dispatch({ type: SELECT_COLOR, payload: { selectedColorItems } })
}

export const selectProductSize = (items, id, value) => (dispatch) => {

    const selectedSizeItems = (items === undefined ? {[id]: value} 
        : {
            ...items,
            [id]: value
        })
    dispatch({ type: SELECT_SIZE, payload: { selectedSizeItems } })
}