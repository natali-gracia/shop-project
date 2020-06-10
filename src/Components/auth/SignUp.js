import React from 'react'

import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <form className='form'>
                <h2 className='section-title' style={{textAlign: "left"}}>Create an account</h2>
                <label>
                    <span>First Name</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Last Name</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Your Email Address<em>*</em></span>
                    <input type="email"/>
                </label>
                <label>
                    <span>Your Password<em>*</em></span>
                    <input type="password"/>
                </label>
                <button type='submit'>Create an account</button>
                <div className="action-link">
                    <p>
                        Already have an account? <Link to='/account/login' style={{fontStyle: 'italic'}}>Log in</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
