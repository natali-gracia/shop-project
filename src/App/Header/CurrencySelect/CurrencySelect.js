import React, { Component } from 'react'
import Select from 'react-select'

import './currencyselect.css'

const options = [
    { value: 'hryvnia', label: 'UAH' },
    { value: 'euro', label: 'EUR' },
  ];

export class CurrencySelect extends Component {
    state = {
        selectedOption: {
            value: 'hryvnia', label: 'UAH',
        },
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        return (
            <div style={{width: 150}}>
            <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={options}
            />
            </div>
        )
    }
}

export default CurrencySelect
