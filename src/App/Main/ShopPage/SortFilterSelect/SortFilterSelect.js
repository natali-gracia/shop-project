import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'

import './sortfilterselect.css'

const options = [
    { value: 'created-descending', label: 'Newest' },
    { value: 'best-selling', label: 'Best selling'},
    { value: 'price-descending', label: 'Price: High to Low' },
    { value: 'price-ascending', label: 'Price: Low to High' },
  ];

const SortFilterSelect = ({
    selectedFilter = { value: 'created-descending', label: 'Newest' },
    handleChange,
}) => {
    return (
        <label className='sort-filters wrap'>
            <div className='sort-filters-title'><span>Sort&nbsp;by:</span></div>
            <div style={{width: 200}}>
                <Select
                    value={selectedFilter}
                    onChange={handleChange}
                    options={options}
                />
            </div> 
        </label>
    )
}

const mapStateToProps = state => ({
    selectedFilter:  state.selectedFilter.value
})

const mapDispatchToProps = dispatch => ({
    handleChange: event => dispatch({ 
        type: "CHANGE_SORT_FILTER", 
        value: event
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SortFilterSelect)
