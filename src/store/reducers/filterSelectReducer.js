import { SORT_FILTER } from "./../actions/types"

const initState = { filteredItems: [], sort: { value: 'created-descending', label: 'Newest' } }

const filterSelectReducer = (state = initState, action) => {
    switch(action.type) {
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

export default filterSelectReducer
