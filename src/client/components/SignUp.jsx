import React, { useState } from 'react'

//redux dependencies
import { useDispatch } from 'react-redux'
import {uploadUserRequest} from '../../redux/actions/upload-user'

//styles dependencies
import { Button, TextField } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import defaultTheme from '../themes/defaultTheme'

//pose animations
import { ChildContainer, ListElement } from '../pose/defaultPose'

//components functions
import { jsonStateAssign } from '../fns/setState'

export default function SignIn(props) {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        username: '',
        pass: '',
        userData: '',
        userData2: {
            data1: '',
            data2: ''
        }
    })

    const onChange = input => event => {
        jsonStateAssign(input, event, user, setUser)
    }

    const onSubmit = event => {
        event.preventDefault()
        dispatch(uploadUserRequest(user))
        props.history.push('/greetins')
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <form onSubmit={onSubmit}>
                <ChildContainer>
                    <ListElement id='textField'>
                        <TextField
                            label='Username'
                            value={user.usermame}
                            onChange={onChange('username')}
                        />
                    </ListElement>
                    <ListElement id='textField'>
                        <TextField
                            type='password'
                            label='Password'
                            value={user.pass}
                            onChange={onChange('pass')}
                        />
                    </ListElement>
                    <ListElement id='textField'>
                        <Button
                            id='submitButton'
                            type='submit'
                            variant='contained'
                            color='primary'
                        >
                            Submit
                    </Button>
                    </ListElement>
                </ChildContainer>
            </form>
        </ThemeProvider>
    )
}