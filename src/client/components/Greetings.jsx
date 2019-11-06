import React from 'react'
import { useSelector } from 'react-redux'

//styled dependencies
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from '../themes/defaultTheme'

//pose animations
import { ChildContainer, ListElement } from '../pose/defaultPose'

export default function Greetins(props) {
    const user = useSelector((state => state.newUser.user))

    return (
        <ThemeProvider theme={defaultTheme}>
            <ChildContainer>
                <ListElement>
                    <h2 className='text-white mt-4'>Welcome {user.username} </h2>
                </ListElement>
                <ListElement>
                    <Button
                        onClick={() => props.history.goBack()}
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