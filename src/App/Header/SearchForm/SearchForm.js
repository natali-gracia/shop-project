import React, { Component } from 'react'

import './searchform.css'

class SearchForm extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <form action='' method='' className='search-form'>
                    <input type="text" className='search-input-field' placeholder='Search' value={this.state.value} onChange={this.handleChange} autoComplete="off"/>
                    <span className='search-input-btn'>
                        <input type="submit" value='Search' className='btn'/>
                    </span>
                </form>   
            </div>
        )
    }
}

export default SearchForm
