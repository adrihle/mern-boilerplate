import { UPLOAD_USER_REQUEST, USER_UPLOADED, UPLOAD_USER_ERROR, UPLOAD_USER_RESET } from '../constants'

const initialState = {
    user: '',
    signUpSuccess: ''
}

export default function newUser (state=initialState, action){
    switch(action.type){
        case UPLOAD_USER_REQUEST:
            return {...state, user: action.payload}
        case USER_UPLOADED:
            return {...state, signUpSuccess: true}
        case UPLOAD_USER_ERROR:
            return {...state, signUpSuccess: false}
        case UPLOAD_USER_RESET:
            return state = initialState
        default:
            return state
    }
}