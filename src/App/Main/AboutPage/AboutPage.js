import React from 'react'

import './aboutpage.css'

const AboutPage = () => {
    return (
         
        <React.Fragment>
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
                <div className="col-md-4"><img src="/images/about/HW_01.jpg" alt="Honcharova Workshop 01"/></div>
                <div className="col-md-4"><img src="/images/about/HW_02.jpg" alt="Honcharova Workshop 02"/></div>
                <div className="col-md-4"><img src="/images/about/HW_03.jpg" alt="Honcharova Workshop 03"/></div>
            </div>   
        </React.Fragment>
    )
}

export default AboutPage
