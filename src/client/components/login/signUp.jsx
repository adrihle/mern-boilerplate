import React from 'react'

//redux
import { useDispatch } from 'react-redux'

//importing components
import Form from '../form/form'
import {InputField, SubmitButton} from '../form/components'

export default function ({schema, action}){
    const dispatch = useDispatch()
    const onSubmit = (data) => dispatch(action(data))

    return (
        <Form onSubmit={onSubmit} schema={schema}>
            <InputField label='Email' name='email'/>
            <InputField label='Password' name='pass'/>
            <InputField label='Repeat Password' name='rptpass'/>
            <SubmitButton text='Sign Up'/>
        </Form>
    )
}