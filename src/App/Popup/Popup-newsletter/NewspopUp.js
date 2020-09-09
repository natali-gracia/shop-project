import React, { useState, useEffect } from 'react'

import './newsPopup.css'

import SubscrForm from '../../Main/MainContent/SubscrFormSection/SubscrForm'

const NewsPopup = () => {

    const [showNewsPopup, setShowNewsPopup] = useState((JSON.parse(localStorage.getItem('showNewsPopup'))) || 'show')

    useEffect(() => {
        localStorage.setItem('showNewsPopup', JSON.stringify(showNewsPopup));
    }, [showNewsPopup])

    return (
        <div className={showNewsPopup === 'show' ? 'wapper-popup' : 'wapper-popup hidden-popup'}>
            <div className="popup-newsletter">
                <div className="popup-overlay"></div>
                <div className="popup-row">
                    <div className="newsletter-content">
                        <h1 className='title'>NEWSLETTER</h1>
                        <p className='sub-title'>
                            Subscribe to our Workshop mailing list to receive
                            <br/>updates on new arrivals, special offers and
                            <br/>other discount information
                        </p>
                        <SubscrForm/>
                        <div className="btn-close">
                            <button 
                                className="btn-square"
                                onClick={() => setShowNewsPopup('hidden')}
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPopup
