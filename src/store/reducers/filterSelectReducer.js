const filterSelectReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CHANGE_SORT_FILTER':
            return {
                value: action.value
            }
        default:
            return state
        }
    }

export default filterSelectReducer
