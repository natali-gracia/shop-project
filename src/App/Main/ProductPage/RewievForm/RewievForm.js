import React from 'react'

import './rewievform.css'

import RewievRatingStars from './../RewievRatingStars'

const RewievForm = () => {
    return (
        <form className='form rewiev-form'>
            <h3 className='section-title' style={{textAlign: "left"}}>Write a review</h3>
            <div className="col-md-4">
                <label>
                    <span>Your Name<em>*</em></span>
                    <input type="text" required/>
                </label>
                <label>
                    <span>Email Address<em>*</em></span>
                    <input type="email" required/>
                </label>
                <label className='rating-point'>
                    <span>Rating<em>*</em></span>
                    <RewievRatingStars/>
                </label>
                <label>
                    <span>Review Title</span>
                    <input type="text"/>
                </label>
            </div>
            <div className="col-md-7">
                <label>
                    <span>Body of Review (1500)</span>
                    <textarea className='textarea-form' maxLength='1500' name="text"></textarea>
                </label>
                <button type='submit'>Submit review</button>
            </div>
        </form>
    )
}

export default RewievForm
