import React from 'react'
import { TextField, Button } from '@material-ui/core'

export const InputField = ({ register, errors, name, id, ...rest}) => (
    <TextField
        id={id ? id : 'textinput'}
        error={errors[name] ? true : false}
        helperText={errors[name] && errors[name].message}
        name={name}
        inputRef={register}
        type={name.includes('pass') ? 'password' : ''}
        {...rest}
    />
)

export const SubmitButton = ({text, id, ...rest}) => (
    <Button
        id={id ? id : 'button'}
        variant='contained'
        type='submit'
        color='primary'
        {...rest}
    >
        {text}
    </Button>
)