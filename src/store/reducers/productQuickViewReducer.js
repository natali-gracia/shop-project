const initialState = {
    productId: '',
    showQuickView: false
  }
const productQuickViewReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_QUICKVIEW':
            return {
                ...state, 
                showQuickView: !state.showQuickView
            }
        default:
            return state
        }
    }

export default productQuickViewReducer