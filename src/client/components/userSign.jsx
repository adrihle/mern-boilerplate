//basic dependencies
import React from 'react'
import { useSelector } from 'react-redux'

//components imports
import Chooser from './signChooser'
import SignIn from './SignIn'
import SignUp from './SignUp'


export default function Form(props) {
    const sign = useSelector(state => state.signMode)

    return (
        <div className='mt-3'>
            <Chooser />
            {sign ?
                <SignIn history={props.history} />
                :
                <SignUp history={props.history} />
            }
        </div>
    )
}