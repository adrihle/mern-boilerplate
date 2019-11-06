//basic dependencies
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

//styled dependencies
import { TextField, Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from '../themes/defaultTheme'

//pose animations
import { ChildContainer, ListElement } from '../pose/defaultPose'

//functions dependencies
import { jsonStateAssign } from '../fns/setState'

//actions dependencies
import uploadUser from '../../redux/actions/upload-user'

//routes
import { greetins } from '../../Routes'

//components imports
import Chooser from './signChooser'


export default function Form(props) {
    const dispatch = useDispatch()

    const inputFocus = useRef(null)

    const [sign, setSign] = useState(true)

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
        dispatch(uploadUser(user))
        inputFocus.current.focus()
        props.history.push(greetins)
    }

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <form onSubmit={onSubmit}>
                    <ChildContainer>
                        <ListElement className='mt-4 mb-3'>
                            <Chooser signIn={sign}/>
                        </ListElement>
                        <ListElement className='mt-4 mb-3'>
                            <TextField
                                ref={inputFocus}
                                label='Enter Username'
                                value={user.username}
                                onChange={onChange('username')}
                            />
                        </ListElement>
                        <ListElement>
                            <TextField
                                label='Enter Password'
                                type='password'
                                value={user.pass}
                                onChange={onChange('pass')}
                            />
                        </ListElement>
                        <ListElement>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                className='mt-5'
                            >
                                Submit
                            </Button>
                        </ListElement>
                    </ChildContainer>
                </form>
            </ThemeProvider>
        </div>
    )
}