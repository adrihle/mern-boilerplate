import React from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'

//importing components
import { InputField, SubmitButton } from '../form/components'
import Form from '../form/form'

export default function SignIn({schema, action, history}) {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.signIn.loading)
    const onSubmit = data => {
        dispatch(action(data))
    }
    return (
            <Form onSubmit={onSubmit} schema={schema}>
                <InputField label='Email' name='email' />
                <InputField label='Password' name='pass' type='password'/>
                <SubmitButton text='Sign In' loading={loading}/>
            </Form>
    )
}