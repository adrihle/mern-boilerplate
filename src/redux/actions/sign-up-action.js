import {UPLOAD_USER_REQUEST, UPLOAD_USER_RESET} from '../constants'

export const signUpRequest = payload => ({
    type: UPLOAD_USER_REQUEST,
    payload
})

export const signUpReset = () => ({
    type: UPLOAD_USER_RESET
})

