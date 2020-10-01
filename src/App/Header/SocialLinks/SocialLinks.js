import React from 'react'
import { Link } from 'react-router-dom'

import './sociallinks.css'

const SocialLinks = () => {
    return (

            <div className="social-links wrap right">          
                <Link to="/about" className="fb-icon" title='Facebook'>
                    <button className="btn-square"></button>
                </Link>
                <Link to="/about" className="twitter-icon" title='Twitter'>
                    <button className="btn-square"></button>
                </Link>
                <Link to="/about" className="insta-icon" title='Instagram'>
                    <button className="btn-square"></button>
                </Link>
                <Link to="/about" className="youtube-icon" title='Youtube'>
                    <button className="btn-square"></button>
                </Link>
                <Link to="/about" className="pinterest-icon" title='Pinterest'>
                    <button className="btn-square"></button>
                </Link>
            </div>
    )
}

export default SocialLinks
