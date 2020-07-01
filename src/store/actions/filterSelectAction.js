export const sortProducts = (items, sort) => (dispatch) => {
    dispatch({
      type: 'CHANGE_SORT_FILTER',
      payload: {
        sort: sort,
        items: sort.value === "created-descending" ? items.sort((a, b) => b.id - a.id) :
            items.sort((a, b) =>
                sort.value === "price-descending" ? b.price - a.price : 
                sort.value === "price-ascending" ? a.price - b.price :
                b.sellerrank - a.sellerrank
            ) 
      }
    })
  }