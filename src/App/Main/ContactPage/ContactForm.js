import React, { useState } from 'react'

import Axios from 'axios'

import './contactpage.css'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [isFeedBackSave, setIsFeedBackSave] = useState(false)

    const sendFeedBack = (e) => {
        e.preventDefault();
        Axios.post('https://workshop-project-react.firebaseio.com/contactForm.json', {
            name,
            phone,
            email,
            comment
            })
            .then(res => res.data)
            .then(() => {
                setName('')
                setPhone('')
                setEmail('')
                setComment('')
                setIsFeedBackSave(true)
            })
    }

    return (
        <>
            {isFeedBackSave !== true ?   
            <form onSubmit={sendFeedBack} className="form contact-form">
                <h2 className='section-title'>IF YOU GOT ANY QUESTIONS<br/>PLEASE DO NOT HESITATE TO SEND US A MESSAGE</h2>
                <input 
                    type="text" 
                    placeholder='Your Name' 
                    className='input-field'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="tel" 
                    placeholder='Your Phone' 
                    className='input-field'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder='Your Email' 
                    className='input-field'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea 
                    rows='10'
                    placeholder='Comment' 
                    className='input-field'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <div className="wrap center">
                    <button type='submit' className='input-btn' >Send a message</button>
                </div>
            </form>
            :   <div className='feedback-confirm wrap'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/check-mark-green.png?alt=media&token=273bb88b-dce8-4d1c-bba7-24ca87f204f4" alt="check-mark-green"/>
                    <p>Thanks for contacting us! We'll get back to you as soon as possible.</p>
                </div>  
            }
        </>
    )
}

export default ContactForm
