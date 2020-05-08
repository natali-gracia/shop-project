import React, {useState} from 'react'

import './rewievratingstars.css'

const RewievRatingStars = ({
    ratingAnable = true,
}) => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)


    return (
        <div className="review-rating wrap">
            { ratingAnable ?
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return (
                        <label className='star'>
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
                        <label className='star disable-star'>
                            <img 
                                src={ratingValue <= rating ?
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
