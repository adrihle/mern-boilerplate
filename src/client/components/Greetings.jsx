import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signInReset } from '../../redux/actions/sign-in'
import { uploadUserReset } from '../../redux/actions/upload-user'

//styled dependencies
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import  defaultTheme  from '../themes/defaultTheme'

//pose animations
import { ChildContainer, ListElement } from '../pose/defaultPose'

const switchGreetins = (signIn, signUp) => {
    if (signIn.login){
        return <h2 className='text-white mt-4'>Welcome Back {signIn.user.username}</h2>
    }else if (signIn.message){
        return <h2 className='text-white mt-4'>{signIn.message}</h2>
    }else {
        return <h2 className='text-white mt-4'>Welcome {signUp.user.username}</h2>
    }
}

export default function Greetins(props) {
    const signUp = useSelector((state => state.newUser))
    const signIn = useSelector(state => state.signIn)
    const dispatch = useDispatch()

    const onClick = () => {
        props.history.goBack()
        dispatch(signInReset())
        dispatch(uploadUserReset())
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <ChildContainer>
                <ListElement>
                    {switchGreetins(signIn, signUp)}
                </ListElement>
                <ListElement>
                    <Button
                        onClick={onClick}
                        variant='contained'
                        color='primary'
                        className='mt-5'
                    >
                        Back
                    </Button>
                </ListElement>
            </ChildContainer>
        </ThemeProvider>
    )
}