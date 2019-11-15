import React from 'react'
import { AppBar, Toolbar, Typography as Text, IconButton, useScrollTrigger, Slide } from '@material-ui/core'

export default function () {
    return (
        <Slide appear={false} direction='down' in={!useScrollTrigger()}>
            <AppBar position='sticky' id='navbar'>
                <Toolbar id='navbar-content'>
                    <Text variant='h5' color='textPrimary'>NavBar</Text>
                    <IconButton><i className='fas fa-sign-in-alt' /></IconButton>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}