import React from 'react'

import './productssection.css'

const RadioButtonFilter = ({
    selectedFilter,
    setSelectedFilter
}) => {
    return (
        <h2 className='section-title'>
            <label className={selectedFilter === 'Best Seller' ? 'checked' : ''}>
                <input type="radio" name="RadioButtons" value="Best Seller"  onChange={event => setSelectedFilter(event.target.value)}/>Best Seller
            </label>
            <em> • </em>
            <label className={selectedFilter === 'New Arrival' ? 'checked' : ''}>
                <input type="radio" name="RadioButtons" value="New Arrival" onChange={event => setSelectedFilter(event.target.value)}/>New Arrival
            </label>
            <em> • </em>
            <label className={selectedFilter === 'Most Wanted' ? 'checked' : ''}>
				<input type="radio" name="RadioButtons" value="Most Wanted" onChange={event => setSelectedFilter(event.target.value)}/>Most Wanted
			</label>
        </h2>
    )
}

export default RadioButtonFilter
