import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux'

import './sidebar.css'

import { fetchFilterProducts, filterProductsBySize, filterProductsByColor, filterProductsByMaterial } from "../../../../store/actions/filterProductsAction"


const SidebarFilterBlock = ({
    items,
    match,
    fetchFilterProducts,
    filterProductsBySize, 
    filterProductsByColor, 
    filterProductsByMaterial,
    selectedSize,
    selectedColor,
    selectedMaterial,
    filteredItems
}) => {

    useEffect(() => {
        fetchFilterProducts(items)
        if (selectedColor !== '') {
            filterProductsByColor(items, '')
        }
        if (selectedSize !== '') {
            filterProductsBySize(items, '')
        }
        if (selectedMaterial !== '') {
            filterProductsByMaterial(items, '')
        }
    }, [match])

    const colorOptionArray = filteredItems.map(product=>product.options).flat().filter(option=>option.name === 'color')
    const colorValueArray = [...new Set([...colorOptionArray.map((color)=>color.value).flat()])]
    const sizeOptionArray = filteredItems.map(product=>product.options).flat().filter(option=>option.name === 'size')
    const sizeValueArray = [...new Set([...sizeOptionArray.map((size)=>size.value).flat()])]
    const materialValueArray = [...new Set([...filteredItems.map((product)=>product.material).flat()])]

    
    return (
        <div className="sidebar-filter-block">
            <div className="filter-title"><h2>Color</h2></div>
            <ul className="checkbox-filter-color wrap">
                {colorValueArray.map(value => (
                    <li key={value}>
                        <label className={selectedColor === value ? 'checked' : ''}>
                            <em style={value === '#fff' ? 
                            {backgroundColor: value, borderStyle: 'solid', borderWidth: '0.4px', borderColor: '#999'} 
                            : {backgroundColor: value}}></em>
                            <input 
                                type='radio'
                                value={value}
                                name="RadioFilter"
                                onChange={()=> filterProductsByColor(filteredItems, value)}
                            />
                        </label>
                    </li>
                ))}
            </ul>
            <div className="filter-title"><h2>Size</h2></div>
            <ul className="checkbox-filter-size wrap">
                {sizeValueArray.includes('s') ? 
                    <li><label className={selectedSize === 's' ? 'checked' : ''}>
                        s
                        <input 
                            type='radio'
                            value='s'
                            name="RadioFilter"
                            onChange={()=> filterProductsBySize(filteredItems, 's')}
                        />
                    </label></li> : null}
                {sizeValueArray.includes('m') ? 
                    <li><label className={selectedSize === 'm' ? 'checked' : ''}>
                        m
                        <input 
                            type='radio'
                            value={'m'}
                            name="RadioFilter"
                            onChange={()=> filterProductsBySize(filteredItems, 'm')}
                        />
                    </label></li> : null}
                {sizeValueArray.includes('l') ? 
                    <li><label className={selectedSize === 'l' ? 'checked' : ''}>
                        l
                        <input 
                            type='radio'
                            value={'l'}
                            name="RadioFilter"
                            onChange={()=> filterProductsBySize(filteredItems, 'l')}
                        />
                    </label></li> : null}
            </ul>
            <div className="filter-title"><h2>Material</h2></div>
            <ul className="checkbox-filter-material">
                {materialValueArray.map(value => (
                    <li key={value}>
                        <label className=''>
                            {value}
                            <input 
                                type='radio'
                                value={value}
                                name="RadioFilter"
                                onChange={()=> filterProductsByMaterial(filteredItems, value)}
                            />
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}


const mapStateToProps = state => ({
    selectedSize:  state.filterProducts.size,
    selectedColor:  state.filterProducts.color,
    selectedMaterial:  state.filterProducts.material,
    filteredItems: state.filterProducts.filteredItems,
})

export default connect (
    mapStateToProps, 
    { fetchFilterProducts, filterProductsBySize, filterProductsByColor, filterProductsByMaterial }
) (SidebarFilterBlock)



    // const prevItems = useRef(items).current 
    // useEffect(() => {
    //     let isCurrent = true
    //     if (isCurrent && items && items.length) {
    //         fetchFilterProducts(items)
    //     }
    //     if (isCurrent && prevItems.items !== items) { 
    //         filteredItems = items 
    //     }
    //     return () => {
    //       isCurrent = false
    //     }
    //   }, [items])
