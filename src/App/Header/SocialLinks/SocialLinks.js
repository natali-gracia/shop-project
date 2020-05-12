import React from 'react'

import './sociallinks.css'

const SocialLinks = () => {
    return (

            <div className="social-links wrap right">          
                <a href="/" className="fb-icon" title='Facebook'>
                    <button className="btn-square"></button>
                </a>
                <a href="/" className="twitter-icon" title='Twitter'>
                    <button className="btn-square"></button>
                </a>
                <a href="/" className="insta-icon" title='Instagram'>
                    <button className="btn-square"></button>
                </a>
                <a href="/" className="youtube-icon" title='Youtube'>
                    <button className="btn-square"></button>
                </a>
                <a href="/" className="pinterest-icon" title='Pinterest'>
                    <button className="btn-square"></button>
                </a>
            </div>
    )
}

export default SocialLinks
