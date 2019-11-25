import { LOAD_USERS_SUCCESSS, LOAD_USERS_ERROR } from '../constants'

export default function (state={}, action){
    switch (action.type){
        case LOAD_USERS_SUCCESSS:
            return {...state, success: true, users: action.payload}
        case LOAD_USERS_ERROR:
            return {...state, success:false}
        default:
            return state
    }
}