import React from 'react'

import { AppBar, Toolbar, Typography as Text, IconButton, useScrollTrigger, Slide, CircularProgress } from '@material-ui/core'
import { UserAvatar } from '../form/components'

import { Bounce } from 'react-reveal'

import { useSelector } from 'react-redux'


export default function () {
    const stateIn = useSelector(state => state.signIn)
    const stateUp = useSelector(state => state.signUp)
    return (
        <Slide appear={false} direction='down' in={!useScrollTrigger()}>
            <AppBar position='sticky' id='navbar'>
                <Toolbar id='navbar-content'>
                    <Text variant='h5' color='textPrimary'>NavBar</Text>
                    {(stateUp.success || stateIn.success) ?
                        <Bounce top>
                            <UserAvatar
                                id='avatar-navbar'
                                navbar
                                alt='Menu'
                                url={stateIn.user ? stateIn.user.userData.url : stateUp.user.url}
                            />
                        </Bounce>
                        :
                        <IconButton>
                            {(stateUp.loading || stateIn.loading) ?
                                <CircularProgress size={32} color='secondary' />
                                :
                                <i className='fas fa-sign-in-alt' />
                            }
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
        </Slide>
    )
}