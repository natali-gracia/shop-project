import React, { useState } from 'react'

import Axios from 'axios'

import './subscrform.css'

const SubscrForm = () => {

    const [address, setAddress] = useState('')
    const [isAddressSave, setIsAddressSave] = useState(false)

    const sendAddress = (e) => {
        e.preventDefault();
        Axios.post('https://my-json-server.typicode.com/kznkv-skillup/server/orders', {
            address
            })
            .then(res => res.data)
            .then(() => {
                setAddress('')
                setIsAddressSave(true)
            })
    }

    return (
        <div className='subscr-form'>           
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
            {isAddressSave !== true ? null
            :   <div className='subscr-confirm'>Please, check your inbox to confirm your subscription...</div>  
            }
        </div>
    )
}

export default SubscrForm
