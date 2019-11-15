import React, { useState } from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'

//importing components
import Form from '../form/form'
import { InputField, SubmitButton, UserAvatar } from '../form/components'

export default function ({ schema, action }) {
    const state = useSelector(state => state.newUser)
    const [photo, setPhoto] = useState(state.user.url)
    const [image, setImage] = useState(null)

    const onChange = e => {
        const files = Array.from(e.target.files)
        const formData = new FormData()
        files.forEach((file, i) => { formData.append(i, file) })
        setImage(formData)
        setPhoto(URL.createObjectURL(e.target.files[0]))
    }

    const dispatch = useDispatch()

    const onSubmit = data => {
        data.image = image
        dispatch(action(data))
    }

    return (
        <Form onSubmit={onSubmit} schema={schema}>
            <UserAvatar upload alt='avatar' url={photo} onChange={onChange} />
            <InputField label='Username' name='username' />
            <InputField label='Email' name='email' />
            <InputField label='Password' name='pass' type='password' />
            <InputField label='Repeat Password' name='rptpass' type='password' />
            <SubmitButton text='Sign Up' loading={state.loading} />
        </Form>
    )
}