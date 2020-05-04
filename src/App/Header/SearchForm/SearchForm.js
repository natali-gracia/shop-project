import React, { useState } from 'react'

import './searchform.css'

const SearchForm = () => {

    const [value, setValue] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        alert('Search query: ' + value);
        setValue('')
    }

    return (
        <div>
            <form action='' method='' className='search-form' onSubmit={handleSubmit}>
                <input type="text" className='search-input-field' placeholder='Search' value={value} onChange={event => setValue(event.target.value)} autoComplete="off"/>
                <span className='search-input-btn'>
                    <input type="submit" value='Search' className='btn'/>
                </span>
            </form>   
        </div>
    )
}



export default SearchForm
