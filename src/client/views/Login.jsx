import React from 'react'

//importing components
import SignIn from '../components/login/signIn'
import SignUp from '../components/login/signUp'
import Tabs from '../components/navigation/tabs'
import Alert from '../components/alerts/simpleAlert'

//redux dependencies
import { useSelector } from 'react-redux'
import { signInRequest } from '../../redux/actions/sign-in'
import { uploadUserRequest, uploadUserReset } from '../../redux/actions/upload-user'

//styles dependencies
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../themes/defaultTheme'

////validation schema
import { signIn, signUp } from '../yup'

export default function (props){
    const state = useSelector(state => state.newUser)

    return (
        <ThemeProvider theme={theme}>
            {state.error && <Alert message={state.errorMessage} action={uploadUserReset}/>}
            <Tabs>
                <SignIn label='Sign In' schema={signIn} action={signInRequest} history={props.history}/>
                <SignUp label='Sign Up' schema={signUp} action={uploadUserRequest}/>
            </Tabs>
        </ThemeProvider>
    )
}