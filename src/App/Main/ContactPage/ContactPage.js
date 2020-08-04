import React from 'react'

import ContactForm from './ContactForm'

import './contactpage.css'

const ContactPage = () => {
    return (
        <div className="contact-page-content">
            <div className="wrap">
                <div className="col-md-4 contact-info-col">
                    <img src="/images/contact/mob-phone.png" alt="PHONE"/>
                    <h2 className='section-title'>PHONE</h2>
                    <span>Phone: +38(050) 255 95 95</span>
                </div>
                <div className="col-md-4 contact-info-col">
                    <img src="/images/contact/location.png" alt="ADDRESS"/>
                    <h2 className='section-title'>ADDRESS</h2>
                    <span>02055 Khreshchatyk str.Kyiv, Ukraine</span>
                </div>
                <div className="col-md-4 contact-info-col">
                    <img src="/images/contact/letter.png" alt="EMAIL"/>
                    <h2 className='section-title'>EMAIL</h2>
                    <span>hello@honcharova.com</span>
                </div>
            </div>
            <div className="wrop center">
                <div className="col-md-6 contact-form-col">
                    <ContactForm/>
                </div> 
            </div>
        </div>
    )
}

export default ContactPage
