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
                                src={ratingValue <= (hover || rating) 
                                    ? "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/star-black.png?alt=media&token=b96a8e23-9b43-4d0b-b46a-3b7769ba3703" 
                                    : "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/star-grey.png?alt=media&token=b12c3078-dfd6-4a17-86f8-e0d4e8d7dda6"
                                }
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
                                src={ratingValue <= ratingSum 
                                    ? "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/star-black.png?alt=media&token=b96a8e23-9b43-4d0b-b46a-3b7769ba3703" 
                                    : "https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/star-grey.png?alt=media&token=b12c3078-dfd6-4a17-86f8-e0d4e8d7dda6"
                                }
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
