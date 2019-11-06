import { SIGN_IN_SUCCESS, INCORRECT_USERNAME, INCORRECT_PASSWORD, SIGN_IN_REQUEST, SIGN_IN_RESET } from '../constants'

const initialState = {
    user: {},
    login: false,
    message: ''
}

export default function (state=initialState, action){
    switch (action.type){
        case SIGN_IN_REQUEST:
            return {...state, user: action.payload}
        case INCORRECT_USERNAME:
            return {...state, message: 'Username doesnt exist'}
        case INCORRECT_PASSWORD:
            return {...state, message: 'Wrong password'}
        case SIGN_IN_SUCCESS:
            return {...state, login: true}
        case SIGN_IN_RESET:
            return state = initialState
        default:
            return state
    }
}