import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Typography as Text, IconButton, useScrollTrigger, Slide, CircularProgress } from '@material-ui/core'
import { UserAvatar } from '../form/components'
import Menu from '../menus/simple'

import { Bounce } from 'react-reveal'

import { login } from '../../../Routes'

import { useSelector } from 'react-redux'

import { navbarMenu } from '../../options/menus'

export default function () {
    const stateIn = useSelector(state => state.signIn)
    const stateUp = useSelector(state => state.signUp)
    const [anchor, setAnchor] = useState(null)

    const openMenu = event => setAnchor(event.currentTarget)
    const closeMenu = () => setAnchor(null)
    return (
        <Slide appear={false} direction='down' in={!useScrollTrigger()}>
            <AppBar position='sticky' id='navbar'>
                <Toolbar id='navbar-content'>
                    <Text variant='h5' color='textPrimary'>NavBar</Text>
                    {(stateUp.success || stateIn.success) ?
                        <Bounce top >
                            <UserAvatar
                                id='avatar-navbar'
                                navbar
                                alt='Menu'
                                onClick={openMenu}
                                url={stateIn.success ? stateIn.user.userData.url : stateUp.user.url}
                            />
                        </Bounce>
                        :
                        <IconButton to={login} component={Link}>
                            {(stateUp.loading || stateIn.loading) ?
                                <CircularProgress size={32} color='secondary' />
                                :
                                <i className='fas fa-sign-in-alt' />
                            }
                        </IconButton>
                    }
                </Toolbar>
                {anchor && <Menu anchor={anchor} options={navbarMenu} onClose={closeMenu}/>}
            </AppBar>
        </Slide>
    )
}