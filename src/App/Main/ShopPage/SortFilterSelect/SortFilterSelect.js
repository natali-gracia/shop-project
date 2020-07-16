import React, { useEffect } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'

import './sortfilterselect.css'

import { sortProducts } from './../../../../store/actions/filterProductsAction'


const options = [
    { value: 'created-descending', label: 'Newest' },
    { value: 'best-selling', label: 'Best selling'},
    { value: 'price-descending', label: 'Price: High to Low' },
    { value: 'price-ascending', label: 'Price: Low to High' },
  ];

const SortFilterSelect = ({
    items,
    selectedFilter,
    sortProducts,
}) => {


    return (
        <label className='sort-filters wrap'>
            <div className='sort-filters-title'><span>Sort&nbsp;by:</span></div>
            <div style={{width: 200}}>
                <Select
                    value={selectedFilter}
                    onChange={value=> sortProducts(items, value)}
                    options={options}
                />
            </div> 
        </label>
    )
}

const mapStateToProps = state => ({
    selectedFilter:  state.filterProducts.sort,
})

export default connect (
    mapStateToProps, 
    { sortProducts }
) (SortFilterSelect)