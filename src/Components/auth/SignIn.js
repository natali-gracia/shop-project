import React from 'react'

import { Link } from 'react-router-dom'

import './authform.css'


const SignIn = () => {
    return (
        <div>
            <form className='form'>
                <h2 className='section-title' style={{textAlign: "left"}}>Log in</h2>
                <label>
                    <span>Email Address<em>*</em></span>
                    <input type="email"/>
                </label>
                <label>
                    <span>Password<em>*</em></span>
                    <input type="password"/>
                </label>
                <button type='submit'>Log in</button>
                <div className="action-link">
                    <p>
                        <Link to='#'>Forgot your password?</Link>
                        <span>or</span>
                        <Link to='/'>Return to Store</Link>
                    </p>
                </div>
            </form>
            <form className='form reset-pass-form'>
                <h2 className='section-title' style={{textAlign: "left"}}>Reset your password</h2>
                <p>We will send you an email to reset your password.</p>
                <label>
                    <span>Email Address</span>
                    <input type="email"/>
                </label>
                <button type='submit'>Submit</button>
                <div className="action-link">
                    <p>
                        <span>or</span>
                        <Link to='#'>Cancel</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignIn
