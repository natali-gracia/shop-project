const paginationReducer = (state = {pager: ''}, action) => {
    switch(action.type) {    
        case 'CREATE_PAGER':
            return {
                pager: action.payload
            }
        default:
            return state
        }
    }

export default paginationReducer
