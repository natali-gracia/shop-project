const currencySelectReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CHANGE_CURRENCY':
            return {
                ...state, value: action.value
            }
        default:
            return state
        }
    }

export default currencySelectReducer
