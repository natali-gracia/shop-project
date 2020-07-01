import React from 'react'

import './sidebar.css'

const SidebarFilterBlock = ({
    pageOfItems
}) => {
    
    const colorOptionArray = pageOfItems.map(product=>product.options).flat().filter(option=>option.name === 'color')
    const colorValueArray = [...new Set([...colorOptionArray.map((color)=>color.value).flat()])]
    const sizeOptionArray = pageOfItems.map(product=>product.options).flat().filter(option=>option.name === 'size')
    const sizeValueArray = [...new Set([...sizeOptionArray.map((size)=>size.value).flat()])]
    const materialValueArray = [...new Set([...pageOfItems.map((product)=>product.material).flat()])]
    
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
                {sizeValueArray.includes('s') ? 
                    <li><label className=''>
                        s
                        <input 
                            type='checkbox'
                            value={'s'}
                            name="CheckboxFilter"
                        />
                    </label></li> : null}
                {sizeValueArray.includes('m') ? 
                    <li><label className=''>
                        m
                        <input 
                            type='checkbox'
                            value={'m'}
                            name="CheckboxFilter"
                        />
                    </label></li> : null}
                {sizeValueArray.includes('l') ? 
                    <li><label className=''>
                        l
                        <input 
                            type='checkbox'
                            value={'l'}
                            name="CheckboxFilter"
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
