import React from 'react'

import { Menu, MenuItem } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { signInReset } from '../../../redux/actions/sign-in-action'

import { Link } from 'react-router-dom'

export default function ({ options, anchor, onClose }) {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(signInReset())
        onClose()
    }
    return (
        <Menu
            keepMounted
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={onClose}
        >
            {options &&
                options.map((option, i) => (
                    option.logout ?
                        <MenuItem
                            to={option.route} 
                            key={i}
                            component={Link} 
                            onClick={onClick}
                        >
                            {option.title}
                        </MenuItem>
                        :
                        <MenuItem to={option.route} key={i} component={Link}>{option.title}</MenuItem>
                ))
            }
        </Menu>
    )
}