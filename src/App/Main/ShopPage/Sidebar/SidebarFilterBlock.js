import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import './sidebar.css'

import { 
    fetchFilterProducts, 
    filterProductsBySize, 
    filterProductsByColor, 
    filterProductsByMaterial, 
    filterProductsByDiscount 
} from "../../../../store/actions/filterProductsAction"


const SidebarFilterBlock = ({
    items,
    match,
    fetchFilterProducts,
    filterProductsBySize, 
    filterProductsByColor, 
    filterProductsByMaterial,
    filterProductsByDiscount,
    selectedSize,
    selectedColor,
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
    }, [match])

    const colorOptionArray = filteredItems.map(product=>product.options).flat().filter(option=>option.name === 'color')
    const colorValueArray = [...new Set([...colorOptionArray.map((color)=>color.value).flat()])]
    const sizeOptionArray = filteredItems.map(product=>product.options).flat().filter(option=>option.name === 'size')
    const sizeValueArray = [...new Set([...sizeOptionArray.map((size)=>size.value).flat()])]
    const materialValueArray = [...new Set([...filteredItems.map((product)=>product.material).flat()])]
    const discountValueArray = [...new Set([...filteredItems.map((product)=>product.discount_price).flat()])]
    
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
                        <label>
                            {value}
                            <input 
                                type='checkbox'
                                value={value}
                                name="RadioFilter"
                                onChange={()=> filterProductsByMaterial(filteredItems, value)}
                            />
                        </label>
                    </li>
                ))}
            </ul>
            <div className="filter-title"><h2>Price</h2></div>
            <ul className="checkbox-filter-material">
                {discountValueArray.includes(0) ? 
                    <li><label>
                        Full price
                        <input 
                            type='checkbox'
                            value={'Full price'}
                            name="RadioFilter"
                            onChange={()=> filterProductsByDiscount(filteredItems, 'Full price')}
                        />
                    </label></li> : null}
                {discountValueArray.some(value => value > 0) ? 
                    <li><label>
                        Discounted price
                        <input 
                            type='checkbox'
                            value={'Discounted price'}
                            name="RadioFilter"
                            onChange={()=> filterProductsByDiscount(filteredItems, 'Discounted price')}
                        />
                    </label></li> : null}
            </ul>
        </div>
    )
}


const mapStateToProps = state => ({
    selectedSize:  state.filterProducts.size,
    selectedColor:  state.filterProducts.color,
    filteredItems: state.filterProducts.filteredItems,
})

export default connect (
    mapStateToProps, 
    { fetchFilterProducts, filterProductsBySize, filterProductsByColor, filterProductsByMaterial, filterProductsByDiscount }
) (SidebarFilterBlock)

