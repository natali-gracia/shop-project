import React from 'react'

import './aboutpage.css'

const AboutPage = () => {
    return (
        <>
            <div className="page-text-content">
                <h2 className='section-title'>Welcome to the Honcharova Workshop</h2>
                <span>
                    <br/><span className="bold-text-section">Honcharova Workshop is an independent label created by Oksana Honcharova in 2005 and has gained a reputation for creating a unique collection of handmade leather handbags and accessories.</span>
                    <br/><br/>Since 2005, Honcharova Workshop has gone from strength to strength and is now an established handbag brand with a worldwide, loyal customer base.
                    <br/>We're passionate about our products and are committed to creating beautiful pieces that our customers enjoy carrying.We're very proud of our shop reviews and excellent customer service.  We're always happy to answer any questions you may have about our products.  You can email us at <span className="email-row">bespoke@honcharova.com</span> or call us on +38(050) 255 95 95.
                    <br/>If you would like to receive updates on our new projects and any special offers we're running, you can follow us on Social Media or sign up to our newsletters by following the links below.
                    <br/>We hope you enjoy browsing our items as much as we enjoy creating them.
                </span>
            </div>
            <div className="about-page-images wrap space-between">
                <div className="col-md-4"><img src="https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/about%2Fabout_1.jpg?alt=media&token=a9d030e8-2bc4-4003-b117-2c6004bb84fb" alt="Honcharova Workshop 01"/></div>
                <div className="col-md-4"><img src="https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/about%2Fabout_2.jpg?alt=media&token=e176de08-b1e8-4976-ab82-98871ad82600" alt="Honcharova Workshop 02"/></div>
                <div className="col-md-4"><img src="https://firebasestorage.googleapis.com/v0/b/workshop-project-react.appspot.com/o/about%2Fabout_3.jpg?alt=media&token=de27333b-ae87-48eb-a877-0b4ccf9848c8" alt="Honcharova Workshop 03"/></div>
            </div>   
        </>
    )
}

export default AboutPage
