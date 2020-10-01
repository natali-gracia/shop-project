import React from 'react'
import {connect} from 'react-redux'

import productsData, {getProductsMap} from './../Products/productsData'

import { selectProductColor, selectProductSize } from './../../../store/actions/productOptionsActions'

const productsArray = getProductsMap(productsData)

const ProductOptions = ({
    id = 1,
    selectedColor,
    selectedSize = 's',
    selectProductColor,
    selectProductSize
}) => {

    return (
        <div className="product-options">
            {productsArray[id].options.map(option => (
                option.value.length > 1 ?
                <div key={option.name}> 
                    <div className="product-options-name">{option.name}</div>
                    <div className="wrap">
                        {option.name === 'color' ?
                            option.value.map(value => (
                                <label key={value} className={selectedColor[id] === undefined ? 
                                    option.value[0] === value ? 'product-options-color checked-color' : 'product-options-color' 
                                    : selectedColor[id] === value ? 'product-options-color checked-color' : 'product-options-color'}
                                >
                                    <em style={value === '#fff' ? 
                                        {backgroundColor: value, borderStyle: 'solid', borderWidth: '0.4px', borderColor: '#999'} 
                                        : {backgroundColor: value}}>    
                                    </em>
                                    <input 
                                        type='radio'
                                        value={value}
                                        name={option.name}
                                        onChange={(e) => selectProductColor(selectedColor, id, e.target.value)}
                                    />
                                </label>
                        )) : option.value.map(value => (
                            <label key={value} className={selectedSize[id] === undefined ? 
                                option.value[0] === value ? 'product-options-item checked' : 'product-options-item' 
                                : selectedSize[id] === value ? 'product-options-item checked' : 'product-options-item'}>
                                {value}
                                <input 
                                    type='radio'
                                    value={value}
                                    name={option.name}
                                    onChange={(e) => selectProductSize(selectedColor, id, e.target.value)}
                                />
                            </label>
                        ))}
                    </div>
                </div> : null
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    selectedColor: state.selectedOption.selectedColor,
    selectedSize: state.selectedOption.selectedSize,
})

export default connect ( 
    mapStateToProps, 
    { selectProductColor, selectProductSize } 
) (ProductOptions)