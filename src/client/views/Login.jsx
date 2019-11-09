import React from 'react'

//importing components
import SignIn from '../components/login/signIn'
import SignUp from '../components/login/signUp'
import Tabs from '../components/navigation/tabs'

//redux dependencies
import { signInRequest } from '../../redux/actions/sign-in'
import { uploadUserRequest } from '../../redux/actions/upload-user'

//styles dependencies
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../themes/defaultTheme'

////validation schema
import { signIn, signUp } from '../yup'

export default function (){

    return (
        <ThemeProvider theme={theme}>
            <Tabs>
                <SignIn label='Sign In' schema={signIn} action={signInRequest}/>
                <SignUp label='Sign Up' schema={signUp} action={uploadUserRequest}/>
            </Tabs>
        </ThemeProvider>
    )
}