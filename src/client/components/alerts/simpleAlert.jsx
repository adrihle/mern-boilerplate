import React, { useState } from 'react'

//redux
import { useDispatch } from 'react-redux'

//styles dependencies
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'

//import components
import { SubmitButton } from '../form/components'

export default function ({ message, action }) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        dispatch(action())
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{message.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message.content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <SubmitButton text='Ok' onClick={handleClose} autoFocus/>
            </DialogActions>
        </Dialog>
    )
}