import React from 'react'

import SignIn from '../../../Components/auth/SignIn'
import SignUp from './../../../Components/auth/SignUp'

const AccountPage = ({
    match,
}) => {
        return (
            <div className='col-md-4'>
                {match.params.authOption === 'login' ? <SignIn/> : <SignUp/>}
            </div>
        )
}

export default AccountPage
