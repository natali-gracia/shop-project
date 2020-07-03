import {
    FETCH_FILTER_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    FILTER_PRODUCTS_BY_COLOR,
    FILTER_PRODUCTS_BY_MATERIAL,
    SORT_FILTER
  } from "./types"

  export const fetchFilterProducts = (items) => (dispatch) => {
    dispatch({ 
        type: FETCH_FILTER_PRODUCTS, 
        payload: items })
  }

  export const filterProductsBySize = (items, size) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items:
          size === ""
            ? items
            : items.filter(
                product=>product.options.flat().filter(option=>option.name === 'size').map(size=>size.value).flat().indexOf(size) >= 0
            )
      }
    })
  }

  export const filterProductsByColor = (items, color) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_COLOR,
      payload: {
        color: color,
        items:
          color === ""
            ? items
            : items.filter(
                product=>product.options.flat().filter(option=>option.name === 'color').map(color=>color.value).flat().indexOf(color) >= 0
            )
      }
    })
  }
  
  export const filterProductsByMaterial = (items, material) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_MATERIAL,
      payload: {
        material: material,
        items:
            material === ""
            ? items
            : items.filter(
                product=>product.material.indexOf(material) >= 0
            )
      }
    })
  }

  export const sortProducts = (items, sort) => (dispatch) => {
    dispatch({
      type: SORT_FILTER,
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