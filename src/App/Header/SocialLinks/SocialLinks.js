import React from 'react'

import './sociallinks.css'

const SocialLinks = () => {
    return (
        <div>
            <ul className="social-links wrap right">
                <li><a href="/" className='fb-icon' title='Facebook'></a></li>
                <li><a href="/" className='twitter-icon' title='Twitter'></a></li>
                <li><a href="/" className='insta-icon' title='Instagram'></a></li>
                <li><a href="/" className='youtube-icon' title='Youtube'></a></li>
                <li><a href="/" className='pinterest-icon' title='Pinterest'></a></li>
            </ul>
        </div>
    )
}

export default SocialLinks
