import { SIGN_IN_REQUEST, SIGN_IN_RESET } from '../constants'

export const signInRequest = (payload) => ({
    type: SIGN_IN_REQUEST,
    payload
})

export const signInReset = () => ({
    type: SIGN_IN_RESET
})

