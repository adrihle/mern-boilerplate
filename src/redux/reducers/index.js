import { combineReducers } from 'redux'
import newUser from './upload-user-reducer'
import signIn from './sign-in-reducer'

export default combineReducers({
    newUser,
    signIn
})