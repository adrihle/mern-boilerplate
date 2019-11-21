import React, { useEffect } from 'react'

//importing components
import SignIn from '../components/login/signIn'
import SignUp from '../components/login/signUp'
import Tabs from '../components/navigation/tabs'
import Alert from '../components/alerts/simpleAlert'

//redux dependencies
import { useSelector } from 'react-redux'
import { signInRequest, signInReset } from '../../redux/actions/sign-in-action'
import { signUpRequest, signUpReset } from '../../redux/actions/sign-up-action'

//styles dependencies
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../themes/defaultTheme'

import { home } from '../../Routes'

////validation schema
import { signIn, signUp } from '../yup'

export default function (props) {
    const state = useSelector(state => state)

    useEffect(() => {
        if (state.signIn.success || state.signUp.success){
            props.history.push(home)
        }
    })

    return (
        <ThemeProvider theme={theme}>
            {(state.signUp.error || state.signIn.error) &&
                <Alert
                    action={state.signUp.error ? signUpReset : signInReset}
                    message={state.signUp.message ?
                        state.signUp.message : state.signIn.message
                    }
                />
            }
            <Tabs>
                <SignIn label='Sign In' schema={signIn} action={signInRequest} />
                <SignUp label='Sign Up' schema={signUp} action={signUpRequest} />
            </Tabs>
        </ThemeProvider>
    )
}