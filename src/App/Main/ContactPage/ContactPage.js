import React from 'react'

import ContactForm from './ContactForm'

import './contactpage.css'

const ContactPage = () => {
    return (
        <div className="contact-page-content">
            <div className="wrap">
                <div className="col-md-4 contact-info-col">
                    <img src="https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/contact-icons%2Fmob-phone.png?alt=media&token=958b553e-4f75-452c-8eb3-986c73e3ab19" alt="PHONE"/>
                    <h2 className='section-title'>PHONE</h2>
                    <span>Phone: +38(050) 255 95 95</span>
                </div>
                <div className="col-md-4 contact-info-col">
                    <img src="https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/contact-icons%2Flocation.png?alt=media&token=88b7d010-003b-4ca4-8d0a-abb5f9212d81" alt="ADDRESS"/>
                    <h2 className='section-title'>ADDRESS</h2>
                    <span>02055 Khreshchatyk str.Kyiv, Ukraine</span>
                </div>
                <div className="col-md-4 contact-info-col">
                    <img src="https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/contact-icons%2Fletter.png?alt=media&token=7c1c9179-6e88-4ac3-8bf4-97b68ed608c0" alt="EMAIL"/>
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
