import React, {useState} from 'react'

import './rewievratingstars.css'

const RewievRatingStars = ({
    ratingAnable = true,
    ratingSum,
}) => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)


    return (
        <div className="review-rating wrap">
            { ratingAnable ?
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return (
                        <label className='star' key={ratingValue}>
                            <input 
                                type='radio' 
                                name='ratting' 
                                value={ratingValue}
                                onClick={()=>setRating(ratingValue)}
                            />
                            <img 
                                src={ratingValue <= (hover || rating) ?
                                "/images/star-black.png" : "/images/star-grey.png"}
                                alt="star" 
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}
                            /> 
                        </label> 
                    )
                }) :
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return (
                        <label className='star disable-star' key={ratingValue}>
                            <img 
                                src={ratingValue <= ratingSum ?
                                "/images/star-black.png" : "/images/star-grey.png"}
                                alt="star" 
                            /> 
                        </label> 
                    )
                })
            }
        </div>
    )
}

export default RewievRatingStars
