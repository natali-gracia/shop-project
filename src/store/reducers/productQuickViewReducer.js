const initialState = {
    productId: undefined,
    showQuickView: false
}
const productQuickViewReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_QUICKVIEW':
            return {
                ...state, 
                showQuickView: !state.showQuickView,
                productId:action.id
            }
        default:
            return state
        }
    }

export default productQuickViewReducer