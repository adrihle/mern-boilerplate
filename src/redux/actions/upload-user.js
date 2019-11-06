import {UPLOAD_USER_REQUEST, UPLOAD_USER_RESET} from '../constants'

export const uploadUserRequest = (payload) => ({
    type: UPLOAD_USER_REQUEST,
    payload
})

export const uploadUserReset = () => ({
    type: UPLOAD_USER_RESET
})

