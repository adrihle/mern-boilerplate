import * as yup from 'yup'

export const signIn = yup.object().shape({
    email: yup.string().email().required(),
    pass: yup.string().required()
})

export const signUp = yup.object().shape({
    email: yup.string().email().required(),
    pass: yup.string().required(),
    rptpass: yup.string().oneOf([yup.ref('pass'), null], 'Passwords must match')
})