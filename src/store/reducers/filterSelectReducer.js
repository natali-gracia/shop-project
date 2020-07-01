const initState = { filteredItems: [], sort: { value: 'created-descending', label: 'Newest' } }

const filterSelectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_SORT_FILTER':
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
