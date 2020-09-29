import React from 'react'

import RewievRatingStars from './../RewievRatingStars'

import './rewievslist.css'

const RewievsList = ({
    rewievsArray
}) => {
    return (
        <>
        {rewievsArray.map((rewiev)=>(
            <div className="product-rewiev" key={rewiev.id}>
                <RewievRatingStars
                    ratingAnable = {false}
                    ratingSum = {rewiev.rating}
                />
                <h4>{rewiev.title}</h4>
                <span className='rewiev-author'>{rewiev.author}{' on '}{rewiev.date}</span>  
                <div>{rewiev.text}</div>
            </div>
        ))}
        </>
    )
}

export default RewievsList
