import React, { useState } from 'react'

import Axios from 'axios'

import './subscrform.css'

const SubscrForm = () => {

    const [address, setAddress] = useState('')
    const [isAddressSave, setIsAddressSave] = useState(false)

    const sendAddress = (e) => {
        e.preventDefault();
        Axios.post('https://shop-project-skillup.firebaseio.com/subscr.json', {
            address,
            date: new Date()
            })
            .then(res => res.data)
            .then(() => {
                setAddress('')
                setIsAddressSave(true)
            })
    }

    return (
        <div className='subscr-form'> 
            {isAddressSave !== true ?        
                <form onSubmit={sendAddress} className='subscr-input'>
                    <input 
                        type="email" 
                        placeholder='Enter Your Email...' 
                        className='input-field'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <button type='submit' className='input-btn' >Subscribe</button>
                </form>
            :   <div className='subscr-confirm'>Thank you for your subscription!</div>  
            }
        </div>
    )
}

export default SubscrForm
