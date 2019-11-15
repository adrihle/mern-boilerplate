import { MSG_EMAIL_EXIST, MSG_UPLOAD_ERROR, UPLOAD_USER_REQUEST, EMAIL_ALREADY_REGISTERED, USER_UPLOADED, UPLOAD_USER_ERROR, UPLOAD_USER_RESET, USERLESS_AVATAR } from '../constants'

const initialState = {
    user: {
        url: USERLESS_AVATAR
    },
    loading: false,
    error: false,
    errorMessage: '',
    signUpSuccess: false
}

export default function newUser (state=initialState, action){
    switch(action.type){
        case UPLOAD_USER_REQUEST:
            return {...state, user: action.payload, loading: true}
        case EMAIL_ALREADY_REGISTERED:
            return {...state, loading: false, error: true, errorMessage: MSG_EMAIL_EXIST}
        case USER_UPLOADED:
            return {...state, signUpSuccess: true, loading: false}
        case UPLOAD_USER_ERROR:
            return {...state, loading: false, error: true, errorMessage: MSG_UPLOAD_ERROR}
        case UPLOAD_USER_RESET:
            return state = initialState
        default:
            return state
    }
}