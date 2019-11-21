import { SIGN_IN_SUCCESS, INCORRECT_USERNAME, INCORRECT_PASSWORD, SIGN_IN_REQUEST, SIGN_IN_RESET } from '../constants'
import { MSG_WRONG_USER, MSG_WRONG_PASSWORD } from '../constants'

const initialState = {
    user: {},
    loading: false,
    error: false,
    message: ''
}

export default function (state=initialState, action){
    switch (action.type){
        case SIGN_IN_REQUEST:
            return {...state, user: action.payload, loading: true}
        case INCORRECT_USERNAME:
            return {...state, error: true, message: MSG_WRONG_USER, loading: false}
        case INCORRECT_PASSWORD:
            return {...state, error: true, message: MSG_WRONG_PASSWORD, loading: false}
        case SIGN_IN_SUCCESS:
            return {...state, success: true, loading: false, user: action.payload}
        case SIGN_IN_RESET:
            return state = initialState
        default:
            return state
    }
}