import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'

import './currencyselect.css'

const options = [
    { value: 'hryvnia', label: 'UAH' },
    { value: 'euro', label: 'EUR' },
  ];

const CurrencySelect =({
    selectedOption = {value: 'hryvnia', label: 'UAH'},
    handleChange
}) => {

        console.log(`Option selected:`, selectedOption)

        return (
            <div style={{width: 150}}>
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                />
            </div>
        )
}

const mapStateToProps = ({value}) => ({
    selectedOption:value,
})

const mapDispatchToProps = dispatch => ({
    handleChange: event => dispatch({ 
        type: "CHANGE_CURRENCY", 
        value: event 
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CurrencySelect)
