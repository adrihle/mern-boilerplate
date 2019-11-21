import React from 'react'

//styles dependencies
import { TextField, Button, IconButton, Avatar, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    avatar: {
        margin: 10
    },
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 150
    }
})

export const InputField = ({ register, errors, name, type, id, ...rest }) => (
    <TextField
        id={id ? id : 'textinput'}
        error={errors[name] ? true : false}
        helperText={errors[name] && errors[name].message}
        name={name}
        inputRef={register}
        type={type}
        {...rest}
    />
)

export const SubmitButton = ({ text, id, loading, ...rest }) => (
    <Button
        id={id ? id : 'button'}
        variant='contained'
        type='submit'
        color='primary'
        disabled={loading}
        {...rest}
    >
        {loading ? <CircularProgress size={32} /> : text}
    </Button>
)

export const UserAvatar = ({ alt, url, id, upload, navbar, onClick, onChange, ...rest }) => {
    const classes = useStyles()

    return (
        <IconButton component='label' id={id} onClick={onClick} aria-haspopup="true">
            {upload ?
                <input type='file' onChange={onChange} style={{ display: 'none' }} />
                :
                null
            }
            <Avatar
                className={navbar ? classes.avatar : classes.bigAvatar}
                alt={alt}
                src={url}
                {...rest}
            />
        </IconButton>
    )
}