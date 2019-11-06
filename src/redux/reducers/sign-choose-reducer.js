import { SIGN_PAGE_CHANGE } from '../constants'

export default function (state=true, action) {
    switch (action.type){
        case SIGN_PAGE_CHANGE:
            return state = !state
        default:
            return state
    }
}