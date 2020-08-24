import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAddresses } from './../../../../store/actions/subscrAction'

import Axios from 'axios'

import './subscrform.css'
import { SubscrList } from './SubscrList'

const SubscrForm = ({
    subscrAddresses,
    fetchAddresses
}) => {

    useEffect(() => {
        fetchAddresses()
        // eslint-disable-next-line
    }, [])

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
            {subscrAddresses.map(i => (
                <li key={i.id}>
                    <div>
                        <strong>{i.address}</strong>
                        <small>
                            {new Date().toLocaleDateString()}
                        </small>
                    </div>
                    <SubscrList subscrAddresses = {i.address}/>
                </li>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    subscrAddresses:  state.subscrAddresses.fetchAddresses,
})

export default connect(
    mapStateToProps, {fetchAddresses}
) (SubscrForm)

