import React from 'react'

import productsData from './../../Products/productsData'

import './sidebar.css'

const colorOptionArray = productsData.map(product=>product.options).flat().filter(option=>option.name === 'color')
const colorValueArray = [...new Set([...colorOptionArray.map((color)=>color.value).flat()])]
const sizeOptionArray = productsData.map(product=>product.options).flat().filter(option=>option.name === 'size')
const sizeValueArray = [...new Set([...sizeOptionArray.map((size)=>size.value).flat()])]
const materialValueArray = [...new Set([...productsData.map((product)=>product.material).flat()])]


export const SidebarFilterBlock = () => {

    
    return (
        <div className="sidebar-filter-block">
            <div className="filter-title"><h2>Color</h2></div>
            <ul className="checkbox-filter-color wrap">
                {colorValueArray.map(value => (
                    <li key={value}>
                        <label className='' >
                            <em style={value === '#fff' ? 
                            {backgroundColor: value, borderStyle: 'solid', borderWidth: '0.4px', borderColor: '#999'} 
                            : {backgroundColor: value}}></em>
                            <input 
                                type='checkbox'
                                value={value}
                                name="CheckboxFilter"
                            />
                        </label>
                    </li>
                ))}
            </ul>
            <div className="filter-title"><h2>Size</h2></div>
            <ul className="checkbox-filter-size wrap">
                {sizeValueArray.map(value => (
                    <li key={value}>
                        <label className=''>
                            {value}
                            <input 
                                type='checkbox'
                                value={value}
                                name="CheckboxFilter"
                            />
                        </label>
                    </li>
                ))}
            </ul>
            <div className="filter-title"><h2>Material</h2></div>
            <ul className="checkbox-filter-material">
                {materialValueArray.map(value => (
                    <li key={value}>
                        <label className=''>
                            {value}
                            <input 
                                type='checkbox'
                                value={value}
                                name="CheckboxFilter"
                            />
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SidebarFilterBlock
